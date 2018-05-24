import _ from 'lodash';
import $ from 'jquery';
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

  constructor($scope, $injector, private $element, private rsDsSrv) {
    super($scope, $injector);

    _.defaults(this.panel, {
      options: {
      }
    });

    this.events.on('panel-initialized', this.onInitialized.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));

    this.events.on('render', this.onRender.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
  }

  onInitialized() {
    let node: any = this.$element.find('#' + this.divID);
    if (node.length === 0) {
      console.error("cannot find element id '#" + this.divID + "'");
      return;
    }

    this.divID = node[0].id + "-" + this.panel.id;
    node[0].id = this.divID;
    this.Container = node;

    Snap.load(this.svgImgPath, (data) => {
      $(data.node).appendTo('#' + this.divID);
    }) ;
  }

  onInitEditMode() { }

  onRender() { }

  onDataReceived(results: any) {
    let canUseDs: Boolean = true;

    results.every( (item: any,idx: number): Boolean => {
      let result: Boolean = true;
      if (item.target === "A-series") {
        canUseDs = false;
        result = false;
      }
      return result;
    });

    if (canUseDs) {
      let viewData: Object = this.getViewData(results);

      this.showData(viewData);
    }
  }

  getViewData(results: any): Object {
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
            case "true":
              res[obj.facility].total = (res[obj.facility].total === undefined) ? 0 :
                res[obj.facility].total + obj.count;
              break;
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
    let mainIdx = 0;

    for (let title in viewData) {
      let DOMs = this.Container.find("#modeling2-text > g");
      let $targetDOM = $(DOMs[mainIdx]);

      let totalTextDOM = $targetDOM.find("> text");
      totalTextDOM.html(viewData[title].total + "/" + viewData[title].failed);

      let channelTextDOM = $targetDOM.find("g text");
      channelTextDOM.each((idx, DOM) => {
        let $DOM = $(DOM);
        $DOM.html(viewData[title].channels[idx+1].failed);
      });
      mainIdx++;
    }
  }

  link(scope, elem, attrs, ctrl) { }
}

export {
  RmsMonitorFacilityDefectPanelCtrl as PanelCtrl
};
