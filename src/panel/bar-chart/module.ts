import {PanelCtrl, MetricsPanelCtrl} from  'grafana/app/plugins/sdk';

import * as Chart from 'chart.js/dist/Chart.min';
import * as cbundle from 'chart.js/dist/Chart.bundle.min';

const template = require("./templet.html");

class RmsAlarmRulePanelCtrl extends MetricsPanelCtrl {
  static template = template;

  chartID: string;
  initalized: boolean;
  inEditMode: boolean;

  context: any;
  canvas: any;
  chart: any;
  mouse: any;

  constructor($scope, $injector, $http, $location, uiSegmentSrv, annotationsSrv, private $window) {
    super($scope, $injector);

    this.chartID = 'chart-rms-alrams-' + this.panel.id;

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('render', this.onRender.bind(this));
    this.events.on('panel-size-changed', this.onSizeChanged.bind(this));
    this.events.on('panel-initialized', this.onRender.bind(this));
  }

  OnInitialized() {
    this.OnDraw();
  }

  onSizeChanged() {
    this.OnDraw();
  }

  onInitEditMode() {
  }

  createChart() {
    this.chart = new Chart(this.context, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false
                  }
              }]
        },
        tooltips: {
            enabled: true
        },
        maintainAspectRatio: false
      }
    });
  }

  OnDraw() {
    let chart = this.chart;
    if (!this.context) {
      return;
    }

    if (!chart) {
      this.createChart();
    }
  }

  onRender() {
    if (this.context) {
      this.OnDraw();
    }
  }

  link(scope, elem, attrs, ctrl) {
    this.canvas = elem.find('.chart')[0];

    if (!this.canvas) {
      return;
    }

    this.context = this.canvas.getContext('2d');
  }
}

export {
  RmsAlarmRulePanelCtrl as PanelCtrl
};
