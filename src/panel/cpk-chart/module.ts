import {MetricsPanelCtrl} from  'grafana/app/plugins/sdk';

import 'chart.js/dist/Chart.bundle.min';
import 'chartjs-plugin-annotation/chartjs-plugin-annotation.min';

import './utils';
import { convertToHistogramData } from './histogram';

const template = require("./templet.html");

class RmsCPKAnalyticsPanelCtrl extends MetricsPanelCtrl {
  static template = template;

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

  cp: number;
  cpk: number;
  lsl: number;
  usl: number;
  mean: number;

  constructor($scope, $injector, private $window) {
    super($scope, $injector);

    this.Chart = this.$window.Chart;
    this.chartID = 'chart-rms-cpk-' + this.panel.id;
    this.data = {};
    this.cp = 0;
    this.cpk = 0;
    this.lsl = -1;
    this.usl = +1;
    this.mean = 0;

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('render', this.onRender.bind(this));
    this.events.on('panel-size-changed', this.onSizeChanged.bind(this));
    this.events.on('panel-initialized', this.onRender.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));

    /* Sample for normal distribution
    for (var i = 1; i <= 10000; i++) {
      this.series.push(this.gaussianRandom(1,50));
    }

    this.series = _.countBy(this.series)

    for (var key in this.series) {
      this.result.push({
        "x":key,
        "y":this.series[key]
      })
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
    */
  }

  OnInitialized() {
    this.OnDraw();
  }

  onSizeChanged() {
    //console.log("size changed");
  }

  onInitEditMode() {
  }

  onDataReceived(dataList) {
    let data;

    if (dataList == null || dataList.length > 2) {
      return;
    }

    for ( let i = 0; i < dataList.length; i++) {
      if ( dataList[i].type === 'table' ) {
        for ( let j = 0; j < dataList[i].columns.length ; j++) {
          if ( dataList[i].columns[j].text === 'cpk') {
            this.cpk = dataList[i].rows[0][j];
          } else if (dataList[i].columns[j].text === 'cp') {
            this.cp = dataList[i].rows[0][j];
          } else if (dataList[i].columns[j].text === 'lsl') {
            this.lsl = dataList[i].rows[0][j];
          } else if (dataList[i].columns[j].text === 'usl') {
            this.usl = dataList[i].rows[0][j];
          } else if (dataList[i].columns[j].text === 'mean') {
            this.mean = dataList[i].rows[0][j];
          }
        }
      } else {
        data = dataList[i];
      }
    }

    // Bucket size
    let bucketSize = 10;
    let panelWidth = this.canvas.width;

    // Convert data to histogram data
    let result = convertToHistogramData([data], bucketSize, panelWidth);
    result = result[0].data;

    this.data = {
      datasets: [
        {
          label: "Freq",
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 0.5)',
          borderWidth: 1,
          data: result,
          pointRadius: 2,
          pointHoverRadius: 6
        }
      ]
    };

    this.OnDraw();
  }

  createChart() {
      this.Chart.plugins.register({
        afterDatasetsDraw: function(chart) {
          var ctx = chart.ctx;
          ctx.fillStyle = '#09033f';
          ctx.font= "20px Arial Black";
          ctx.textAlign= "end";
          ctx.fillText("CPK = "+ chart.options.cpk.toFixed(3), chart.width - 70, chart.height * 0.21);
          ctx.fillText("CP = "+ chart.options.cp.toFixed(3), chart.width - 70, chart.height * 0.1);

          chart.data.datasets.forEach(function(dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
              meta.data.forEach(function(element, index) {

                ctx.fillStyle = 'rgb(0, 0, 0)';
                var fontSize = 12;

                //var dataString = JSON.stringify(dataset.data[index]);

                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                var padding = 3;
                var position = element.tooltipPosition();
                ctx.fillText("", position.x, position.y - (fontSize / 2) - padding);
                //ctx.save();
              });
            }
          });
        }
      });

      this.chart = new this.Chart(this.context, {
        type: 'line',
        data: this.data,
        options: {
          cpk: this.cpk,
          cp: this.cp,
          mean: this.mean,
          legend: {
            display: false
          },
          tooltips: {
            enabled: true
          },

          annotation: {
            annotations: [
              {
                  type: 'line',
                  id: 'lsl_line',
                  mode: 'virtical',

                  borderColor: 'red',
                  borderDash: [2, 2],
                  borderWidth: 2,

                  value: this.lsl,

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
                id: 'usl_line',
                mode: 'virtical',

                borderColor: 'red',
                borderDash: [2, 2],
                borderWidth: 2,

                value: this.usl,

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
              },
              {
                type: 'line',
                id: 'mean_line',
                mode: 'virtical',
                borderColor: 'black',
                borderDash: [2, 2],
                borderWidth: 1,
                value: this.mean,
                scaleID: 'x-axis-0',
              }
            ],
            drawTime: "afterDatasetsDraw"
          },

          scales: {
            xAxes: [{
              id: 'x-axis-0',
              type: "linear",
              display: true,
              gridLines: {
                display: false
              },
              //autoSkip: true,
            // position: "bottom",
              /*
              ticks:{
                min: this.limit["xmin"],
                max: this.limit["xmax"]
                //stepSize:
              }
              */
              //type: "linear",
              //position: "bottom"
            }]
            ,
            yAxes: [{
              id: 'y-axis-0',
              type: "linear",
              display: true,
              gridLines: {
                display: true
              },
              //autoSkip: true,
              // ticks:{
              //   min: 0.0,
              //   max: 1.0,
              //   stepSize: 0.1
              // }
              //position: "left"
            }]
          },
          responsive: true,
          title: {
            display: false,
            text: 'CPK for MODEL'
          },
          maintainAspectRatio: false
        }
      });
}

  OnDraw() {
    if (!this.context) {
      return;
    }

    if (this.chart) {
      this.chart.data = this.data;

      let annotations = this.chart.options.annotation.annotations;
      for ( let i = 0; i< annotations.length; i++ ) {
        if ( annotations[i].id === "lsl_line" ) {
          annotations[i].value = this.lsl;
        }else if ( annotations[i].id === "usl_line") {
          annotations[i].value = this.usl;
        }else if ( annotations[i].id === "mean_line") {
          annotations[i].value = this.mean;
        }
      }
      this.chart.options.annotation.annotations = annotations;

      this.chart.options.cpk = this.cpk;
      this.chart.update();
    } else {
      this.createChart();
    }
  }

  onRender() {
  }
  /*
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
*/
  link(scope, elem, attrs, ctrl) {
    this.canvas = elem.find('.chart')[0];
    if (!this.canvas) {
      return;
    }

    this.context = this.canvas.getContext('2d');
  }
}

export {
  RmsCPKAnalyticsPanelCtrl as PanelCtrl
};
