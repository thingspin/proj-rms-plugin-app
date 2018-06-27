import {MetricsPanelCtrl} from  'grafana/app/plugins/sdk';

import * as Chart from 'chart.js/dist/Chart.min';
// import * as cbundle from 'chart.js/dist/Chart.bundle.min';

const template = require("./templet.html");

class RmsInspectionStateBarChartPanelCtrl extends MetricsPanelCtrl {
  static template = template;

  chartID: string;
  initalized: boolean;
  inEditMode: boolean;

  context: any;
  canvas: any;
  chart: any;
  mouse: any;
  labels = [];
  device = [];
  inspection = [];
  data = [];
  dataSet = [];
  dataMap = new Map();
  barChartData: any;
  colors = [
    '#7EB26D',
    '#EAB839',
    '#6ED0E0',
    '#EF843C',
    '#E24D42',
    '#1F78C1',
    '#BA43A9',
    '#705DA0',
    '#508642',
    '#CCA300',
    '#447EBC',
    '#C15C17',
    '#890F02',
    '#0A437C',
    '#6D1F62',
    '#584477',
    '#B7DBAB',
    '#F4D598',
    '#70DBED',
    '#F9BA8F',
    '#F29191',
    '#82B5D8',
    '#E5A8E2',
    '#AEA2E0',
    '#629E51',
    '#E5AC0E',
    '#64B0C8',
    '#E0752D',
    '#BF1B00',
    '#0A50A1',
    '#962D82',
    '#614D93',
    '#9AC48A',
    '#F2C96D',
    '#65C5DB',
    '#F9934E',
    '#EA6460',
    '#5195CE',
    '#D683CE',
    '#806EB7',
    '#3F6833',
    '#967302',
    '#2F575E',
    '#99440A',
    '#58140C',
    '#052B51',
    '#511749',
    '#3F2B5B',
    '#E0F9D7',
    '#FCEACA',
    '#CFFAFF',
    '#F9E2D2',
    '#FCE2DE',
    '#BADFF4',
    '#F9D9F9',
    '#DEDAF7',
  ];

  constructor($scope, $injector) {
    super($scope, $injector);
    this.chart = null;
    this.chartID = 'chart-rms-product-state-' + this.panel.id;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
  }

  onInitialized() {
    this.initalized = false;
  }

  onInitEditMode() {
  }

  createChart(inputData) {
    if (inputData !== undefined) {
      const charOpts = {
        type: 'bar',
        data: inputData,
        options: {
          maintainAspectRatio: false
        }
      };
      if (this.chart == null) {
        this.chart = new Chart(this.context, charOpts);
      } else {
        this.chart.destroy();
        this.chart = new Chart(this.context, charOpts);
        // this.removeData(this.chart);
        // this.addData(this.chart, inputData);
      }
    } else if (inputData === null) {
      this.chart.clear();
    } else {
      if (this.chart == null) {
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
    }
  }

  addData(chart, data) {
    // chart.data.labels.push(label);
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
      if (dataList[0].rows !== undefined) {
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
    this.inspection = [];
    this.dataSet = [];
    this.barChartData = {};

    var rows = dataList[0].rows;
    for (var count = 0; count < rows.length; count++) {
      var row = rows[count];
      for (var row_count = 0; row_count < row.length; row_count++) {
        var item = row[row_count];
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
            if (this.inspection.indexOf(item) === -1) {
              this.inspection.push(item);
            }
          }
          break;
          case 4:
          {
            this.data.push(item);
          }
          break;
          default:
          continue;
        }
      }
    }

    var dataRange = this.inspection.length;
    var map = new Map();
    for (var i = 0;i< this.inspection.length;i++) {
      var deviceData = [];
      var obj = {
        label : this.inspection[i],
        backgroundColor: this.colors[i],
        data: deviceData
      };
      map.set(this.inspection[i], obj);
    }

    this.data.forEach((item, data_count) => {
      var list = map.get(this.inspection[data_count%dataRange]);
      if (list !== undefined) {
        list.data.push(item);
        map.set(this.inspection[data_count%dataRange],list);
      }
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
  RmsInspectionStateBarChartPanelCtrl as PanelCtrl
};
