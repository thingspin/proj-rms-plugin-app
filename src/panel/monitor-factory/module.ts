import $ from 'jquery';
import * as Snap from "snapsvg/dist/snap.svg-min.js";

import '../../services/remoteSolutionDS';
import '../../services/remoteSolutionMQTT';

import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

const appId = "proj-rms-plugin-app";
const baseCssFilename = "rms-plugins-app";
loadPluginCss({
  dark: `plugins/${appId}/css/${baseCssFilename}.dark.css`,
  light: `plugins/${appId}/css/${baseCssFilename}.light.css`
});

class RmsMonitorFactoryPanelCtrl extends MetricsPanelCtrl {
  static template = require("./partial/template.html");
  panelDirName: String = "monitor-factory";
  appId: String = "proj-rms-plugin-app";
  divID: String = "rms-app-monitor-factory";
  svgImgPath: String = `public/plugins/${appId}/panel/${this.panelDirName}/img/main.svg`;

  private _container: any;
  set container(container: any) { this._container = container; }
  get container() {return this._container;}

  private _svg: any = null;
  set svg(svg: any) { this._svg = svg; }
  get svg() {return this._svg; }

  private _recvData: any = null;
  set recvData(recvData: any) {
    this._recvData = (this._recvData === undefined || this._recvData === null ) ?
      recvData : Object.assign({}, this._recvData, recvData);
  }
  get recvData() { return this._recvData;}

  private _animations: Object = {};
  set animations(animation: any) { this._animations = animation; }
  get animations() { return this._animations; }

  private _svgDOM: Object = null;
  set svgDOM(svgDOM) { this._svgDOM = svgDOM; }
  get svgDOM() { return this._svgDOM; }

  constructor($scope, $injector, private $element, private $location,
    private rsMqttSrv, private rsDsSrv) {
    super($scope, $injector);

    this.events.on('panel-initialized', this.onInitialized.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
  }

  loadSVG(path) {
    return new Promise((resolve,reject) => {
      Snap.load(path, resolve);
    });
  }

  onInitialized() {
    const node: any = this.$element.find("ng-transclude > div");
    if (node.length === 0) {
      console.error("cannot find element id '#" + this.divID + "'");
      return;
    }
    this.container = node;

    this.loadSVG(this.svgImgPath).then( (svg: any) => {
      if (this.svg === null) {
        const node = this.container.append(svg.node);

        this.svg = Snap(node.find("> svg")[0]);

        this.svgDOM = this.initSvgDOM();
        this.animations = this.initAnimations();

        this.events.on('data-received', this.onDataReceived.bind(this));

        const urlPath = "/";
        const baseUrl = "ws://" + this.$location.host() + ":" + this.$location.port() + "/api/plugin-proxy/" + this.appId;
        this.rsMqttSrv.connect(baseUrl + urlPath);
        this.rsMqttSrv.subscribe = '+/THINGSPIN/EMERGENCY/+';
        this.rsMqttSrv.recvMessage(this.onMqttRecv.bind(this));
      }
    });
  }

  initSvgDOM() {
    const $svg = $(this.svg.node);

    let DOM = $svg.find("g");

    let result = {
      DOM: DOM,
    };
    return result;
  }

  initAnimations() { }

  onDataReceived(results: any) {
    let canUseDs: Boolean;

    results.every( (item: any,idx: number): Boolean => {
      canUseDs = (item.target === "A-series") ? false : true;
      return canUseDs;
    });

    if (canUseDs) {
      const viewData: Object = this.convData(results);
      this.recvData = this.visualization(viewData);
    }
  }

  convData(results: any): Object {
    const data: Object[] = this.rsDsSrv.getTableObj(results);

    return data;
  }

  visualization(viewData: Object): Object {
    console.log(viewData);
    return viewData;
  }


  onMqttRecv(topic: string, bin: any) {
    // const msg = bin.toString();
    // const {fields, tags} = JSON.parse(msg);
    const topics = topic.split("/");
    const command = topics[topics.length-1];

    const animation = this.animations[command];
    if (animation !== undefined) {
      animation.stop();
      // console.log(topic, fields, tags);
    }
  }

  onInitEditMode() { }

  link(scope, elem, attrs, ctrl) { }
}

export {
  RmsMonitorFactoryPanelCtrl as PanelCtrl
};
