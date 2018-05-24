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

class RmsConsumablesPanelCtrl extends MetricsPanelCtrl {
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
  businessSelect : any;
  comsumable : any;
  selectItem : any;
  dataJson : any;
  defTabulatorOpts: object;
  selectObj: any;
  selectTableRow : any;
  mode : any;
  tableName : string;

  constructor($scope, private $rootScope, $injector, $http, $location, uiSegmentSrv, annotationsSrv, private rsDsSrv, private alertSrv) {
    super($scope, $injector);

    // _.defaults(this.panel, this.panelDefaults);
    _.defaults(this.panel);

    this.comsumable = {
      name : "품목",
      standard : '규격',
      cycle_count : '안전수량',
      count : '재고수량',
      count_time_count : '교체주기',
      count_time : '교체주기 시간',
      memo : '특이사항'
    }
    this.tableName = "t_consumables";

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
  }

  initQueryData() {
    let selectId = this.datasource.id;
    let deferred = this.$q.defer();
    let query = ["select business_id, name, person from t_business where business_type='소모품업체'"];
    this.rsDsSrv.query(selectId, query).then( result => {
        deferred.resolve(result);
        this.transDataBusiness(result);
    }).catch( err => {
        deferred.reject(err);
        console.log(err);
    });
    return deferred.promise;
  }

  subTableQueryData() {
    let selectId = this.datasource.id;
    let deferred = this.$q.defer();
    let query = ["select OPERATION_DATE as '날짜', SR_TYPE as '타입', SR_COUNT as '내역', MEMO as '특이사항' from t_shipper_receiver where "];
    this.rsDsSrv.query(selectId, query).then( result => {
        deferred.resolve(result);
        this.transDataBusiness(result);
    }).catch( err => {
        deferred.reject(err);
        console.log(err);
    });
    return deferred.promise;
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
      columns: this.columns
    };
    let opts = Object.assign({ // deep copy
      rowClick: (e, row) => { //trigger an alert message when the row is clicked
          this.showCtrlMode('edit');
          this.selectRow(row.getData());
          this.selectTableRow = row;
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
    this.initalized = true;
  }

  selectRow(obj) {
    this.selectObj = obj;
    this.comsumable.id = obj['장비 ID'];
    this.comsumable.name = obj['장비 설명'];
    this.comsumable.memo = obj['메모'];
    this.comsumable.name = obj['품목'];
    this.comsumable.standard = obj['규격'];
    this.comsumable.cycle_count = obj['안전수량'];
    this.comsumable.count = obj['재고수량'];
    this.comsumable.count_time_count = obj['교체주기'];
    this.comsumable.count_time = obj['교체주기 시간'];
    this.comsumable.memo = obj['특이사항'];
    var cmpStr = obj['업체명'] + " : " + obj['담당자'];
    var result = this.business.map(x => x.name).indexOf(cmpStr);
    this.businessSelect = this.business[result];
  }

  clearCtrl(mode) {
    switch (mode) {
      case 'new' :
      {
        this.comsumable.name = "",
        this.comsumable.standard = "",
        this.comsumable.cycle_count = "",
        this.comsumable.count = "",
        this.comsumable.count_time_count = "",
        this.comsumable.count_time = "",
        this.comsumable.memo = ""
      }
      case 'edit' :
      {
        this.comsumable.name = "",
        this.comsumable.standard = "",
        this.comsumable.cycle_count = "",
        this.comsumable.count = "",
        this.comsumable.count_time_count = "",
        this.comsumable.count_time = "",
        this.comsumable.memo = ""
      }
    }
  }

  close() {
    this.showCtrlMode('list');
    this.refresh();
  }

  transDataInput(dataList) {
    console.log(dataList);
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
        align: "left",
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
        if (getColumns[row_count].text == '규격') {
          this.checker.push(item);
        }
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

  addConsumableItem(businessSelect, name, standard, count, cycle_count, count_time_count, count_time, memo) {
    if (name == undefined) {
      this.alertSrv.set("품목을 입력해 주세요", 'error', 5000);
      return;
    } else if (standard == undefined) {
      this.alertSrv.set("규격을 입력해 주세요", 'error', 5000);
      return;
    } else if (count == undefined) {
      this.alertSrv.set("재고수량을 입력해 주세요", 'error', 5000);
      return;
    } else {
      if(!this.insertChecker(standard)) {
        let columns = "(PLANT_ID";
        let values = "('1000'";
        columns = columns + ", BUSINESS_ID";
        values = values + ", " + businessSelect.id;
        columns = columns + ", CONSUMABLES_NAME";
        values = values + ", '" + name + "'";
        columns = columns + ", CONSUMABLES_STANDARD";
        values = values + ", '" + standard + "'";
        columns = columns + ", COUNT";
        values = values + ", " + count;
        if (cycle_count.length !== 0){
          columns = columns + ", CYCLE_COUNT";
          values = values + ", " + cycle_count;
        }
        if (count_time_count.length !== 0){
          columns = columns + ", CYCLE_TIME_COUNT";
          values = values + ", " + count_time_count;
        }
        if (memo !== undefined && memo !== null )       { values = values + ", '" + memo + "')";} else { values = values + ", '')";}
        columns = columns + ", MEMO)";
        let selectId = this.datasource.id;

        let query = [
          "insert into " + this.tableName + " " + columns + " values " + values,
        ];
        console.log(query);
        this.rsDsSrv.query(selectId, query).then( result => {
            // this.updateInspectionPropertyList(selectId);
            this.alertSrv.set(name + "이(가) 추가되었습니다.", '', 'success', 1000);
            // this.addSubData(name, standard);
            this.refresh();
        }).catch( err => {
            this.alertSrv.set(name + " 추가 실패", err, 'error', 5000);
            console.error(err);
        });  
      } else {
        this.alertSrv.set(name + "가 같은 규격이 존재합니다. 다른 것으로 입력해주세요.", 'error', 5000);
        return;
      }
    }
  }

  updateConsumableItem(businessSelect, name, standard,count, cycle_count, count_time_count, count_time, memo) {
    if (name == undefined) {
      this.alertSrv.set("품목을 입력해 주세요", 'error', 5000);
      return;
    } else if (count == undefined) {
      this.alertSrv.set("재고수량을 입력해 주세요", 'error', 5000);
      return;
    } else {      
      let selectId = this.datasource.id;
      let query = [
        "update " + this.tableName + " set BUSINESS_ID = " + businessSelect.id + ", COUNT = " + count + ", CYCLE_COUNT = " + cycle_count + ", MEMO = '" + memo + "' where CONSUMABLES_STANDARD = '" + standard + "' and CONSUMABLES_NAME = '" + name + "';",
      ];
      console.log(query);
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

  deleteConsumableItem(name, standard) {
    this.$rootScope.appEvent('confirm-modal', {
      title: name + " " + standard + ' 삭제',
      text: '정말로 지우시겠습니까?',
      icon: 'fa-trash',
      yesText: '삭제',
      onConfirm: () => {
        let selectId = this.datasource.id;
        let query = [
          "delete from " + this.tableName + " where CONSUMABLES_STANDARD = '" + standard + "' and CONSUMABLES_NAME = '" + name + "'",
        ];
        this.rsDsSrv.query(selectId, query).then( result => {
            // this.updateInspectionPropertyList(selectId);
            this.alertSrv.set(name + " " + standard + "이(가) 삭제 되었습니다.", '', 'success', 1000);
            this.showCtrlMode('list');
            this.refresh();
        }).catch( err => {
            this.alertSrv.set(name + " 삭제 실패", err, 'error', 5000);
            console.error(err);
        });
      }
    });
  }

  showCtrlMode(mode) {
    if (mode == 'new') {
      var selectedRows = this.container.tabulator("getSelectedRows");
      if (selectedRows != undefined) {
        this.container.tabulator("deselectRow", selectedRows);
      }
      this.comsumable = {
        name : "",
        standard : '',
        cycle_count : '',
        count : '',
        count_time_count : '',
        count_time : '',
        memo : ''
      }
      this.refresh();
    }
    this.mode = mode;
    this.events.emit('panel-size-changed');
  }

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
  RmsConsumablesPanelCtrl as PanelCtrl
};
