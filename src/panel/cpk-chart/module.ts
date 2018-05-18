import _ from 'lodash';

import {MetricsPanelCtrl} from  'grafana/app/plugins/sdk';
//import * as Chart from 'chart.js/dist/Chart.min';
import 'chart.js/dist/Chart.bundle.min';
import 'chartjs-plugin-annotation/chartjs-plugin-annotation.min';

import './utils';


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
  //series: any[];
  result: any[];
  limit: any;

  constructor($scope, $injector, private $window) {
    super($scope, $injector);

    this.Chart = this.$window.Chart;

    this.chartID = 'chart-rms-cpk-' + this.panel.id;
    this.result = [];
    //this.series = [];

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('render', this.onRender.bind(this));
    this.events.on('panel-size-changed', this.onSizeChanged.bind(this));
    this.events.on('panel-initialized', this.onRender.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    /*
    for (var i = 1; i <= 10000; i++) {
      this.series.push(this.gaussianRandom(1,6));
    }

    this.series = _.countBy(this.series)

    for (var key in this.series) {
      this.result.push({
        "x":key,
        "y":this.series[key]
      })
    }
*/
    
  }
  
  OnInitialized() {
    this.OnDraw();
  }

  onSizeChanged() {
    this.OnDraw();
  }

  onInitEditMode() {
  }

  onDataReceived(dataList) {	
    var datapoints = [];
    for (let data of dataList) {
      for (let point of data.datapoints) {
        if ( point[0] === null || point[0] === 0) continue;
        datapoints.push(point[0]);
      }
      break;
    }
    datapoints.sort();
    var result = _.countBy(datapoints);
    //result = result.sort();
    var xmin =+Object.keys(result)[0];
    var xmax =+Object.keys(result)[0];
    var ymin =result[Object.keys(result)[0]];
    var ymax =result[Object.keys(result)[0]];

    for (var key in result) {
      if ( xmin > +key ) {
        xmin = +key;
      }
      if ( xmax < +key) {
        xmax = +key;
      }
      if ( ymin > result[key] ) {
        ymin = result[key];
      }
      if ( ymax < result[key] ) {
        ymax = result[key];
      }
      this.result.push({
        "x":+key,
        "y":result[key]
      })
    }

    this.limit = {
      "xmin": xmin,
      "xmax": xmax,
      "ymin": ymin,
      "ymax": ymax
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
    console.log(this.limit);
    console.log(this.result)
    //console.log(datapoints);
    this.OnDraw();
  }

  createChart() {

    this.Chart.plugins.register({
      afterDatasetsDraw: function(chart) {
        var ctx = chart.ctx;
        //console.log(chart.width);
        //console.log(chart.height)
        ctx.fillText("CPK : 0.887", chart.width * 0.8 ,chart.height * 0.15);
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
            });
          }
        });
      }
    });

    this.chart = new this.Chart(this.context, {
      type: 'line',
      data: this.data,
      options: {
        legend: {
          display: false
        },
        tooltips:{
          enabled: false
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
                
                value: this.limit["xmin"],

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
              
              value: this.limit["xmax"],

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
        scales:{
          xAxes: [{
            id:'x-axis-0',
            type: "linear",
            display: true,
            gridLines:{
              display:false
            },
            //autoSkip: true,
           // position: "bottom",
            
            ticks:{
              min: this.limit["xmin"],
              max: this.limit["xmax"]
              //stepSize: 
            }
            //type: "linear",
            //position: "bottom"
          }]
          ,
          yAxes:[{
            id:'y-axis-0',
            type: "linear",
            display: true,
            gridLines:{
              display:false
            },
            //autoSkip: true,
            ticks:{
              min: this.limit["ymin"],
              max: this.limit["ymax"]
              //stepSize: 1
            }
            //position: "left"
          }]    
        },
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
    if (!this.context) {
      return;
    }
    
    this.createChart();  
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
  RmsCPKAnalyticsPanelCtrl as PanelCtrl
};

