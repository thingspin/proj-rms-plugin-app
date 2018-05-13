import $ from 'jquery';
import 'jquery-ui';
import 'jquery.tabulator/dist/js/tabulator.min';
import {PanelCtrl, MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/panel/tabulator-table/css/tabulator.min.css',
  light: 'plugins/proj-rms-plugin-app/panel/tabulator-table/css/tabulator.min.css'
});

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

const template = require("./templet.html");

class RmsAlarmRulePanelCtrl extends MetricsPanelCtrl {
  static template = template;

  divID: string;
  initalized: boolean;
  inEditMode: boolean;

  container: any;
  dataTable: any;
  mouse: any;

  constructor($scope, $injector, $http, $location, uiSegmentSrv, annotationsSrv) {
    super($scope, $injector);

    this.divID = 'table-rms-' + this.panel.id;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('render', this.onRender.bind(this));
    this.events.on('panel-initialized', this.onRender.bind(this));
  }

  OnInitialized() {
    return Promise.apply(this.fillTable());
  }

  onInitEditMode() {
  }

  fillTable() {
    var tabledata = [
      { id: 1, name: "Oli Bob", age: "12", col: "red", dob: ""},
      { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982"},
      { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982"},
      { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980"},
      { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999"},
    ];

    this.container.tabulator("setData", tabledata);
    this.initalized = true;
  }

  OnDraw() {
    this.fillTable();
  }

  onRender() {
    if (!this.container) {
      return Promise.reject({});
    }

    if (!this.initalized) {
      return Promise.resolve(this.fillTable());
    }

    if (this.container && this.initalized) {
      return Promise.resolve(this.OnDraw());
    }

    return Promise.resolve({});
  }

  link(scope, elem, attrs, ctrl) {
    let t = elem.find('.thingspin-table')[0];
    t.id = this.divID;

    this.container = $(t);
    this.dataTable = this.container.tabulator({
      height: 205,
      layout: "fitColumns",
      columns: [
          {title: "Name", field: "name", width: 150},
          {title: "Age", field: "age", align: "left", formatter: "progress"},
          {title: "Favourite Color", field: "col"},
          {title: "Date Of Birth", field: "dob", sorter: "date", align: "center"},
      ],
      rowClick: function(e, row) { //trigger an alert message when the row is clicked
          alert("Row " + row.getData().id + " Clicked!!!!");
      },
  });
  }
}

export {
  RmsAlarmRulePanelCtrl as PanelCtrl
};
