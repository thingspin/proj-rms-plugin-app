import _ from 'lodash';
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
  dataList : any;

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

  panelDefaults = {
    xlabel: "검사기",
    ylabel: "수량"
  };
 
  constructor($scope, $injector) {
    
    super($scope, $injector);

    _.defaults(this.panel, this.panelDefaults);
    
    this.chart = null;
    this.chartID = `chart-rms-product-state-${this.panel.id}`;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
  }

  onInitialized() {
    this.initalized = false;
  }

  onInitEditMode() {
    this.addEditorTab('Options', `public/plugins/proj-rms-plugin-app/panel/productstate-bar-chart/options.html`, 2);
  }

  createChart(inputData) {
    if (inputData) {
      const charOpts = {
        type: 'bar',
        data: inputData,
        options: {
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: this.panel.xlabel
              }
            }],            
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: this.panel.ylabel
              },
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
      if (this.chart) { this.chart.clear(); }
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
    this.dataList = dataList;
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

    var labelMapData = new Map();
    rows.forEach((row, count) => {
      var mapKeyValue = "";

      row.forEach((item, row_count) => {
        switch (row_count) {
          case 1:
          {
            var valueItem = "";
            switch (item) {
              case "00" :
                valueItem = "1";
              break;
              case "01" :
                valueItem = "2";
              break;
              case "02" :
                valueItem = "3";
              break;
              case "03" :
                valueItem = "4";
              break;
              default :
                valueItem = item;
              break;
            }
            console.log(valueItem);
            if (this.labels.indexOf(valueItem) === -1) {
              this.labels.push(valueItem);
            }
            mapKeyValue += valueItem;
            
          }
          break;
          case 2:
          {
            if (this.device.indexOf(item) === -1) {
              this.device.push(item);
            }
            mapKeyValue += "-" + item;
          }
          break;
          case 3:
          {
            this.data.push(item);
            labelMapData.set(mapKeyValue, this.data.length-1);
          }
          break;
          default:
          break;
        }
      });
    });
    console.log(labelMapData);
    console.log(this.data);
    // var dataRange = this.labels.length;
    var map = new Map();
    this.labels.forEach((label, i) => {
      var deviceData = [];
      var obj = {
        label : label,
        backgroundColor: this.backgroundColor[i%this.backgroundColor.length],
        borderColor: this.borderColor[i%this.backgroundColor.length],
        borderWidth: 1,
        data: deviceData
      };
      map.set(label, obj);
    });
    for (var totalcount = 0; totalcount < this.data.length; totalcount++) {
      console.log("input Data : " + this.data[totalcount]);
      var inputData = this.data[totalcount];
      for (var labelcount = 0; labelcount < this.labels.length; labelcount++) {
        var label = this.labels[labelcount];
        for (var devicecount = 0; devicecount < this.device.length; devicecount++) {
          var device = this.device[devicecount];
          var cmpValue = label + "-" + device;
          if (labelMapData.has(cmpValue)) {
            var index = labelMapData.get(cmpValue);
            if (totalcount == index) {
              console.log(cmpValue);
              var list = map.get(label);
              console.log(list);
              list.data.push(inputData);
              map.set(label, list);
              break;
            }
          }
        }
      }
    }

    /*
    this.data.forEach((item, data_count) => {
      var list = map.get(this.labels[data_count]);
      this.device.forEach((item, data_count) => {
        var strdevice = this.device[data_count];
        var value = list.label + "-" + strdevice;
        if(labelMapData.has(value)) {
          console.log(value);
          console.log(list);
          list.data.push(item);
          map.set(this.labels[data_count],list);
        }
      });
      // list.data.push(item);
      // map.set(this.labels[data_count],list);
    });
    console.log(map);
    */
    var dataset = Array.from(map.values());
    console.log(dataset);
    console.log(this.device);
    this.barChartData = {
      labels: this.device,
      datasets: dataset
    };
    console.log(this.barChartData);
    this.createChart(this.barChartData);
  }
}

export {
  RmsProductStateBarChartPanelCtrl as PanelCtrl
};
