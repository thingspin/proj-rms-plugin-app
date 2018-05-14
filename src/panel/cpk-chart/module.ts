import {PanelCtrl, MetricsPanelCtrl} from  'grafana/app/plugins/sdk';

import * as Chart from 'chart.js/dist/Chart.min';
import 'chart.js/dist/Chart.bundle.min';
import './utils';

const template = require("./templet.html");

var color = Chart.helpers.color;

Chart.plugins.register({
  afterDatasetsDraw: function(chart) {
    var ctx = chart.ctx;
    chart.data.datasets.forEach(function(dataset, i) {
      var meta = chart.getDatasetMeta(i);
      if (!meta.hidden) {
        meta.data.forEach(function(element, index) {

          ctx.fillStyle = 'rgb(0, 0, 0)';
          var fontSize = 12;
          // var fontStyle = 'normal';
          // var fontFamily = 'Helvetica Neue';
          // ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

          var dataString = dataset.data[index].toString();

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var padding = 3;
          var position = element.tooltipPosition();
          ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
        });
      }
    });
  }
});

class RmsAlarmRulePanelCtrl extends MetricsPanelCtrl {
  static template = template;

  chartID: string;
  initalized: boolean;
  inEditMode: boolean;

  context: any;
  canvas: any;
  chart: any;
  mouse: any;
  data: any;

  constructor($scope, $injector, $http, $location, uiSegmentSrv, annotationsSrv, private $window) {
    super($scope, $injector);

    this.chartID = 'chart-rms-alrams-' + this.panel.id;

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('render', this.onRender.bind(this));
    this.events.on('panel-size-changed', this.onSizeChanged.bind(this));
    this.events.on('panel-initialized', this.onRender.bind(this));

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        type: 'bar',
        label: 'Dataset 1',
        backgroundColor: color($window.chartColors.red).alpha(0.2).rgbString(),
        borderColor: $window.chartColors.red,
        data: [
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor()
        ]
      }, {
        type: 'line',
        label: 'Dataset 2',
        backgroundColor: color($window.chartColors.blue).alpha(0.2).rgbString(),
        borderColor: $window.chartColors.blue,
        data: [
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor()
        ]
      }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: color($window.chartColors.green).alpha(0.2).rgbString(),
        borderColor: $window.chartColors.green,
        data: [
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor(),
          $window.randomScalingFactor()
        ]
      }]
    };    
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
      data: this.data,
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'CPK for MODEL ABC0001 (or INSPECTION ITEM - L/Current)'
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
