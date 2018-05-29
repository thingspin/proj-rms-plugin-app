import _ from 'lodash';
import $ from "jquery";
import * as Snap from "snapsvg/dist/snap.svg-min.js";

import '../../services/remoteSolutionDS';
import '../../services/remoteSolutionMQTT';

import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';
import {Power0, TimelineMax, TimelineLite} from "gsap/TweenMax";

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

class RmsMonitorFacilityDefectPanelCtrl extends MetricsPanelCtrl {
  static template = require("./partial/template.html");
  divID: String = "rms-app-monitor-facility-defect";
  svgImgPath: String = "public/plugins/proj-rms-plugin-app/panel/monitor-facility-defect/img/main.svg";
  appId: String = "proj-rms-plugin-app";

  private _titleIdxMap = [];
  set titleIdxMap(titleIdxMap) { this._titleIdxMap = titleIdxMap;}
  get titleIdxMap() {return this._titleIdxMap;}
  private getTitleIdx(title): number {
    let index = null;
    this.titleIdxMap.every((id: String, idx: number) => {
      const cond: boolean = (title === id);
      index = cond ? idx : null;
      return !cond;
    });
    return index;
  }
  private _recvData: any = null;
  set recvData(recvData: any) {
    this._recvData = (this._recvData === undefined || this._recvData === null ) ?
      recvData : Object.assign({}, this._recvData, recvData);
  }
  get recvData() { return this._recvData;}

  private _container: any;
  set container(container: any) { this._container = container; }
  get container() {return this._container;}

  private svg: any = null;
  set Svg(svg: any) { this.svg = svg; }
  get Svg() {return this.svg; }

  private _svgDomMap: Object;
  set svgDomMap(svgDomMap: any) { this._svgDomMap = svgDomMap; }
  get svgDomMap() { return this._svgDomMap;}

  private _evtProcMap: any;
  set evtProcMap(evtProcMap: any) { this._evtProcMap = evtProcMap; }
  get evtProcMap() { return this._evtProcMap; }

  private _timeSrv: any;
  set timeSrv(timeSrv: any) { this._timeSrv = timeSrv; }
  get timeSrv() { return this._timeSrv; }

  private _animations: any[] = [];
  set animations(animation: any) { this._animations = animation; }
  get animations() { return this._animations; }

  constructor($scope, $injector, private $element, private $location,
    private rsDsSrv, private rsMqttSrv, timeSrv) {
    super($scope, $injector);
    this.timeSrv = timeSrv;

    _.defaults(this.panel, {
      options: { }
    });

    this.events.on('panel-initialized', this.onInitialized.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('render', this.onRender.bind(this));
    this.events.on('on-RMFDPC-clicked', this.onClicked.bind(this));

    const urlPath = "/";
    const mqttWsUrl = "ws://" + this.$location.host() + ":" + this.$location.port() + "/api/plugin-proxy/" + this.appId + urlPath;
    this.rsMqttSrv.connect(mqttWsUrl);
    this.rsMqttSrv.subscribe = '+/THINGSPIN/EMERGENCY/ALERT';
    // this.rsMqttSrv.subscribe = '#';
    this.rsMqttSrv.recvMessage(this.onMqttRecv.bind(this));

  }

  loadSVG(path) {
    return new Promise((resolve,reject) => {
      Snap.load(path, resolve);
    });
  }

  custom_init() {
    const node: any = this.$element.find('#' + this.divID);
    if (node.length === 0) {
      console.error("cannot find element id '#" + this.divID + "'");
      return;
    }
    this.container = node;

    this.loadSVG(this.svgImgPath).then( (svg: any) => {
      if (this.Svg === null) {
        const node = this.container.append(svg.node);

        this.Svg = Snap(node.find("> svg")[0]);

        this.svgDomMap = this.initSvgDOM();
        this.animations = this.initAnimation();

        this.events.on('data-received', this.onDataReceived.bind(this));
      }
    });
  }


  initSvgDOM(): Object {
    const $svg = $(this.Svg.node);

    let result = [];
    this.Svg.selectAll("#modeling2-text > g").items.forEach((DOM: any, mainIdx: number) => {
      const baseDomId = "#modeling2-" + (mainIdx+1);
      let obj = {
        snapTitle: this.Svg.select("#title #title" + (mainIdx+1) ),
        snapTotal: DOM.select("text"),
        $nodes: [],
      };

      // set Testing Machine Channel DOM
      $(DOM.node).find("g text").each((idx: number, DOM: any) => {
        const baseLightDomId = baseDomId + "-light" + (idx+1);

        const evtDom = $svg.find(baseDomId + "-glass" + (idx+1));
        const redDom = $svg.find(baseLightDomId + "-red");
        const greenDom = $svg.find(baseLightDomId + "-green");
        const yellowDom = $svg.find(baseLightDomId + "-yellow");

        evtDom.on("click", (evt) => {
          this.events.emit("on-RMFDPC-clicked", {
            $target: $(evt.target),
            idx: mainIdx,
            subIdx: idx,
          });
        });

        redDom.hide();
        greenDom.hide();
        yellowDom.hide();

        obj.$nodes.push({
          text: $(DOM),
          evt: evtDom,
          red: { dom: redDom, },
          green: { dom: greenDom, },
          yellow: { dom: yellowDom, },
        });
      });

      result.push(obj);
    });

    return result;
  }

  initAnimation() {
    let results: any[] = [];
    // set Process Animation DOM
    const $svg = $(this.Svg.node);
    const tl = new TimelineLite({ onComplete: function() { this.restart(); }, });

    [
      $svg.find("#arrow1"), $svg.find("#arrow2"), $svg.find("#arrow3"),
      $svg.find("#arrow4"), $svg.find("#arrow5"), $svg.find("#arrow6"),
      $svg.find("#arrow7"), $svg.find("#arrow8"), $svg.find("#arrow9"),
    ].forEach( (DOM: any, idx: Number, arr: Object[]) => {
      arr.forEach((subDOM: any, subIdx: Number) => { tl.set(subDOM[0], { opacity: (subIdx === idx) ? 1 : 0, }); });
      tl.to(DOM[0], 0, {opacity: 0}, "+=0.4");
    });
    results.push(tl);

    return results;
  }

  onClicked(evtData: any) {
    const range = this.timeSrv.timeRange();
    const {idx, subIdx} = evtData;

    let title = this.titleIdxMap[idx];
    if (title === undefined || title === null ) {
      title = "All";
    }

    // const data = this.RecvData[title];
    const channelId = String(subIdx+1);
    // const {color} = data.channels[channelId];

    let varList = {
      "var-DATABASE": "RMS-CENTER-INFLUXDB(V1.0)",
      "var-MODEL": "All",
      "var-FACILITY": title,
      "var-CHANNEL": channelId,
      "var-PASS": "false",
      "var-INTERVAL": "$__auto_interval_INTERVAL",
      "from": range.raw.from,
      "to": range.raw.to,
    };
    this.$location.path("/d/rAgfpx7iz/modelbyeol-geomsagirog").search(varList);
  }

  onInitialized() { }
  onInitEditMode() { }
  onRender() { }

  onDataReceived(results: any) {
    let canUseDs: Boolean;

    results.every( (item: any,idx: number): Boolean => {
      canUseDs = (item.target === "A-series") ? false : true;
      return canUseDs;
    });

    if (canUseDs) {
      const viewData: Object = this.getViewData(results);
      this.recvData = this.showData(viewData);
    }
  }

  getViewData(results: any): Object {

    const data: Object[] = this.rsDsSrv.getTableObj(results);

    let res: Object = {};
    data.forEach( (arr: Object[]) => {
      arr.forEach( ({facility, pass, count, channel}: any) => {
        if (res[facility] === undefined) {
          res[facility] = {};
        }
        if (res[facility].channels === undefined) {
          res[facility].channels = {};
        }

        // counting total & failed count
        if (pass !== undefined) {
          switch (pass) {
            case "TRUE":
            case "True":
            case "true":
              res[facility].total = (res[facility].total === undefined) ? count :
                res[facility].total + count;
              break;
            case "FALSE":
            case "False":
            case "false":
              res[facility].total = (res[facility].total === undefined) ? count :
                res[facility].total + count;
              res[facility].failed = (res[facility].failed === undefined) ? count :
                res[facility].failed + count;

              res[facility].channels[channel] = { failed: count, };
              break;
            default:
              console.error(pass + " is not defined");
          }
        } else {
          res[facility].channels[channel].CNF = count;
        }
      });
    });

    return res;
  }

  showData(viewData: Object) {
    for (const title in viewData) {
      let mainIdx: number = this.getTitleIdx(title);
      if (mainIdx === null) {
        mainIdx = this.titleIdxMap.push(title) - 1;
      }
      const {snapTitle, snapTotal, $nodes}: any = this.svgDomMap[mainIdx];

      snapTitle.attr({text: title });
      snapTotal.attr({text: (viewData[title].total + "/" + (viewData[title].failed === undefined ? 0 : viewData[title].failed) )});
      let changed: Boolean;

      [1,2,3,4].forEach((chIdx) => {
        const index: string = String(chIdx);
        const chInfo = viewData[title].channels[index];
        const chDOM = $nodes[chIdx-1];
        let chColor: String;
        if (chInfo === undefined) {
          chDOM.text.text(0);
          chColor = "green";
          viewData[title].channels[index] = {};
          viewData[title].channels[index].color = chColor;
        } else  {
          chDOM.text.text(chInfo.failed);

          if (chInfo.hasOwnProperty('CNF') && chInfo.CNF !== 0) {
            chColor = "red";
          } else if (chInfo.hasOwnProperty('failed') && chInfo.failed !== 0) {
            chColor = "yellow";
          } else {
            chColor = "green";
          }
          viewData[title].channels[index].color = chColor;
        }

        if ( this.recvData !== null && this.recvData[title] !== undefined) {
          if (this.recvData[title].channels[index] === undefined) {
            changed = true;
          } else {
            changed = (chColor !== this.recvData[title].channels[index].color) ? true : false;
          }
        } else {
          changed = true;
        }

        if (changed) {
          ["red","green","yellow"].forEach( (color: string) => {
            if (color === chColor) {
              const animation: any = new TimelineMax({ repeat: 1, yoyo: true, });
              animation.set(chDOM[color].dom[0], { opacity: 1, }).to(chDOM[color].dom[0], 0.5, { opacity: 0, ease: Power0.easeNone });
              animation.play();
              chDOM[color].dom.show();
            } else {
              chDOM[color].dom.hide();
            }
          });
        }
      });
      mainIdx++;
    }
    return viewData;
  }

  onMqttRecv(topic: string, data: any) {
    console.log(topic, data);
  }

  link(scope, elem, attrs, ctrl) { }
}

export {
  RmsMonitorFacilityDefectPanelCtrl as PanelCtrl
};
