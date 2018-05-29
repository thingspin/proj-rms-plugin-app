import {MetricsPanelCtrl} from  'grafana/app/plugins/sdk';

import * as Chart from 'chart.js/dist/Chart.min';
// import * as cbundle from 'chart.js/dist/Chart.bundle.min';

const template = require("./templet.html");

class RmsProductStateBarChartPanelCtrl extends MetricsPanelCtrl {
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
  data = [];
  dataSet = [];
  dataMap = new Map();
  barChartData: any;
  COLOR = ['#4dc9f6','#f67019','#f53794','#537bc4','#acc236','#166a8f','#00a950','#58595b','#8549ba'];

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
      if (this.chart == null) {
        this.chart = new Chart(this.context, {
          type: 'bar',
          data: inputData
        });  
      } else {
        this.chart.destroy();
        this.chart = new Chart(this.context, {
          type: 'bar',
          data: inputData
        });        
        // this.removeData(this.chart);
        // this.addData(this.chart, inputData);
      }
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
    console.log(this);
    console.log(dataList);
    Promise.resolve(this.transformerData(dataList));
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
    for (var count=0; count < rows.length; count++) {
      var row = rows[count];
      // var map = new Map();
      // var strTemp = "";
      for (var row_count=0; row_count < row.length; row_count++) {
        var item = row[row_count];
        switch (row_count) {
          case 1:
          {
            if (this.labels.indexOf(item) === -1)
              this.labels.push(item);
          }
          break;
          case 2:
          {
            if (this.device.indexOf(item) === -1)
              this.device.push(item);
          }
          break;
          case 3:
          {
            this.data.push(item);
          }
          break;
          default:
          continue;
        }
      }
    }

    var dataRange = this.device.length;
    var map = new Map();
    for (var i=0;i< this.device.length;i++) {
      var deviceData = [];
      var obj = {
        label : this.device[i],
        backgroundColor: this.COLOR[i],
        data: deviceData
      };
      map.set(this.device[i], obj);
    }

    for (var data_count = 0;data_count < this.data.length; data_count++) {
      var item = this.data[data_count];
      var list = map.get(this.device[data_count%dataRange]);
      list.data.push(item);
      map.set(this.device[data_count%dataRange],list);
    }
    
    var dataset = Array.from(map.values());
    console.log(dataset);
    
    this.barChartData = {
      labels: this.labels,
      datasets: dataset
    }
    this.createChart(this.barChartData);
  };
}

export {
  RmsProductStateBarChartPanelCtrl as PanelCtrl
};
