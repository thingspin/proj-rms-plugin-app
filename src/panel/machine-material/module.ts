import _ from 'lodash';
import $ from 'jquery';
import 'jquery-ui';
import 'jquery.tabulator/dist/js/tabulator.min';
import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/panel/tabulator-table/css/tabulator.min.css',
  light: 'plugins/proj-rms-plugin-app/panel/tabulator-table/css/tabulator.min.css'
});

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

const template = require("./partial/templet.html");
// const options = require("./partial/options.html");

class RmsMachineMaterialPanelCtrl extends MetricsPanelCtrl {
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
      { id: 1, name: "Oli Bob", age: "12", col: "red", dob: ""},
      { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982"},
      { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982"},
      { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980"},
      { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999"},
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

  /* dynamic table editor test code added
  autocompEditor = function(cell, onRendered, success, cancel){
    //create and style input
    var input = $("<input type='text'/>");

    //setup jquery autocomplete
    // input.autocomplete({
    //     source: ["United Kingdom", "Germany", "France", "USA", "Canada", "Russia", "India", "China", "South Korea", "Japan"]
    // });

    input.css({
        "padding":"4px",
        "width":"100%",
        "box-sizing":"border-box",
    })
    .val(cell.getValue());

    onRendered(function(){
        input.focus();
        input.css("height","100%");
    });

    //submit new value on blur
    input.on("change blur", function(e){
        if(input.val() != cell.getValue()){
          alert("Update data ? ");
            success(input.val());
        }else{
            cancel();
        }
    });
    
    //submit new value on enter
    input.on("keydown", function(e){
        if(e.keyCode == 13){
          alert("Update data ? ");
            success(input.val());
        }

        if(e.keyCode == 27){
            cancel();
        }
    });

    return input;
  };
  */
}

export {
  RmsMachineMaterialPanelCtrl as PanelCtrl
};
