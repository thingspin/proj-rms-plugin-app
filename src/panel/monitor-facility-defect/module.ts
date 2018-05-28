import _ from 'lodash';
import $ from "jquery";
import * as Snap from "snapsvg/dist/snap.svg-min.js";

import '../../services/remoteSolutionDS';

import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';
import {Power0, TimelineMax} from "gsap/TweenMax";

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

class RmsMonitorFacilityDefectPanelCtrl extends MetricsPanelCtrl {
  static template = require("./partial/template.html");
  divID: String = "rms-app-monitor-facility-defect";
  svgImgPath: String = "public/plugins/proj-rms-plugin-app/panel/monitor-facility-defect/img/main.svg";

  private recvData: any;
  set RecvData(recvData: any) { this.recvData = recvData;}
  get RecvData() { return this.recvData;}
  private container: any;
  set Container(container: any) { this.container = container; }
  get Container() {return this.container;}
  private svg: any;
  set Svg(svg: any) { this.svg = svg; }
  get Svg() {return this.svg; }
  private svgDomMap: Object;
  set SvgDomMap(svgDomMap: any) { this.svgDomMap = svgDomMap; }
  get SvgDomMap() { return this.svgDomMap;}

  constructor($scope, $injector, private $element, private rsDsSrv) {
    super($scope, $injector);

    _.defaults(this.panel, {
      options: { }
    });

    this.Svg = this.RecvData = null;

    this.events.on('panel-initialized', this.onInitialized.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('render', this.onRender.bind(this));
  }

  init() {
    let node: any = this.$element.find('#' + this.divID);
    if (node.length === 0) {
      console.error("cannot find element id '#" + this.divID + "'");
      return;
    }
    this.Container = node;

    this.loadSVG(this.svgImgPath).then( (svg: any) => {
      if (this.Svg === null) {
        const node = this.Container.append(svg.node);
        this.Svg = Snap(node.find("> svg")[0]);
        this.events.on('data-received', this.onDataReceived.bind(this));

        this.SvgDomMap = this.initSvgDOM();
      }
    });
  }

  loadSVG(path) {
    return new Promise((resolve,reject) => {
      Snap.load(path, resolve);
    });
  }

  initSvgDOM(): Object {
    let result = [];
    this.Svg.selectAll("#modeling2-text > g").items.forEach((DOM: any, mainIdx: number) => {
      let obj = {
        snapTitle: this.Svg.select("#title #title" + (mainIdx+1) ),
        snapTotal: DOM.select("text"),
        $nodes: [],
      };

      $(DOM.node).find("g text").each((idx: number, DOM: any) => {
        const idTemplate = "#modeling2-" + (mainIdx+1) + "-light" + (idx+1);
        const $svg = $(this.Svg.node);

        let redDom = $svg.find(idTemplate + "-red");
        let greenDom = $svg.find(idTemplate + "-green");
        let yellowDom = $svg.find(idTemplate + "-yellow");
        redDom.hide();
        greenDom.hide();
        yellowDom.hide();

        obj.$nodes.push({
          text: $(DOM),
          red: { dom: redDom, },
          green: { dom: greenDom, },
          yellow: { dom: yellowDom, },
        });
      });
      result.push(obj);
    });

    return result;
  }

  onInitialized() {
  }

  onInitEditMode() { }

  onRender() {
  }

  onDataReceived(results: any) {
    let canUseDs: Boolean = true;

    results.every( (item: any,idx: number): Boolean => {
      if (item.target === "A-series") {
        canUseDs = false;
      }
      return canUseDs;
    });

    if (canUseDs) {
      let viewData: Object = this.getViewData(results);

      this.RecvData = this.showData(viewData);
    }
  }

  getViewData(results: any): Object {

    const data: Object[] = this.rsDsSrv.getTableObj(results);

    let res: Object = {};
    data.forEach( (arr: Object[]) => {
      arr.forEach( (obj: any) => {
        if (res[obj.facility] === undefined) {
          res[obj.facility] = {};
        }
        if (res[obj.facility].channels === undefined) {
          res[obj.facility].channels = {};
        }

        // counting total & failed count
        if (obj.pass !== undefined) {
          switch (obj.pass) {
            case "TRUE":
            case "True":
            case "true":
              res[obj.facility].total = (res[obj.facility].total === undefined) ? 0 :
                res[obj.facility].total + obj.count;
              break;
            case "FALSE":
            case "False":
            case "false":
              res[obj.facility].failed = (res[obj.facility].failed === undefined) ? 0 :
                res[obj.facility].failed + obj.count;

              res[obj.facility].channels[obj.channel] = { failed: obj.count, };
              break;
            default:
              console.error(obj.pass + " is not defined");
          }
        } else {
          res[obj.facility].channels[obj.channel].CNF = obj.count;
        }
      });
    });

    return res;
  }

  showData(viewData) {
    let mainIdx: number;

    mainIdx = 0;
    for (const title in viewData) {
      const svgDOM_MAP: any = this.SvgDomMap[mainIdx];

      svgDOM_MAP.snapTitle.attr({text: title });
      svgDOM_MAP.snapTotal.attr({text: (viewData[title].total + "/" + viewData[title].failed) });

      $.each(viewData[title].channels, (index: string, chInfo: any) => {
        const chDOM = svgDOM_MAP.$nodes[parseInt(index)-1];
        chDOM.text.text(chInfo.failed);

        let chColor: String;
        if (chInfo.hasOwnProperty('CNF') && chInfo.CNF !== 0) {
          chColor = "red";
        } else if (chInfo.hasOwnProperty('failed') && chInfo.failed !== 0) {
          chColor = "yellow";
        } else {
          chColor = "green";
        }
        if (this.RecvData !== null && this.RecvData[title].channels[index] === undefined) {
          chColor = "none";
        }
        viewData[title].channels[index].color = chColor;

        let changed: Boolean;
        if ( this.RecvData !== null && this.RecvData[title].channels[index] !== undefined) {
          changed = (chColor !== this.RecvData[title].channels[index].color) ? true : false;
        } else {
          changed = true;
        }

        if (changed) {
          ["red","green","yellow"].forEach( color => {
            if (color === chColor) {
              let animation = new TimelineMax({ repeat: 1, yoyo: true, });
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

  link(scope, elem, attrs, ctrl) { }
}

export {
  RmsMonitorFacilityDefectPanelCtrl as PanelCtrl
};
