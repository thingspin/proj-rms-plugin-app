import _ from 'lodash';
import $ from 'jquery';
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
      console.error(`cannot find element id '#${this.divID}'`);
      return;
    }
    this.container = node;

    this.loadSVG(this.svgImgPath).then( (svg: any) => {
      if (this.svg === null) {
        const node = this.container.append(svg.node);

        this.svg = Snap(node.find("> svg")[0]);

        this.svgDOM = this.initSvgDOM();
        this.animations = this.initAnimation();
        this.initSvgEvent();

        this.events.on('data-received', this.onDataReceived.bind(this));

        const urlPath = "/";
        const baseUrl = `ws://${this.$location.host()}:${this.$location.port()}/api/plugin-proxy/${this.appId}`;
        this.rsMqttSrv.connect(`${baseUrl}${urlPath}`);
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
      $svg.find(`#modeling1-botton-light${idx+1}-on`).show();
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

  onInitEditMode() { }

  link(scope, elem, attrs, ctrl) { }
}

export {
  RmsMonitorFactoryPanelCtrl as PanelCtrl
};
