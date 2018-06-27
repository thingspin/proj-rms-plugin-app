import {MetricsPanelCtrl} from  'grafana/app/plugins/sdk';

import * as Chart from 'chart.js/dist/Chart.min';

const PLAN = 0;
const PLAN_LABEL = "생산계획";

class RmsProductPlanBarChartPanelCtrl extends MetricsPanelCtrl {
  static template = require("./templet.html");

  chartID: string;
  initalized: boolean;
  inEditMode: boolean;

  context: any;
  canvas: any;
  chart: any = null;

  mapPlan = new Map();
  models = [];

  barChartData: any;

  constructor($scope, $injector) {
    super($scope, $injector);
    this.chartID = `chart-rms-product-state-${this.panel.id}`;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
  }

  onInitEditMode() {
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
              stacked: true,
            }],
            yAxes: [{
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
    this.mapPlan.clear();
    this.models = [];

    this.barChartData = {};

    dataList.forEach((data, dataCount) => {
      const dataRows = data.rows;
      dataRows.forEach((dataRow, dataRowCount) => {
          this.mapDataInsert(PLAN, dataRow);
      });
    });

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

    var dataset = Array.from(chartMap.values());

    this.barChartData = {
      labels: labels,
      datasets: dataset
    };
    this.createChart(this.barChartData);
  }

  mapDataInsert(value, dataRow) {
    var tempModel = "";
    dataRow.forEach((item, rowCount) => {
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
      });
  }
}

export {
  RmsProductPlanBarChartPanelCtrl as PanelCtrl
};
