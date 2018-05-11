import {MetricsPanelCtrl, PanelCtrl} from  'grafana/app/plugins/sdk';
import '../../chart.js/dist/Chart.js';
declare var Chart: any;

export class RmsAlarmRulePanelCtrl extends MetricsPanelCtrl {
  static templateUrl = './panel/thingspin-rms-alarm-rule/templet.html';
  $scope: any;
  $rootScope: any;
  dsSrv: any;
  context: any;
  chart: any;

  constructor($scope, $injector, $http, $location, uiSegmentSrv, annotationsSrv, private $window) {
    super($scope, $injector);
    
    this.$scope = $scope;
    this.events.on('render', this.onRender.bind(this));
    this.events.on('panel-size-changed', this.onSizeChanged.bind(this));
    this.events.on('panel-initialized', this.onRender.bind(this));
  }

  OnInitialized() {
    console.log("OnInitialized!");
  }
  
  onSizeChanged() {
    console.log("size changed!");

    this.OnDraw();
  }

  OnDraw() {
    console.log("OnDraw!");
    if(!this.context) {
      console.log("OnDraw! -- context is not initialized!");
      return;
    }

    if(!this.chart) {
      console.log("OnDraw! -- create chart.");
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
                        beginAtZero:false
                    }
                }]
          },
          tooltips: {
              enabled: true
          }          
        }
      });
    } else {
      //this.chart.canvas.parentNode.style.height = '128px';
      console.log("OnDraw! -- update chart.");
      this.chart.update();
    }
  }

  onRender() {

    console.log("onRender!");

    if(!this.context) {
      this.context = this.$window.document.getElementById("chart").getContext('2d');
    }

    this.OnDraw();
  }

  link(scope, elem) {
    // this.events.on('render', () => {
    //   const $panelContainer = elem.find('.panel-container');
    // });
  }   
}

export {
  RmsAlarmRulePanelCtrl as PanelCtrl
};

