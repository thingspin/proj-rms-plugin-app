import _ from 'lodash';
import $ from 'jquery';
import 'jquery-ui';
import 'jquery.tabulator/dist/js/tabulator.min';
import * as d3 from "d3";
import * as Snap from "snapsvg/dist/snap.svg-min.js";

import {PanelCtrl, MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/panel/monitor-factory/css/tabulator.min.css',
  light: 'plugins/proj-rms-plugin-app/panel/monitor-factory/css/tabulator.min.css'
});

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

const template = require("./partial/templet.html");
const options = require("./partial/options.html");

class RmsMonitorFactoryPanelCtrl extends MetricsPanelCtrl {
  static template = template;
  
  divID: string;
  svgID: string;
  container: any;

  panelDefaults = {
    options: {
    }
  };

  constructor($scope, $injector, $http, $location, uiSegmentSrv, annotationsSrv) {
    super($scope, $injector);

    _.defaults(this.panel, this.panelDefaults);

    this.divID = 'rms-app-monitor-factory-' + this.panel.id;
    this.svgID = 'rms-app-monitor-factory-svg-' + this.panel.id;

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('render', this.onRender.bind(this));
    this.events.on('panel-initialized', this.onInitialized.bind(this));
  }
  
  setContainer(container) {
    this.container = container;
  }

  onInitialized() {

  }

  onInitEditMode() {
  }

  onRender() {
  }

  link(scope, elem, attrs, ctrl) {
      var node = elem.find('.thingspin-rms-monitor-factory');
      node[0].id = this.divID;
      ctrl.setContainer(node);

      Snap.load("public/plugins/proj-rms-plugin-app/img/rms-fatory-kr.svg", onSVGLoaded) ;
      
      function onSVGLoaded(data) { 
        $(data.node).appendTo('#'+ctrl.divID);
      }

  }
}

export {
  RmsMonitorFactoryPanelCtrl as PanelCtrl
};
