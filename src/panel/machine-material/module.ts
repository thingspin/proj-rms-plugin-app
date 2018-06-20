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

const DEVICE_ID = "장비 ID";
const DEVICE_NAME = "장비 이름";
const DEVICE_MEMO = "특이사항";
const BUSINESS_OBJ = "업체명";
const BUSINESS_NAME = "담당자";

const panelDefaults = {
  formatters : [],
  resizeValue : false
};

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
  business = [];
  checker = [];
  aligns = [];
  businessSelect : any;
  selectColumn : any;
  machine : any;
  dataJson : any;
  defTabulatorOpts: object;
  selectObj: any;
  selectTableRow : any;
  mode : any;
  isEditor : any;
  isViewer : any;
  isAdmin : any;
  dataIDMap : any;

  constructor($scope, private $rootScope, $injector, $http, $location, uiSegmentSrv, annotationsSrv, contextSrv, private rsDsSrv, private alertSrv) {
    super($scope, $injector);
    
    _.defaults(this.panel, panelDefaults);
    // _.defaults(this.panel);
    this.isViewer = contextSrv.hasRole('Viewer');
    if (!this.isViewer)
      this.mode = 'showBtn';
    
    this.machine = {
      id : DEVICE_ID,
      name : DEVICE_NAME,
      memo : DEVICE_MEMO
    }
    this.aligns = ['LEFT','CENTER','RIGHT'];

    this.divID = 'table-rms-' + this.panel.id;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    // this.events.on('render', this.onRender.bind(this)); //dynamic ui process
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));

  }

  delFormatter(index) {
    this.panel.formatters.splice(index,1);
  }
  
  addFormatter() {
    console.log(this.panel.formatters);
    this.panel.formatters.push({name: '', localstring: false, decimal: 2, fontsize: 0, width: 100, align:this.aligns[0]});
  }

  onInitialized() {
    this.initalized = false;
  }

  onInitEditMode() {
    this.addEditorTab('Options', `public/plugins/proj-rms-plugin-app/panel/machine-material/partial/options.html`, 2);
  }

  initQueryData() {
    if (!this.isViewer) {
      let selectId = this.datasource.id;
      let deferred = this.$q.defer();
      let query = ["select business_id, name, person from t_business where business_type='장비업체'"];
      this.rsDsSrv.query(selectId, query).then( result => {
          deferred.resolve(result);
          this.transDataBusiness(result);
      }).catch( err => {
          deferred.reject(err);
          console.log(err);
      });
      return deferred.promise;  
    }
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
    if (this.mode != 'edit')
      this.initQueryData();
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
      paginationSize: 10,
      selectable: 1,
      fitColumns: true,     
      layout: "fitColumns",
      resizableColumns: this.panel.resizeValue,
      columns: this.columns
    };
    let opts = Object.assign({ // deep copy
      rowClick: (e, row) => { //trigger an alert message when the row is clicked
        if (!this.isViewer) {
          this.showCtrlMode('edit');
          this.selectRow(row.getData());
          this.selectTableRow = row;
          // this.container.tabulator('deselectRow');
        }
      },
    }, this.defTabulatorOpts);
    this.container.tabulator(opts);
    if (dataList != null) {
      this.container.tabulator("setData",dataList);
    } else {
      this.dataTable.setData("setData",tabledata);
      this.container.tabulator("setData", tabledata);
    }
    this.container.tabulator("hideColumn",DEVICE_ID);
    this.initalized = true;
  }

  selectRow(obj) {
    this.selectObj = obj;
    this.machine.id = obj[DEVICE_ID];
    this.machine.name = obj[DEVICE_NAME];
    this.machine.memo = obj[DEVICE_MEMO];
    var cmpStr = obj[BUSINESS_OBJ] + " : " + obj[BUSINESS_NAME];
    var result = this.business.map(x => x.name).indexOf(cmpStr);
    this.businessSelect = this.business[result];
    console.log(obj);
  }

  clearCtrl(mode) {
    switch (mode) {
      case 'new' :
      {
        this.machine.id = "";
        this.machine.name = "";
        this.machine.memo = "";
        this.businessSelect = null;
      }
      case 'edit' :
      {
        this.machine.name = "";
        this.machine.memo = "";
        this.businessSelect = null;        
      }
    }
  }

  close() {
    if (this.isViewer)
      this.showCtrlMode('list');
    else
      this.showCtrlMode('showBtn');
    this.refresh();
  }

  transDataBusiness(dataList) {
    this.business = [];
    var data = dataList[0];
    var rows = data.rows;
    for (var count=0; count < rows.length; count++) {
      var item = rows[count];
      var obj = {
        name:item[1] +" : "+ item[2],
        id:item[0]
      }
      this.business.push(obj)
    }
  }
/*
name: '', format: '%.2f', fontsize: '10', width: 100, align:this.align[0]
*/
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
    }
  }

  
  transformer(dataList) {
    this.columns = [];
    this.checker = [];
    var data = dataList[0];
    var rows = data.rows;
    var getColumns = data.columns;
    for (var count=0; count < getColumns.length; count++) {
      var column = getColumns[count].text;
      var obj = {
        title: column,
        field: column,
        // editor: this.autocompEditor,
      }
      if (this.panel.formatters.length > 0)
        this.columnOption(obj);
      this.columns.push(obj);
    }
    var jArray = new Array;
    var mapData = new Map();

    for (var count=0; count < rows.length; count++) {
      var row = rows[count];
      for (var row_count=0; row_count < row.length; row_count++) {
        var item = row[row_count];
        if (getColumns[row_count].text == DEVICE_NAME) {
          this.checker.push(item);
        }
        mapData.set(getColumns[row_count].text,item);

      }
      var object = Object();
      mapData.forEach((v,k)=> {object[k] = v});
      jArray.push(object);
    }
    this.dataJson = jArray;
  };

  insertChecker(value) {
    if(this.checker.indexOf(value) == -1)
      return false;
    else 
      return true;
  }

  addMachineItem(businessSelect, name, memo) {
    if (businessSelect == undefined) {
      this.alertSrv.set("업체를 입력해 주세요", 'error', 5000);
      return;
    } else if (name == undefined) {
      this.alertSrv.set("장비 이름을 입력해 주세요", 'error', 5000);
      return;
    } else {
      if(!this.insertChecker(name)) {
        let columns = "(PLANT_ID";
        let values = "('1000'";
        columns = columns + ", MACHINE_NAME";
        values = values + ", '" + name + "'";
        columns = columns + ", BUSINESS_ID";
        values = values + ", " + businessSelect.id;
        if (memo !== undefined && memo !== null )       { values = values + ",'" + memo + "')";} else { values = values + ", '')";}
        columns = columns + ", MEMO)";
        let selectId = this.datasource.id;

        let query = [
          "insert into t_machine " + columns + " values " + values,
        ];
        this.rsDsSrv.query(selectId, query).then( result => {
            // this.updateInspectionPropertyList(selectId);
            this.alertSrv.set(name + "이(가) 추가되었습니다.", '', 'success', 1000);
            this.refresh();
        }).catch( err => {
            this.alertSrv.set(name + " 추가 실패", err, 'error', 5000);
            console.error(err);
        });  
      } else {
        this.alertSrv.set(name + "가 같은 장비 이름이 존재합니다. 다른 것으로 입력해주세요.", 'error', 5000);
        return;
      }
    }
  }

  updateMachineItem(businessSelect, name, memo) {
    if (businessSelect == undefined) {
      this.alertSrv.set("업체를 입력해 주세요", 'error', 5000);
      return;
    } else if (name == undefined) {
      this.alertSrv.set("장비 이름을 입력해 주세요", 'error', 5000);
      return;
    } else {
      let selectId = this.datasource.id;
      if (memo === undefined)
        memo = "";
      let query = [
        "update t_machine set MACHINE_NAME = '" + name + "', BUSINESS_ID = " + businessSelect.id + ", MEMO = '" + memo + "' where MACHINE_ID = '" + this.machine.id + "'",
      ];
      this.rsDsSrv.query(selectId, query).then( result => {
          // this.updateInspectionPropertyList(selectId);
          this.alertSrv.set(name + "이(가) 변경 되었습니다.", '', 'success', 1000);
          this.refresh();
      }).catch( err => {
          this.alertSrv.set(name + " 변경 실패", err, 'error', 5000);
          console.error(err);
      });  
    }
  }

  deleteMachineItem(value) {
    this.$rootScope.appEvent('confirm-modal', {
      title: value + ' 삭제',
      text: '정말로 지우시겠습니까?',
      icon: 'fa-trash',
      yesText: '삭제',
      onConfirm: () => {
        let selectId = this.datasource.id;
        let query = [
          "delete from t_machine where MACHINE_NAME = '" + value + "'",
        ];
        this.rsDsSrv.query(selectId, query).then( result => {
            // this.updateInspectionPropertyList(selectId);
            this.alertSrv.set(name + "이(가) 삭제 되었습니다.", '', 'success', 1000);
            if (this.isViewer)
              this.showCtrlMode('list');
            else
              this.showCtrlMode('showBtn');
            this.refresh();
        }).catch( err => {
            this.alertSrv.set(name + " 삭제 실패", err, 'error', 5000);
            console.error(err);
        });
      }
    });
  }

  showCtrlMode(value) {
    if (value == 'new') {
      var selectedRows = this.container.tabulator("getSelectedRows");
      if (selectedRows != undefined) {
        this.container.tabulator("deselectRow", selectedRows);
      }
      this.machine = {
        id : '',
        name : '',
        memo : ''
      }
      this.refresh();
    }
    this.mode = value;
    console.log(this.mode);
    this.events.emit('panel-size-changed');
  }
}

export {
  RmsMachineMaterialPanelCtrl as PanelCtrl
};
