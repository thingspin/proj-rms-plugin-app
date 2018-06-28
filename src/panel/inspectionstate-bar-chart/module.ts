import {MetricsPanelCtrl} from  'grafana/app/plugins/sdk';

import * as Chart from 'chart.js/dist/Chart.min';

class RmsInspectionStateBarChartPanelCtrl extends MetricsPanelCtrl {
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
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(this.context, {
        type: 'bar',
        data: inputData,
        options: {
          maintainAspectRatio: false,
          legend: {
            position: 'right'
          }
        }
      });
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
          break;
        }
      });
    });

    var dataRange = this.inspection.length;
    var map = new Map();
    this.inspection.forEach((label, i) => {
      map.set(label, {
        label : label,
        backgroundColor: this.colors[i],
        data: []
      });
    });

    this.data.forEach((item, data_count) => {
      var list = map.get(this.inspection[data_count % dataRange]);
      if (list) {
        list.data.push(item);
        map.set(this.inspection[data_count % dataRange],list);
      }
    });

    this.barChartData = {
      labels: this.device,
      datasets: Array.from(map.values())
    };
    this.createChart(this.barChartData);
  }
}

export {
  RmsInspectionStateBarChartPanelCtrl as PanelCtrl
};
