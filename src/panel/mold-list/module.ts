import _ from 'lodash';
import $ from 'jquery';
import 'jquery-ui';
import 'jquery.tabulator/dist/css/tabulator.min.css';
import 'jquery.tabulator/dist/js/tabulator.min';
import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

const template = require("./partial/templet.html");
//const options = require("./partial/options.html");

class RmsMoldListPanelCtrl extends MetricsPanelCtrl {
  static template = template;

  divID: string;
  initalized: boolean;
  inEditMode: boolean;

  container: any;
  dataTable: any;
  data: any[];
  mouse: any;

  dataRaw = [];
  columns = [];
  dataJson : any;

  constructor($scope, $injector, $http, $location, uiSegmentSrv, annotationsSrv) {
    super($scope, $injector);

    // _.defaults(this.panel, this.panelDefaults);
    _.defaults(this.panel);

    this.divID = 'table-rms-' + this.panel.id;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    // this.events.on('render', this.onRender.bind(this)); //dynamic ui process
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));

  }

  onInitialized() {
    console.log("onInitialized");
    this.initalized = false;
  }

  onInitEditMode() {
  }

  link(scope, elem, attrs, ctrl) {
    console.log("link");
    let t = elem.find('.thingspin-table')[0];
    t.id = this.divID;

    this.container = $(t);
  }

  /* dynamic ui process
  rander() {
  }
  */

  onDataError(err) {
    this.dataRaw = [];
    this.render();
  }

  onDataReceived(dataList) {
    console.log("onDataReceived");
    this.dataRaw = dataList;
    console.log(this.dataRaw);
    Promise.resolve(this.transformer(this.dataRaw));
    this.createTable(this.dataJson);
  }

  createTable(dataList) {
    console.log("create table ...");

    var tabledata = [
      { id: 1, mold_name: "A모델", change_date: "2018/05/15", change_period: "10000", use_count: "10000",  memo: ''},
      { id: 2, mold_name: "B모델", change_date: "2018/05/15", change_period: "10000", use_count: "10000",  memo: ''},
      { id: 3, mold_name: "C모델", change_date: "2018/05/15", change_period: "10000", use_count: "10000",  memo: ''},
      { id: 4, mold_name: "D모델", change_date: "2018/05/15", change_period: "10000", use_count: "10000",  memo: ''},
      { id: 5, mold_name: "E모델", change_date: "2018/05/15", change_period: "10000", use_count: "10000",  memo: ''}
    ];

    if (this.initalized == true) {
      this.container.tabulator("destroy");
    }

    this.container.tabulator({
      height: 340,
      layout: "fitColumns",
      columns: this.columns,
      rowClick: function(e, row) {
        console.log(row.getData());
        console.log(row);
          alert("Row " + row.getData() + " Clicked!!!!");
      },
    });

    if (dataList != null) {
      // this.container.tabulator("setData", dataList);
      console.log(this.columns);
      console.log(dataList);
      this.container.tabulator("setData",dataList);
    } else {
      this.dataTable.setData("setData",tabledata);
      this.container.tabulator("setData", tabledata);
    }
    this.initalized = true;
  }

  transformer(dataList) {
    this.columns = [];
    var data = dataList[0];
    var rows = data.rows;
    var getColumns = data.columns;
    for (var count=0; count < getColumns.length; count++) {
      var column = getColumns[count].text;
      var obj = {
        title: column,
        field: column,
        align: "center",
        // editor: this.autocompEditor,
      }
      this.columns.push(obj);
    }
    
    var jArray = new Array;
    var mapData = new Map();
    for (var count=0; count < rows.length; count++) {
      var row = rows[count];
      for (var row_count=0; row_count < row.length; row_count++) {
        var item = row[row_count];
        mapData.set(getColumns[row_count].text,item);
      }
      var object = Object();
      mapData.forEach((v,k)=> {object[k] = v});
      jArray.push(object);
    }
    this.dataJson = jArray;
  };
  

  onSave() {
      // TODO ! - call database inasert/update query.

      // let info = this.panel.materialItem;
      // info.id = this.data.length + 1;
      // info.company = info.company.name;
      // info.regdate = new Date('YYYY/MM/DD').toString();

      // this.data.push(info);
      // this.container.tabulator("setData", this.data);
  }

}

export {
  RmsMoldListPanelCtrl as PanelCtrl
};
