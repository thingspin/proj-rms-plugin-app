import _ from 'lodash';
import $ from 'jquery';
import 'jquery-ui';
import 'jquery.tabulator/dist/css/tabulator.min.css';
import 'jquery.tabulator/dist/js/tabulator.min';
import 'jquery-sparkline';
import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

import '../../services/remoteSolutionDS';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

const template = require("./partial/templet.html");
// const options = require("./partial/options.html");

const CONSUMABLES_ID = '소모품 ID';
const CONSUMABLES_PRODUCT = '소모품명';
const CONSUMABLES_STANDARD = '규격';
const CONSUMABLES_SAFE_COUNT = '안전수량';
const CONSUMABLES_CURRENT_COUNT = '재고수량';
const CONSUMABLES_CHANGE_RATE = '교체주기';
const CONSUMABLES_BUSINESS = '소모품업체명';
const CONSUMABLES_MEMO = '메모(담당자, 전화번호)';
const CONSUMABLES_GRAPH = "Graph";
const CONSUMABLES_BULLET = "bullet";

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
  aligns = [];
  consumable: any;
  selectItem: any;
  dataJson: any;
  defTabulatorOpts: object;
  selectTableRow: any;
  mode: any;
  tableName: string;
  isViewer: any;

  panelDefaults = {
    formatters : [],
    resizeValue : false
  };

  constructor($scope, private $rootScope, $injector, $http, $location, uiSegmentSrv, annotationsSrv, contextSrv, private rsDsSrv, private alertSrv) {
    super($scope, $injector);

    _.defaults(this.panel, this.panelDefaults);
    // _.defaults(this.panel);

    this.isViewer = contextSrv.hasRole('Viewer');
    if (!this.isViewer) {
      this.mode = 'showBtn';
    }

    this.aligns = ['LEFT','CENTER','RIGHT'];

    this.consumable = {
      name : CONSUMABLES_PRODUCT,
      standard : CONSUMABLES_STANDARD,
      safe_count : CONSUMABLES_SAFE_COUNT,
      current_count : CONSUMABLES_CURRENT_COUNT,
      change_rate : CONSUMABLES_CHANGE_RATE,
      business_name : CONSUMABLES_BUSINESS,
      memo : CONSUMABLES_MEMO
    };
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
    this.addEditorTab('Options', `public/plugins/proj-rms-plugin-app/panel/consumables-list/partial/options.html`, 2);
  }

  /*
  initQueryData() {
    if (!this.isViewer) {
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
  }
  */

  // subTableQueryData() {
  //   let selectId = this.datasource.id;
  //   let deferred = this.$q.defer();
  //   let query = ["select OPERATION_DATE as '날짜', SR_TYPE as '타입', SR_COUNT as '내역', MEMO as '특이사항' from t_shipper_receiver where "];
  //   this.rsDsSrv.query(selectId, query).then( result => {
  //       deferred.resolve(result);
  //       this.transDataBusiness(result);
  //   }).catch( err => {
  //       deferred.reject(err);
  //       console.log(err);
  //   });
  //   return deferred.promise;
  // }

  link(scope, elem, attrs, ctrl) {
    let t = elem.find('.thingspin-table')[0];
    t.id = this.divID;

    this.container = $(t);
    var link = document.createElement( "link" );
    link.href = "public/plugins/proj-rms-plugin-app/panel/consumables-list/css/light.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );

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
    // if (this.mode !== 'edit') {
    //   this.initQueryData();
    // }
  }

  createTable(dataList) {
    if (this.initalized) {
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
    }
    this.container.tabulator("hideColumn", CONSUMABLES_ID);
    this.initalized = true;
    $(window).trigger('resize');
  }

  selectRow(obj) {
    console.log(obj);
    this.consumable.id = obj[CONSUMABLES_ID];
    this.consumable.name = obj[CONSUMABLES_PRODUCT];
    this.consumable.standard = obj[CONSUMABLES_STANDARD];
    this.consumable.safe_count = obj[CONSUMABLES_SAFE_COUNT];
    this.consumable.current_count = obj[CONSUMABLES_CURRENT_COUNT];
    this.consumable.change_rate = obj[CONSUMABLES_CHANGE_RATE];
    this.consumable.business_name = obj[CONSUMABLES_BUSINESS];
    this.consumable.memo = obj[CONSUMABLES_MEMO];
  }

  clearCtrl(mode) {
    switch (mode) {
      case 'new' :
      {
        this.consumable.id = "";
        this.consumable.name = "";
        this.consumable.standard = "";
        this.consumable.safe_count = "";
        this.consumable.current_count = "";
        this.consumable.change_rate = "";
        this.consumable.business_name = "";
        this.consumable.memo = "";
      }
      case 'edit' :
      {
        this.consumable.id = "";
        this.consumable.name = "";
        this.consumable.standard = "";
        this.consumable.safe_count = "";
        this.consumable.current_count = "";
        this.consumable.change_rate = "";
        this.consumable.business_name = "";
        this.consumable.memo = "";
      }
    }
  }

  close() {
    const mode = this.isViewer ? 'list' : 'showBtn';
    this.showCtrlMode(mode);
    this.refresh();
  }

  transDataInput(dataList) {
    console.log(dataList);
  }

  /*
  transDataBusiness(dataList) {
    this.business = [];
    var data = dataList[0];
    var rows = data.rows;
    for (var count = 0; count < rows.length; count++) {
      var item = rows[count];
      var obj = {
        name: item[1] +" : "+ item[2],
        id: item[0]
      };
      this.business.push(obj);
    }
    this.businessSelect = this.business[0];
  }
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
        if (isNaN(value) === false) {
          if (formatter.localstring) {
            return Number((Number(value)).toFixed(formatter.decimal)).toLocaleString('en');
          } else {
            return (Number(value)).toFixed(formatter.decimal);
          }
        } else {
          return value;
        }
      };
    } else {
      if (obj.title === CONSUMABLES_SAFE_COUNT || obj.title === CONSUMABLES_CURRENT_COUNT ||  obj.title === CONSUMABLES_CHANGE_RATE) {
        obj.align = this.aligns[2];
        obj.formatter = function(cell, formatterParam) {
          return Number(cell.getValue()).toLocaleString('en');
        };
      } else {
        obj.align = this.aligns[0];
      }
    }
  }

  createGraph (cell, formatterParam) {
    setTimeout(function() {
      cell.getElement().sparkline(cell.getValue(), {width:"100%", type:CONSUMABLES_BULLET, disableTooltips:true});
    }, 10);
  }

  transformer(dataList) {
    this.columns = [];
    var data = dataList[0];
    var rows = data.rows;
    var getColumns = data.columns;
    getColumns.forEach((columnObj, count) => {
      const column = columnObj.text,
      obj = {
        title: column,
        field: column,
        align: "left",
        // editor: this.autocompEditor,
      };
      this.columnOption(obj);
      this.columns.push(obj);
      if (obj.title === CONSUMABLES_CHANGE_RATE) {
        var object = {
          title: CONSUMABLES_GRAPH,
          field: CONSUMABLES_BULLET,
          formatter:this.createGraph
        };
        this.columnOption(object);
        this.columns.push(object);
        console.log(object);
      }

    });
    var jArray = new Array;
    var mapData = new Map();
    for (var count = 0; count < rows.length; count++) {
      var row = rows[count];
      var total = 0;
      var changeRate = 0;
      var limit = 0;
      for (var row_count = 0; row_count < row.length; row_count++) {
        var item = row[row_count];
        mapData.set(getColumns[row_count].text,item);
        switch(getColumns[row_count].text) {
          // case CONSUMABLES_STANDARD:
          //   this.checker.push(item);
          // break;
          case CONSUMABLES_SAFE_COUNT:
            limit = item;
          break;
          case CONSUMABLES_CURRENT_COUNT:
            total = item;
          break;
          case CONSUMABLES_CHANGE_RATE:
          changeRate = item;
          break;
        }
      }
      mapData.set(CONSUMABLES_BULLET, [limit, total, changeRate]);
      var object = Object();
      mapData.forEach((v,k)=> {object[k] = v;});
      console.log(object);
      jArray.push(object);
    }
    this.dataJson = jArray;
  }

  /*
  insertChecker(value) {
    return (this.checker.indexOf(value) === -1) ? false : true;
  }
  ctrl.consumable.change_rate, ctrl.consumable.business_name, ctrl.consumable.memo
  */

  addConsumableItem(name, standard, safe_count, current_count, change_rate, business_name, memo) {
    if (name === undefined) {
      this.alertSrv.set("품목을 입력해 주세요", 'error', 5000);
      return;
    } else if (standard === undefined) {
      this.alertSrv.set("규격을 입력해 주세요", 'error', 5000);
      return;
    } else if (current_count === undefined) {
      this.alertSrv.set("재고수량을 입력해 주세요", 'error', 5000);
      return;
    } else if (safe_count === undefined) {
      this.alertSrv.set("안전수량을 입력해 주세요", 'error', 5000);
      return;
    } else if (change_rate === undefined) {
      this.alertSrv.set("교체주기를 입력해 주세요", 'error', 5000);
      return;
    } else {
      // if (!this.insertChecker(standard)) {
      let columns = "(";
      let values = "(";
      columns = columns + "CONSUMABLES_NAME";
      values = values + "'" + name + "'";
      columns = columns + ", CONSUMABLES_STANDARD";
      values = values + ", '" + standard + "'";
      columns = columns + ", SAFE_COUNT";
      values = values + ", " + safe_count + "";
      columns = columns + ", CURRENT_COUNT";
      values = values + ", " + current_count + "";
      columns = columns + ", CHANGE_RATE";
      values = values + ", " + change_rate + "";
      columns = columns + ", BUSINESS_NAME";
      if (business_name !== undefined && business_name !== null ) { 
        values = values + ", '" + business_name + "'";
      } else { 
        values = values + ", ''";
      }
      columns = columns + ", MEMO)";
      if (memo !== undefined && memo !== null ) { values = values + ", '" + memo + "')";} else { values = values + ", '')";}
      let selectId = this.datasource.id;

      let query = [
        "insert into " + this.tableName + " " + columns + " values " + values,
      ];
      console.log(query);
      this.rsDsSrv.query(selectId, query).then( result => {
          // this.updateInspectionPropertyList(selectId);
          this.alertSrv.set(name + "이(가) 추가되었습니다.", '', 'success', 1000);
          // this.addSubData(name, standard);
          this.showCtrlMode('showBtn');
          this.refresh();
      }).catch( err => {
          this.alertSrv.set(name + " 추가 실패", err, 'error', 5000);
          console.error(err);
      });
      // } else {
      //   this.alertSrv.set(name + "가 같은 규격이 존재합니다. 다른 것으로 입력해주세요.", 'error', 5000);
      //   return;
      // }
    }
  }

  updateConsumableItem(name, standard, safe_count, current_count, change_rate, business_name, memo) {
    if (name === undefined) {
      this.alertSrv.set("품목을 입력해 주세요", 'error', 5000);
      return;
    } else if (standard === undefined) {
      this.alertSrv.set("규격을 입력해 주세요", 'error', 5000);
      return;
    } else if (current_count === undefined) {
      this.alertSrv.set("재고수량을 입력해 주세요", 'error', 5000);
      return;
    } else if (safe_count === undefined) {
      this.alertSrv.set("안전수량을 입력해 주세요", 'error', 5000);
      return;
    } else if (change_rate === undefined) {
      this.alertSrv.set("교체주기를 입력해 주세요", 'error', 5000);
      return;
    } else {
      let selectId = this.datasource.id;
      let query = [
        "update " + this.tableName
        + " set CONSUMABLES_NAME = '" + name
        + "', CONSUMABLES_STANDARD = '" + standard
        + "', SAFE_COUNT = '" + safe_count
        + "', CURRENT_COUNT = '" + current_count
        + "', CHANGE_RATE = '" + change_rate
        + "', BUSINESS_NAME = '" + business_name
        + "', MEMO = '" + memo
        + "' where CONSUMABLES_ID = " + this.consumable.id + ";",
      ];
      console.log(query);
      this.rsDsSrv.query(selectId, query).then( result => {
          // this.updateInspectionPropertyList(selectId);
          this.alertSrv.set(name + "이(가) 변경 되었습니다.", '', 'success', 1000);
          this.showCtrlMode('showBtn');
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
          "delete from " + this.tableName + " where CONSUMABLES_ID = " + this.consumable.id,
        ];
        this.rsDsSrv.query(selectId, query).then( result => {
            // this.updateInspectionPropertyList(selectId);
            this.alertSrv.set(name + " " + standard + "이(가) 삭제 되었습니다.", '', 'success', 1000);
            const mode = (this.isViewer) ? 'list' : 'showBtn';
            this.showCtrlMode(mode);
            this.refresh();
        }).catch( err => {
            this.alertSrv.set(name + " 삭제 실패", err, 'error', 5000);
            console.error(err);
        });
      }
    });
  }

  showCtrlMode(mode) {
    if (mode === 'new') {
      var selectedRows = this.container.tabulator("getSelectedRows");
      if (selectedRows !== undefined) {
        this.container.tabulator("deselectRow", selectedRows);
      }
      this.consumable = {
        name : '',
        standard : '',
        safe_count : '',
        current_count : '',
        change_rate : '',
        business_name : '',
        memo : ''
      };
      this.refresh();
    }
    this.mode = mode;
    this.events.emit('panel-size-changed');
  }
}

export {
  RmsConsumablesPanelCtrl as PanelCtrl
};
