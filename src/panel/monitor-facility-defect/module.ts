import _ from 'lodash';
import $ from "jquery";
import * as Snap from "snapsvg/dist/snap.svg-min.js";

import '../../services/remoteSolutionDS';
import '../../services/remoteSolutionMQTT';

import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';
import {TimelineMax, Power3} from "gsap/TweenMax";

const appId = "proj-rms-plugin-app";
const baseCssFilename = "rms-plugins-app";
loadPluginCss({
  dark: `plugins/${appId}/css/${baseCssFilename}.dark.css`,
  light: `plugins/${appId}/css/${baseCssFilename}.light.css`
});

class RmsMonitorFacilityDefectPanelCtrl extends MetricsPanelCtrl {
  static template = require("./partial/template.html");
  panelDirName = "monitor-facility-defect";
  divID: String = "rms-app-monitor-facility-defect";
  svgImgPath: String = `public/plugins/${appId}/panel/${this.panelDirName}/img/main.svg`;

  private _titleIdxMap = [];
  set titleIdxMap(titleIdxMap) { this._titleIdxMap = titleIdxMap;}
  get titleIdxMap() {return this._titleIdxMap;}
  getTitleIdx(title): number {
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

  private _svg: any = null;
  set svg(svg: any) { this._svg = svg; }
  get svg() {return this._svg; }

  private _svgDomMap: Object;
  set svgDomMap(svgDomMap: any) { this._svgDomMap = svgDomMap; }
  get svgDomMap() { return this._svgDomMap;}

  private _evtProcMap: any;
  set evtProcMap(evtProcMap: any) { this._evtProcMap = evtProcMap; }
  get evtProcMap() { return this._evtProcMap; }

  private _timeSrv: any;
  set timeSrv(timeSrv: any) { this._timeSrv = timeSrv; }
  get timeSrv() { return this._timeSrv; }

  private _animations: Object = {};
  set animations(animation: any) { this._animations = animation; }
  get animations() { return this._animations; }

  constructor($scope, $injector, private $element,
     private $location,private rsDsSrv, private rsMqttSrv,
     timeSrv) {
    super($scope, $injector);
    this.timeSrv = timeSrv;

    this.events.on('panel-initialized', this.onInitialized.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('render', this.onRender.bind(this));
    this.events.on('on-RMFDPC-clicked', this.onClicked.bind(this));
  }

  loadSVG(path) {
    return new Promise((resolve, reject) => {
      Snap.load(path, resolve);
    });
  }

  onInitialized() {
    const node: any = this.$element.find("ng-transclude > div");
    if (node.length === 0) {
      console.error(`cannot find element id '#${this.divID}'`);
      return;
    }
    this.container = node;

    this.loadSVG(this.svgImgPath).then( (svg: any) => {
      if (this.svg === null) {
        const node = this.container.append(svg.node);

        this.svg = Snap(node.find("> svg")[0]);

        this.svgDomMap = this.initSvgDOM();
        this.animations = this.initAnimation();
        this.initSvgEvent();

        this.events.on('data-received', this.onDataReceived.bind(this));

        const urlPath = "/";
        const baseUrl = `ws://${this.$location.host()}:${this.$location.port()}/api/plugin-proxy/${appId}`;
        this.rsMqttSrv.connect(`${baseUrl}${urlPath}`);
        this.rsMqttSrv.subscribe = '+/THINGSPIN/EMERGENCY/+';
        this.rsMqttSrv.recvMessage(this.onMqttRecv.bind(this));
      }
    }).catch(e => {
      console.error(e);
    });
  }


  initSvgDOM(): Object {
    const $svg = $(this.svg.node);

    let result = [];
    ["modeling2-a", "modeling2-b", "modeling2-c"].forEach( (baseId: String, mainIdx: number) => {
      const $dom = $svg.find(`#${baseId}-text`);
      const tops = $dom.find("> text");
      let obj = {
        $title: $(tops.get(0)),
        $total: $(tops.get(1)),
        $nodes: []
      };

      $dom.find("g > text").each((idx: number, textDOM: any) => {
        const baseLightDomId = `#${baseId}-${(idx+1)}-light`;

        const redDom = $svg.find(baseLightDomId + "-red");
        const greenDom = $svg.find(baseLightDomId + "-green");
        const yellowDom = $svg.find(baseLightDomId + "-yellow");

        redDom.css("cursor", "pointer");
        greenDom.css("cursor", "pointer");
        yellowDom.css("cursor", "pointer");

        const clickEvt = (evt) => {
          this.events.emit("on-RMFDPC-clicked", {
            $target: $(evt.target),
            idx: mainIdx,
            subIdx: idx
          });
        };
        redDom.on("click", clickEvt.bind(this));
        greenDom.on("click", clickEvt.bind(this));
        yellowDom.on("click", clickEvt.bind(this));

        redDom.hide();
        greenDom.hide();
        yellowDom.hide();

        obj.$nodes.push({
          text: $(textDOM),
          red: { dom: redDom },
          green: { dom: greenDom },
          yellow: { dom: yellowDom }
        });
      });

      result.push(obj);
    });
    return result;
  }

  initSvgEvent() {
    const $svg = $(this.svg.node);
    const baseId = "modeling1-title";
    const $warnTitleDOM = $svg.find(`#${baseId}7-warning`);

    $warnTitleDOM.on("click", (evt) => {
      if (this.animations.ALERT.isRun) {
        $warnTitleDOM.hide();
        $svg.find(`#${baseId}7`).show();

        this.animations.ALERT.ani.pause(0);
        this.animations.ALERT.isRun = false;
      }

      if (!this.animations.LINE.isRun) {
        _.range(10).forEach((idx: number) => {
          const id = `modeling1`;
          $svg.find(`#${id}-machine${idx+1}-on`).show();
          $svg.find(`#${id}-machine${idx+1}-off`).hide();

          $svg.find(`#${id}-title${idx+1}`).show();
          $svg.find(`#${id}-title${idx+1}-warning`).hide();

          $svg.find(`#${id}-botton-light${idx+1}-on`).show();
          $svg.find(`#${id}-botton-light${idx+1}-warning`).hide();
        });
        this.animations.LINE.isRun = true;
      }
    });
  }

  initAnimation() {
    // set Process Animation DOM
    const $svg = $(this.svg.node);

    const $warn = $svg.find("#modeling1-warnning");
    const warnAnimation = new TimelineMax({ repeat: -1, yoyo: true });

    _.range(10).forEach((idx: number) => {
      $svg.find(`#modeling1-title${idx+1}-warning`).hide();
      $svg.find(`#modeling1-botton-light${idx+1}-warning`).hide();
      $svg.find(`#modeling1-botton-light${idx+1}-on`).hide();
    });
    warnAnimation.fromTo($warn[0], 0.8,{ opacity: 0 }, { opacity: 1, ease: Power3.easeNone });
    warnAnimation.pause(0);

    // const lineAnimation = new TimelineLite({ onComplete: function() { this.restart(); } });

    // [
    //   $svg.find("#arrow1"), $svg.find("#arrow2"), $svg.find("#arrow3"),
    //   $svg.find("#arrow4"), $svg.find("#arrow5"), $svg.find("#arrow6"),
    //   $svg.find("#arrow7"), $svg.find("#arrow8"), $svg.find("#arrow9")
    // ].forEach( (DOM: any, idx: Number, arr: Object[]) => {
    //   arr.forEach((subDOM: any, subIdx: Number) => { lineAnimation.set(subDOM[0], { opacity: (subIdx === idx) ? 1 : 0 }); });
    //   lineAnimation.to(DOM[0], 0, {opacity: 0}, "+=0.4");
    // });

    return {
      ALERT: {
        isRun: false,
        ani: warnAnimation,
      },
      LINE: {
        isRun: true,
      }
    };
  }

  onClicked(evtData: any) {
    const {idx, subIdx} = evtData;
    const channelId = String(subIdx+1);
    const range = this.timeSrv.timeRange();
    const title = !this.titleIdxMap[idx] ? "All" : this.titleIdxMap[idx];
    // const data = this.RecvData[title];
    // const {color} = data.channels[channelId];


    this.$location.path("/d/rAgfpx7iz/modelbyeol-geomsagirog").search({
      "var-DATABASE": "RMS-CENTER-INFLUXDB(V1.0)",
      "var-MODEL": "All",
      "var-FACILITY": title,
      "var-CHANNEL": channelId,
      "var-PASS": "false",
      "var-INTERVAL": "$__auto_interval_INTERVAL",
      "from": range.raw.from,
      "to": range.raw.to
    });
  }

  onInitEditMode() { }

  onRender() { }

  onDataReceived(results: any) {
    let canUseDs: Boolean;

    results.every( (item: any, idx: number): Boolean => {
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
        if (!res[facility]) {
          res[facility] = {};
        }
        if (!res[facility].channels) {
          res[facility].channels = {};
        }

        // counting total & failed count
        if (pass !== undefined) {
          switch (pass) {
            case "TRUE": case "True": case "true":
              res[facility].total = (res[facility].total === undefined) ? count :
                res[facility].total + count;
              break;
            case "FALSE": case "False": case "false":
              res[facility].total = (res[facility].total === undefined) ? count :
                res[facility].total + count;
              res[facility].failed = (res[facility].failed === undefined) ? count :
                res[facility].failed + count;

              res[facility].channels[channel] = { failed: count };
              break;
            default:
              console.error(`${pass} is not defined`);
          }
        } else {
          if (!res[facility].channels[channel]) {
            res[facility].channels[channel] = {};
          }
          res[facility].channels[channel].CNF = count;
        }
      });
    });

    return res;
  }

  showData(viewData: Object= {}) {
    for (const title in viewData) {
      let mainIdx: number = this.getTitleIdx(title);
      if (mainIdx === null) {
        mainIdx = this.titleIdxMap.push(title) - 1;
      }
      const {$title, $total, $nodes}: any = this.svgDomMap[mainIdx];

      $title.text(title);
      $total.text( `${!viewData[title].total ? 0 : viewData[title].total} / ${(!viewData[title].failed ? 0 : viewData[title].failed)}` );

      [1, 2, 3, 4].forEach((chIdx) => {
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

        let changed: Boolean;
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
          ["red", "green", "yellow"].forEach( (color: string) => {
            if (color === chColor) {
              const animation: any = new TimelineMax({ repeat: 1, yoyo: true });
              animation.fromTo(chDOM[color].dom[0], 0.5, { opacity: 1 }, { opacity: 0.1, ease: Power3.easeNone });
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

  onMqttRecv(topic: string, bin: any) {
    // const msg = bin.toString();
    // const {fields, tags} = JSON.parse(msg);
    const topics = topic.split("/");
    const command = topics[topics.length-1];
    console.log(command);
    switch (command) {
      case "ALERT": this.warningAnimation(); break;
      case "LINESTOP": this.lineAnimation(); break;
      default: console.error(`command not found : '${command}'`); break;
    }
  }

  warningAnimation() {
    if (!this.animations.ALERT.isRun) {
      const $warnTitleDOM = $(this.svg.select("#modeling1-title7-warning").node);
      this.refresh();

      $warnTitleDOM.show();
      this.animations.ALERT.ani.play();
      this.animations.ALERT.isRun = true;
    }
  }

  lineAnimation() {
    this.warningAnimation();
    if (this.animations.LINE.isRun) {
      const $svg = $(this.svg.node);
      const id = `modeling1`;
      // this.animations.LINE.ani.puase(0);
      this.animations.LINE.isRun = false;
      _.range(10).forEach((idx: number) => {
        $svg.find(`#${id}-machine${idx+1}-on`).hide();
        $svg.find(`#${id}-machine${idx+1}-off`).show();

        $svg.find(`#${id}-title${idx+1}`).hide();
        $svg.find(`#${id}-title${idx+1}-warning`).show();

        $svg.find(`#${id}-botton-light${idx+1}-on`).hide();
      });
      $svg.find(`#${id}-botton-light7-warning`).show();
    }
  }

  link(scope, elem, attrs, ctrl) { }
}

export {
  RmsMonitorFacilityDefectPanelCtrl as PanelCtrl
};
