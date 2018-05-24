import _ from 'lodash';
import $ from "jquery";
import * as Snap from "snapsvg/dist/snap.svg-min.js";

import '../../services/remoteSolutionDS';

import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

class RmsMonitorFacilityDefectPanelCtrl extends MetricsPanelCtrl {
  static template = require("./partial/template.html");
  divID: String = "rms-app-monitor-facility-defect";
  svgImgPath: String = "public/plugins/proj-rms-plugin-app/panel/monitor-facility-defect/img/main.svg";

  container: any;
  set Container(container: any) { this.container = container; }
  get Container() {return this.container;}
  svg: any;
  set Svg(svg: any) { this.svg = svg; }
  get Svg() {return this.svg; }

  constructor($scope, $injector, private $element, private rsDsSrv) {
    super($scope, $injector);

    _.defaults(this.panel, {
      options: {
      }
    });

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
    this.Svg = null;

    this.loadSVG(this.svgImgPath).then( (svg: any) => {
      this.Container.append(svg.node);

      this.events.on('data-received', this.onDataReceived.bind(this));
    });
  }

  loadSVG(path) {
    return new Promise((resolve,reject) => {
      Snap.load(path, resolve);
    });
  }

  onInitialized() {
  }

  onInitEditMode() { }

  onRender() { }

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

      this.showData(viewData);
    }
  }

  getViewData(results: any): Object {
    if (this.Svg === null) {
      this.Svg = Snap("#" + this.divID + " svg");
    }

    let data: Object[] = this.rsDsSrv.getTableObj(results);

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
    for (let title in viewData) {
      let titleDOM = this.Svg.select("#title #title" + (mainIdx+1) );
      titleDOM.attr({text: title });

      let DOMs: any = this.Svg.selectAll("#modeling2-text > g");
      let targetDOM: any = DOMs[mainIdx];

      targetDOM.select("text").attr({text: (viewData[title].total + "/" + viewData[title].failed) });
      $(targetDOM.node).find("g text").each((idx: number, DOM: any) => {
        let chInfo = viewData[title].channels[idx+1];
        $(DOM).text(chInfo.failed);
        let $svg = $(this.Svg.node);
        let redNode = $svg.find("#modeling2-" + (mainIdx+1) + "-light" + (idx+1) + "-red");
        let pinkNode = $svg.find("#modeling2-" + (mainIdx+1) + "-light" + (idx+1) + "-pink");
        let lightNode = $svg.find("#modeling2-" + (mainIdx+1) + "-light" + (idx+1) );

        if (chInfo.hasOwnProperty('CNF') && chInfo.CNF !== 0) {
          redNode.show();
          pinkNode.hide();
          lightNode.hide();
        } else if (chInfo.hasOwnProperty('failed') && chInfo.failed !== 0) {
          redNode.hide();
          pinkNode.show();
          lightNode.hide();
        } else {
          redNode.hide();
          pinkNode.hide();
          lightNode.show();
        }
      });
      mainIdx++;
    }
  }

  link(scope, elem, attrs, ctrl) { }
}

export {
  RmsMonitorFacilityDefectPanelCtrl as PanelCtrl
};
