import {MetricsPanelCtrl} from  'grafana/app/plugins/sdk';

import * as Chart from 'chart.js/dist/Chart.min';
// import * as cbundle from 'chart.js/dist/Chart.bundle.min';

const template = require("./templet.html");

const PLAN = 0;
const TRUE = 1;
const FALSE = 2;
const PLAN_LABEL = "생산계획";
const TRUE_LABEL = "실적수량";
const FALSE_LABEL = "불량수";

class RmsProductPlanBarChartPanelCtrl extends MetricsPanelCtrl {
  static template = template;  

  chartID: string;
  initalized: boolean;
  inEditMode: boolean;

  context: any;
  canvas: any;
  chart: any;
  mouse: any;
  
  mapPlan = new Map();
  mapTrue = new Map();
  mapFalse = new Map();
  arrayTrueEmpty = new Array();
  arrayFalseEmpty = new Array();
  arrayTrue = new Array();
  arrayFalse = new Array();

  models = [];

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
      if (this.chart == null) {
        this.chart = new Chart(this.context, {
          type: 'bar',
          data: inputData,
          options: {
            tooltips: {
              mode: 'index',
              intersect: false
            },
            responsive: true,
            scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }
        });  
      } else {
        this.chart.destroy();
        this.chart = new Chart(this.context, {
          type: 'bar',
          data: inputData,
          options: {
            tooltips: {
              mode: 'index',
              intersect: false
            },
            responsive: true,
            scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }          
        });
      }
    } else if(inputData === null) {
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
    console.log(this);
    console.log(dataList);
    if (dataList.length === 0) 
      this.createChart(null);
    else {
      if (dataList[0].rows !== undefined)
      Promise.resolve(this.transformerData(dataList));
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
    this.arrayTrue = [];
    this.arrayFalse = [];
    this.arrayTrueEmpty = [];
    this.arrayFalseEmpty = [];
    this.mapTrue.clear();
    this.mapFalse.clear();
    this.mapPlan.clear();

    this.barChartData = {};

    // Mixed Data Input Process
    // - dataCount >> 0:plan 1:true product 2:false product
    for (var dataCount=0;dataCount<dataList.length;dataCount++) {
      var dataRows = dataList[dataCount].rows;
      for (var dataRowCount=0;dataRowCount<dataRows.length;dataRowCount++) {
        var dataRow = dataRows[dataRowCount];
        if (dataList[dataCount].columns[2].text === '불량수')
          this.mapDataInsert(FALSE, dataRow);
        else if (dataList[dataCount].columns[2].text === '실적수량')
          this.mapDataInsert(TRUE, dataRow);
        else
          this.mapDataInsert(PLAN, dataRow);
      }
    }
    this.dataProcess();

    var labels = Array.from( this.mapPlan.keys() );
    var chartMap =  new Map();

    var planObj = {
      label : PLAN_LABEL,
      backgroundColor: this.colors[PLAN],
      stack : 'Stack 0',
      data: Array.from(this.mapPlan.values())
    };
    chartMap.set(PLAN_LABEL, planObj);

    var trueObj = {
      label : TRUE_LABEL,
      backgroundColor: this.colors[TRUE],
      stack : 'Stack 1',
      data: this.arrayTrue
    };
    chartMap.set(TRUE_LABEL, trueObj);

    var falseObj = {
      label : FALSE_LABEL,
      backgroundColor: this.colors[FALSE],
      stack : 'Stack 1',
      data: this.arrayFalse
    };
    chartMap.set(FALSE_LABEL, falseObj);

    var dataset = Array.from(chartMap.values());
    console.log(dataset);
    
    this.barChartData = {
      labels: labels,
      datasets: dataset
    }
    console.log(this.barChartData);
    this.createChart(this.barChartData);
  }

  mapDataInsert(value, dataRow) {
    var tempModel = "";
    for (var rowCount=0;rowCount<dataRow.length;rowCount++) {
      var item = dataRow[rowCount];
      if (value === PLAN) {
        if (rowCount == 2) {
          if (this.models.indexOf(item) === -1) {
            this.models.push(item);
            tempModel = item;
          }
        } else if (rowCount == 3) {
          this.mapPlan.set(tempModel,item);
        }
      } else {
        if (rowCount == 1) {
          tempModel = item;
        } else if (rowCount == 2) {
          if (value == TRUE) {
            var trueValue = this.mapTrue.get(tempModel);
            if (trueValue !== undefined)
              this.mapTrue.set(tempModel, trueValue + item);
            else
              this.mapTrue.set(tempModel, item);
          } else {
            var falseValue = this.mapFalse.get(tempModel);
            if (falseValue !== undefined)
              this.mapFalse.set(tempModel, falseValue + item);
            else
              this.mapFalse.set(tempModel, item);            
          }
        }
      }
    }
  }

  dataProcess() {
    var keyList = Array.from(this.mapPlan.keys());
    var cpTrueMap = new Map(this.mapTrue);
    var cpFalseMap = new Map(this.mapFalse);

    for (var keyCount=0;keyCount<keyList.length;keyCount++) {
      var key = keyList[keyCount];
      var trueValue = this.mapTrue.get(key);
      if (trueValue !== undefined) {
        this.arrayTrue.push(trueValue);
        cpTrueMap.delete(key);
      }
      var falseValue = this.mapFalse.get(key);
      if (falseValue !== undefined) {
        this.arrayFalse.push(falseValue);
        cpFalseMap.delete(key);
      }
    }

    this.arrayTrueEmpty = Array.from(cpTrueMap.values());
    this.arrayFalseEmpty = Array.from(cpFalseMap.values());
  }
}

export {
  RmsProductPlanBarChartPanelCtrl as PanelCtrl
};