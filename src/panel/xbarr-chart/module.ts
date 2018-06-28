import _ from 'lodash';

import {MetricsPanelCtrl} from  'grafana/app/plugins/sdk';
//import * as Chart from 'chart.js/dist/Chart.min';
import 'chart.js/dist/Chart.bundle.min';
import 'chartjs-plugin-annotation/chartjs-plugin-annotation.min';

import './utils';

//const template = require("./templet.html");

class RmsXbarRAnalyticsPanelCtrl extends MetricsPanelCtrl {
  static template = require("./templet.html");

  Chart: any;

  chartID: string;
  initalized: boolean;
  inEditMode: boolean;

  context: any;
  canvas: any;
  chart: any;
  mouse: any;
  data: any;
  series: any[];
  result: any[];

  constructor($scope, $injector, private $window) {
    super($scope, $injector);

    this.Chart = this.$window.Chart;

    this.chartID = 'chart-rms-xbarr-' + this.panel.id;
    this.result = [];
    this.series = [];

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('render', this.onRender.bind(this));
    this.events.on('panel-size-changed', this.onSizeChanged.bind(this));
    this.events.on('panel-initialized', this.onRender.bind(this));

    for (var i = 1; i <= 10000; i++) {
      this.series.push(this.gaussianRandom(1,6));
    }

    this.series = _.countBy(this.series);

    for (var key in this.series) {
      this.result.push({
        x: key,
        y: this.series[key]
      });
    }

    this.data = {
      datasets: [
        {
          label: "data",
          //backgroundColor: color(this.$window.chartColors.blue).alpha(0.2).rgbString(),
          //borderColor: this.$window.chartColors.blue,
          data: this.result
        }
      ]
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
    this.Chart.plugins.register({
      afterDatasetsDraw: function(chart) {
        var ctx = chart.ctx;
        chart.data.datasets.forEach(function(dataset, i) {
          var meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
            meta.data.forEach(function(element, index) {

              ctx.fillStyle = 'rgb(0, 0, 0)';
              var fontSize = 12;

              var dataString = JSON.stringify(dataset.data[index]);

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

    this.chart = new this.Chart(this.context, {
      type: 'line',
      data: this.data,
      options: {
        tooltips: {
          enabled: true
        },
        annotation: {
          annotations: [
            {
                type: 'line',
                id: 'a-line-1',
                mode: 'virtical',

                borderColor: 'red',
                borderDash: [2, 2],
                borderWidth: 2,

                value: 2,

                scaleID: 'x-axis-0',
                label: {
                  backgroundColor: 'rgba(255,0,0,0.8)',
                  fontSize: 12,
                  fontStyle: "bold",
                  fontColor: "#fff",
                  xPadding: 6,
                  yPadding: 6,
                  cornerRadius: 6,
                  position: "center",
                  xAdjust: 0,
                  yAdjust: 0,
                  enabled: true,
                  content: "LSL"
              }
            },
            {
              type: 'line',
              id: 'a-line-2',
              mode: 'virtical',

              borderColor: 'red',
              borderDash: [2, 2],
              borderWidth: 2,

              value: 5,

              scaleID: 'x-axis-0',
              label: {
                backgroundColor: 'rgba(0,0,255,0.8)',
                fontSize: 12,
                fontStyle: "bold",
                fontColor: "#fff",
                xPadding: 6,
                yPadding: 6,
                cornerRadius: 6,
                position: "center",
                xAdjust: 0,
                yAdjust: 0,
                enabled: true,
                content: "USL"
              }
            }
          ],
          drawTime: "afterDatasetsDraw"
        },
        scales: {
          xAxes: [{
            id: 'x-axis-0',
            type: "linear",
            display: true,
            //autoSkip: true,
           // position: "bottom",
            ticks: {
              min: 1,
              max: 6,
              stepSize: 1
            }
            //type: "linear",
            //position: "bottom"
          }]
          ,
          yAxes: [{
            id: 'y-axis-0',
            type: "linear",
            display: true,
            //autoSkip: true,
            ticks: {
              min: 0,
              max: 10000,
              stepSize: 500
            }
            //position: "left"
          }]
        }
        ,
        responsive: true,
        title: {
          display: false,
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
  gaussianRand() {
    var rand = 0;

    for (var i = 0; i < 6; i += 1) {
      rand += Math.random();
    }

    return rand / 6;
  }

  gaussianRandom(start, end) {
    return Math.floor(start + this.gaussianRand() * (end - start + 1));
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
  RmsXbarRAnalyticsPanelCtrl as PanelCtrl
};

