import _ from 'lodash';
import $ from 'jquery';
import moment from 'moment';
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
  formatters : []
};

const PLAN_MODEL = "모델"
const PLAN_DATE = "날짜"

class RmsPlantPlanPanelCtrl extends MetricsPanelCtrl {
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
    this.addEditorTab('Options', `public/plugins/proj-rms-plugin-app/panel/plantplan-table/partial/options.html`, 2);
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

  onDataReceived(dataList) {
    this.dataRaw = dataList;
    Promise.resolve(this.transformer(this.dataRaw));
    this.createTable(this.dataJson);
  }

  delFormatter(index) {
    this.panel.formatters.splice(index,1);
  }
  
  addFormatter() {
    // console.log(this.panel.formatters);
    this.panel.formatters.push({name: '', localstring: false, decimal: 2, fontsize: 0, width: 100, align:this.aligns[0]});
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
      layout: "fitColumns",
      columns: this.columns,
      initialSort:[
        {column:"실적수량", dir:"desc"},
      ]
    };
    let opts = Object.assign({ // deep copy
      rowClick: (e, row) => { //trigger an alert message when the row is clicked
          this.selectRow(row.getData());
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
    $(window).trigger('resize');
  }

  selectRow(obj) {
    // this.selectObj = obj;
    // this.comsumable.id = obj['장비 ID'];
    // this.comsumable.name = obj['장비 설명'];
    // this.comsumable.memo = obj['메모'];
    // this.comsumable.name = obj['품목'];
    // this.comsumable.standard = obj['규격'];
    // this.comsumable.cycle_count = obj['안전수량'];
    // this.comsumable.count = obj['재고수량'];
    // this.comsumable.count_time_count = obj['교체주기'];
    // this.comsumable.count_time = obj['교체주기 시간'];
    // this.comsumable.memo = obj['특이사항'];
    // var cmpStr = obj['업체명'] + " : " + obj['담당자'];
    // var result = this.business.map(x => x.name).indexOf(cmpStr);
    // this.businessSelect = this.business[result];
  }

  transDataInput(dataList) {
    // console.log(dataList);
  }

  columnOption(obj) {
    // console.log(obj);
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
    } else {
      if (obj.title === PLAN_DATE) {
          obj.align = this.aligns[1];
          obj.formatter = function(cell, formatterParam) {
            return moment(cell.getValue()).format("YYYY/MM/DD");
          }
      } else if (obj.title === PLAN_MODEL) {
        obj.align = this.aligns[0];
      } else {
        obj.align = this.aligns[2];
        obj.formatter = function(cell, formatterParam) {
          console.log(cell.getValue());
          if (cell.getValue() === undefined)
            return 0;
          else
            return Number(cell.getValue()).toLocaleString('en');
        }
      }
    }
  }

  transformer(dataList) {
    this.columns = [];
    var jArray = new Array;
    var tableMap = new Map();
    dataList.forEach(element => {
      this.transAddedData(element, tableMap);
    });

    tableMap.forEach(function (value, key, mapObj) {
      var object = Object();
      var tempTotal = 0;
      var tempProduct = 0;
      // var tempError = 0;
      value.forEach((v,k)=> {
        object[k] = v;
        if (k === '생산계획') {
          tempTotal = v;
        } else if (k === '실적수량') {
          tempProduct = v;
        }
      });
      object.achievement = Math.round((tempProduct/tempTotal)*100);
      object.achievement_text = Math.round((tempProduct/tempTotal)*100) + "%";
      jArray.push(object);
    });
    var obj = {
      title: 'GRAPH',
      field: 'achievement',
      align: "left",
      formatter:"progress"
    }
    this.columns.push(obj);
    var object = {
      title: '달성률',
      field: 'achievement_text',
      align: "right",
    }
    this.columns.push(object);

    this.dataJson = jArray;
  };

  transAddedData(data, tableMap) {
    var rows = data.rows;
    var getColumns = data.columns;

    if (getColumns.map(x => x.text).indexOf('실적수량') !== -1 || getColumns.map(x => x.text).indexOf('양품') !== -1 || getColumns.map(x => x.text).indexOf('불량') !== -1) {
      var obj = {
        title: getColumns[2].text,
        field: getColumns[2].text,
        align: "left",
        // editor: this.autocompEditor,
      }
      this.columnOption(obj);
      this.columns.push(obj);
      for (var count=0; count < rows.length; count++) {
        var row = rows[count];
        var inputData = tableMap.get(row[1]);
        if(inputData !== undefined) {
          if (row[2] !== 0) {
            // console.log(row[2] + inputData.get(obj.title));
            if (inputData.get(obj.title) !== undefined)
              inputData.set(obj.title, row[2] + inputData.get(obj.title));
            else
              inputData.set(obj.title, row[2]);
            tableMap.set(row[1], inputData);
          }
        }
      }
    } else {
      for (var count=0; count < getColumns.length; count++) {
        var column = getColumns[count].text;
        var obj = {
          title: column,
          field: column,
          align: "left",
          // editor: this.autocompEditor,
        }
        this.columnOption(obj);
        this.columns.push(obj);
      }
      for (var count=0; count < rows.length; count++) {
        var row = rows[count];
        var map = new Map();
        for (var row_count=0; row_count < row.length; row_count++) {
          var item = row[row_count];
          map.set(getColumns[row_count].text,item);
        }
        // tableMap.set(map.get(getColumns[0].text) + map.get(getColumns[2].text), map);
        tableMap.set(map.get(getColumns[2].text), map);
      }
    }
  }
}

export {
  RmsPlantPlanPanelCtrl as PanelCtrl
};
