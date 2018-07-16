import _ from 'lodash';
import {MetricsPanelCtrl} from  'grafana/app/plugins/sdk';
import * as Chart from 'chart.js/dist/Chart.min';

const PLAN = 0;
const TRUE = 1;
const FALSE = 2;
const PLAN_LABEL = "생산계획";
const TRUE_LABEL = "양품수";
const FALSE_LABEL = "불량수";

class RmsProductPlanBarChartPanelCtrl extends MetricsPanelCtrl {
  static template = require("./templet.html");

  chartID: string;
  initalized: boolean;
  inEditMode: boolean;

  context: any;
  canvas: any;
  chart: any = null;
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

  panelDefaults = {
    xlabel: "제품",
    ylabel: "수량"
  };

  constructor($scope, $injector) {
    super($scope, $injector);
    _.defaults(this.panel, this.panelDefaults);

    this.chartID = `chart-rms-product-state-${this.panel.id}`;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
  }

  onInitEditMode() {
    this.addEditorTab('Options', `public/plugins/proj-rms-plugin-app/panel/productplan-bar-chart/options.html`, 2);
  }

  createChart(inputData) {
    if (inputData !== undefined) {
      const chartOpts = {
        type: 'bar',
        data: inputData,
        options: {
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
          },
          responsive: true,
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: this.panel.xlabel
              },  
              stacked: true,
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: this.panel.ylabel
              },  
              stacked: true,
              ticks: {
                callback: function(value, index, values) {
                    return value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
              }
            }]
          },
          maintainAspectRatio: false
        }
      };

      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(this.context, chartOpts);
    } else if (inputData === null) {
      this.chart.clear();
    } else {
      if (!this.chart) {
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
                        beginAtZero: false,
                        callback: function(value, index, values) {
                          return value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
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

  render() {
    // console.log("render");
    if (!this.context) {
      return;
    }

    if (this.chart) {
      this.chart.data = this.barChartData;

      this.chart.options.scales.xAxes[0].scaleLabel.labelString = this.panel.xlabel;
      this.chart.options.scales.yAxes[0].scaleLabel.labelString = this.panel.ylabel;
      this.chart.update();
    } else {
      this.createChart(this.barChartData);
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
    // console.log(dataList);
    this.arrayTrue = [];
    this.arrayFalse = [];
    this.arrayTrueEmpty = [];
    this.arrayFalseEmpty = [];
    this.mapTrue.clear();
    this.mapFalse.clear();
    this.mapPlan.clear();
    this.models = [];

    this.barChartData = {};

    // Mixed Data Input Process
    // - dataCount >> 0:plan 1:true product 2:false product
    dataList.forEach((data, dataCount) => {
      const dataRows = data.rows;
      console.log(dataRows);
      dataRows.forEach((dataRow, dataRowCount) => {
        switch (data.columns[2].text) {
          case FALSE_LABEL: this.mapDataInsert(FALSE, dataRow); break;
          case TRUE_LABEL: this.mapDataInsert(TRUE, dataRow); break;
          default: this.mapDataInsert(PLAN, dataRow); break;
        }
      });
    });
    this.dataProcess();

    var labels = Array.from( this.mapPlan.keys() );
    var chartMap =  new Map();

    chartMap.set(PLAN_LABEL, {
      label : PLAN_LABEL,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      stack : 'Stack 0',
      data: Array.from(this.mapPlan.values())
    });

    chartMap.set(TRUE_LABEL, {
      label : TRUE_LABEL,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      stack : 'Stack 1',
      borderWidth: 1,
      data: this.arrayTrue
    });

    chartMap.set(FALSE_LABEL, {
      label : FALSE_LABEL,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255,99,132,1)',
      stack : 'Stack 1',
      borderWidth: 1,
      data: this.arrayFalse
    });

    var dataset = Array.from(chartMap.values());
    // console.log(dataset);

    this.barChartData = {
      labels: labels,
      datasets: dataset
    };
    // console.log(this.barChartData);
    this.createChart(this.barChartData);
  }

  mapDataInsert(value, dataRow) {
    var tempModel = "";
    dataRow.forEach((item, rowCount) => {
      if (value === PLAN) {
        switch (rowCount) {
          case 2:
            if (this.models.indexOf(item) === -1) {
              this.models.push(item);
              tempModel = item;
            }
          break;
          case 3:
            this.mapPlan.set(tempModel,item);
          break;
        }
      } else {
        switch (rowCount) {
          case 1:
            tempModel = item;
            if (!this.mapPlan.has(tempModel)) {
              this.mapPlan.set(tempModel,0);
            }
          break;
          case 2:
            const valStr = (value === TRUE) ? "mapTrue" : "mapFalse";
            const val = this[valStr].get(tempModel);
            if (val) {
              this[valStr].set(tempModel, val + item);
            } else {
              this[valStr].set(tempModel, item);
            }
          break;
        }
      }
    });
  }

  dataProcess() {
    var keyList = Array.from(this.mapPlan.keys());
    var cpTrueMap = new Map(this.mapTrue);
    var cpFalseMap = new Map(this.mapFalse);

    // keyList.forEach((key, keyCount) => {
    //   ["True","False"].forEach((str) => {
    //     var val = this[`map${str}`].get(key);
    //     if (val) {
    //       this[`array${str}`].push(val);
    //       switch (str) {
    //         case "True": cpTrueMap.delete(key); break;
    //         case "False": cpFalseMap.delete(key); break;
    //       }
    //     }
    //   });
    // });
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
