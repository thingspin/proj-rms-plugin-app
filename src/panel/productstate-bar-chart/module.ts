import {MetricsPanelCtrl} from  'grafana/app/plugins/sdk';

import * as Chart from 'chart.js/dist/Chart.min';

class RmsProductStateBarChartPanelCtrl extends MetricsPanelCtrl {
  static template = require("./templet.html");

  chartID: string;
  initalized: boolean;
  inEditMode: boolean;

  context: any;
  canvas: any;
  chart: any;
  mouse: any;
  labels = [];
  device = [];
  data = [];
  dataSet = [];
  dataMap = new Map();
  barChartData: any;
  COLOR = ['#4dc9f6','#f67019','#f53794','#537bc4','#acc236','#166a8f','#00a950','#58595b','#8549ba'];
  backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
  ];
  borderColor = [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
  ];

  constructor($scope, $injector) {
    super($scope, $injector);
    this.chart = null;
    this.chartID = `chart-rms-product-state-${this.panel.id}`;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
  }

  onInitialized() {
    this.initalized = false;
  }

  onInitEditMode() {
  }

  createChart(inputData) {
    if (inputData) {
      const charOpts = {
        type: 'bar',
        data: inputData,
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                callback: function(value, index, values) {
                    return value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
              }
            }]
          },
          tooltips: {
            mode: 'index',
            intersect: false,
            enabled: true,
            callbacks: {
              label: function(tooltipItem, data) {
                  let label = data.datasets[tooltipItem.datasetIndex].label || '';

                  if (label) {
                      label += ': ';
                  }

                  label += tooltipItem.yLabel.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                  return label;
              }
            }
          }
        }
      };
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(this.context, charOpts);
    } else {
      if(this.chart) this.chart.clear();
    }
  }

  addData(chart, data) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
  }

  removeData(chart) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
  }

  onDataReceived(dataList) {
    if (dataList.length === 0) {
      this.createChart(null);
    } else {
      if (dataList[0].rows) {
        Promise.resolve(this.transformerData(dataList));
      }
    }
  }

  link(scope, elem, attrs, ctrl) {
    this.canvas = elem.find('.chart')[0];
    if (!this.canvas) {
      return;
    }
    this.context = this.canvas.getContext('2d');
  }

  transformerData(dataList) {
    this.labels = [];
    this.device = [];
    this.data = [];
    this.dataSet = [];
    this.barChartData = {};

    var rows = dataList[0].rows;
    rows.forEach((row, count) => {
      row.forEach((item, row_count) => {
        switch (row_count) {
          case 1:
          {
            if (this.labels.indexOf(item) === -1) {
              this.labels.push(item);
            }
          }
          break;
          case 2:
          {
            if (this.device.indexOf(item) === -1) {
              this.device.push(item);
            }
          }
          break;
          case 3:
          {
            this.data.push(item);
          }
          break;
          default:
          break;
        }
      });
    });

    var dataRange = this.labels.length;
    var map = new Map();
    this.labels.forEach((label, i) => {
      var deviceData = [];
      var obj = {
        label : label,
        backgroundColor: this.backgroundColor[i],
        borderColor: this.borderColor[i],
        borderWidth: 1,
        data: deviceData
      };
      map.set(label, obj);
    });

    this.data.forEach((item, data_count) => {
      var list = map.get(this.labels[data_count%dataRange]);
      list.data.push(item);
      map.set(this.labels[data_count%dataRange],list);
    });

    var dataset = Array.from(map.values());

    this.barChartData = {
      labels: this.device,
      datasets: dataset
    };
    this.createChart(this.barChartData);
  }
}

export {
  RmsProductStateBarChartPanelCtrl as PanelCtrl
};
