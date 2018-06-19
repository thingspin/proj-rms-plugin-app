import _ from 'lodash';
import $ from 'jquery';
import 'jquery-ui';
import 'jquery.tabulator/dist/css/tabulator.min.css';
import 'jquery.tabulator/dist/js/tabulator.min';
import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

import '../../services/remoteSolutionDS';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

const template = require("./partial/templet.html");
// const options = require("./partial/options.html");

const panelDefaults = {
  formatters : [],
  allDeciaml : 3,
  resizeValue : false
};

// const DEFAULT_SIZE = 3;

class RmsCPKTrendPanelCtrl extends MetricsPanelCtrl {
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
  indexColumns = [];
  aligns = [];
  dataJson : any;
  defTabulatorOpts: object;
  mode : any;
  tableName : string;

  constructor($scope, $injector, $http, $location, uiSegmentSrv, annotationsSrv) {
    super($scope, $injector);

    _.defaults(this.panel, panelDefaults);
    // _.defaults(this.panel);

    this.aligns = ['LEFT','CENTER','RIGHT'];

    this.divID = 'table-rms-' + this.panel.id;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    // this.events.on('render', this.onRender.bind(this)); //dynamic ui process
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));

  }

  onInitialized() {
    this.initalized = false;
  }

  onInitEditMode() {
    this.addEditorTab('Options', `public/plugins/proj-rms-plugin-app/panel/cpktrend-table/partial/options.html`, 2);
  }

  link(scope, elem, attrs, ctrl) {
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

  delFormatter(index) {
    this.panel.formatters.splice(index,1);
  }
  
  addFormatter() {
    console.log(this.panel.formatters);
    this.panel.formatters.push({name: '', localstring: false, decimal: 2, fontsize: 0, width: 100, align:this.aligns[0]});
  }

  onDataReceived(dataList) {
    //console.log(this);
    this.dataRaw = dataList;
    // console.log(dataList);
    Promise.resolve(this.transformer(this.dataRaw));
    this.createTable(this.dataJson);
  }

  createTable(dataList) {
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
    this.defTabulatorOpts = {
      pagination: "local",
      paginationSize: 20,
      selectable: 1,
      fitColumns: true,
      resizableColumns: this.panel.resizeValue,    
      layout: "fitColumns",
      columns: this.columns,
    };
    let opts = Object.assign({ // deep copy
      rowClick: (e, row) => { //trigger an alert message when the row is clicked
          // this.selectRow(row.getData());
          // this.container.tabulator('deselectRow');
      },
    }, this.defTabulatorOpts);
    this.container.tabulator(opts);
    if (dataList != null) {
      this.container.tabulator("setData",dataList);
    } else {
      this.dataTable.setData("setData",tabledata);
      this.container.tabulator("setData", tabledata);
    }
    this.container.tabulator("hideColumn","time_sec");
    this.initalized = true;
  }

  transDataInput(dataList) {
    console.log(dataList);
  }

  transformer(dataList) {
    this.columns = [];
    var columnMakeMap = new Map();
    var valueMakeMap = new Map();
    var tableMakeMap = new Map();
    var rowMakeArray = new Array;
    var fieldArray = new Array;
    var tableArray = new Array;
    var data = dataList[0];
    var rows = data.rows;

    for (var count=0; count < rows.length; count++) {
      var row = rows[count];
      var dateTitle = this.transformerEpochToDate(row[0]);
      columnMakeMap.set(row[0], dateTitle);
      
      if (rowMakeArray.indexOf(row[1]) === -1)
        rowMakeArray.push(row[1]);
      
      valueMakeMap.set(row[0] + "-" + row[1], row[2]);
    }

    // console.log(columnMakeMap);
    // console.log(rowMakeArray);
    // console.log(valueMakeMap);

    var obj = {
      title: '검사항목',
      field: 'inm',
      align: "left",
      // editor: this.autocompEditor,
    }
    fieldArray.push(obj.field);
    if (this.panel.formatters.length > 0)
      this.columnOption(obj);
    this.columns.push(obj);

    var keyList = Array.from(columnMakeMap.keys());
    for (var count=0;count<keyList.length;count++) {
      var key = keyList[count];
      console.log(key)
      obj = {
        title: columnMakeMap.get(key),
        field: "" + key + "",
        align: "right",
        // editor: this.autocompEditor,
      }
      console.log(obj);
      if (this.panel.formatters.length > 0)
        this.columnIndexOption(obj, count+1);
      this.columns.push(obj);
      fieldArray.push(key);
    }

    keyList = Array.from(valueMakeMap.keys());
    var tableMakeMap = new Map();
    var columnSize = this.columns.length-1;
    // console.log(columnSize);
    for  (var count=0;count<keyList.length;count++) {
      var key = keyList[count];
      // console.log(key);
      var indexStr =key.split('-');

      if (tableMakeMap.has(fieldArray[0]) == false) {
        tableMakeMap.set(fieldArray[0], indexStr[1]);
          // if (this.panel.formatters.length > 0)
          //   this.columnOption(obj);
          // else
          // tableMakeMap.set(fieldArray[0], Number(indexStr[1]).toFixed(DEFAULT_SIZE));
      }
      // console.log((count%columnSize)+1);
      // console.log(fieldArray[(count%columnSize)+1]);
      // tableMakeMap.set("" + fieldArray[(count%columnSize)+1] + "", valueMakeMap.get(key));
        tableMakeMap.set("" + fieldArray[(count%columnSize)+1] + "", Number(valueMakeMap.get(key)).toFixed(this.panel.allDeciaml));
      
      if ((count%columnSize)+1 == columnSize && count !== 0) {
        var object = Object();
        var totalValue = 0;
        var size = 0;
        tableMakeMap.forEach((v,k)=> {
          object[k] = v;
          if (k !== 'inm') {
            if (Number(v) !== 0)
              size = size + 1;
            totalValue = Number(v) + Number(totalValue);
          }
        });
        // object.average = totalValue/(size);
        var avg = totalValue/(size);
        object.average = avg.toFixed(this.panel.allDeciaml);
        tableArray.push(object);
        tableMakeMap = new Map();
      }
    }
    var averageTitle = {
      title: 'AVG',
      field: 'average',
      align: "right"
    }
    if (this.panel.formatters.length > 0)
      this.columnOption(obj);
    this.columns.push(averageTitle);
    // console.log(tableMakeMap);
    // console.log(tableArray);
    // console.log(this.columns);
    this.dataJson = tableArray;
  };

  transformerEpochToDate(incomingUTCepoch) {
    var utcDate = new Date(incomingUTCepoch);
    return (utcDate.getMonth() + 1) + "월" + utcDate.getDate() + "일";
  }

  columnOption(obj) {
    console.log(obj);
    var count = this.panel.formatters.map(function(e) {return e.name;}).indexOf(obj.title);
    if (count !== -1) {
      var formatter = this.panel.formatters[count];
      obj.width = formatter.width;
      obj.align = formatter.align;
      obj.formatter = function(cell, formatterParam) {
        var value = cell.getValue();
        if (isNaN(value) == false) {
          if (formatter.localstring == true) {
            return Number((Number(value)).toFixed(formatter.decimal)).toLocaleString('en');
          } else {
            return (Number(value)).toFixed(formatter.decimal);
          }          
        } else
          return value;
      }
    }
  }

  columnIndexOption(obj, value) {
    console.log(value);
    var count = this.panel.formatters.map(function(e) {return e.name;}).indexOf(String(value));
    if (count !== -1) {
      var formatter = this.panel.formatters[count];
      obj.width = formatter.width;
      obj.align = formatter.align;
      obj.formatter = function(cell, formatterParam) {
        var value = cell.getValue();
        if (isNaN(value) == false) {
          if (formatter.localstring == true) {
            return Number((Number(value)).toFixed(formatter.decimal)).toLocaleString('en');
          } else {
            return (Number(value)).toFixed(formatter.decimal);
          }          
        } else
          return value;
      }
    }
  }
}

export {
  RmsCPKTrendPanelCtrl as PanelCtrl
};
