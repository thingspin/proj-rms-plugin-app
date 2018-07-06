import _ from 'lodash';
import $ from 'jquery';
// import moment from 'moment';

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
//const options = require("./partial/options.html");

const MOLD_ID = "금형 ID";
const MOLD_REMOTE_MODEL = "리모컨 모델명";
const MOLD_CHANGE_PERIOD = "금형 교체주기";
const MOLD_USE_COUNT = "남은 사용횟수";
const MOLD_BUSINESS_NAME = "금형업체명";
const MOLD_MEMO = "메모(담당자, 전화번호)";

class RmsMoldListPanelCtrl extends MetricsPanelCtrl {
  static template = template;

  alertSrv: any;
  $rootScope: any;
  $scope: any;

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
  dataJson: any;

  mode: any;
  isViewer: any;
  defTabulatorOpts: object;
  selectTableRow: any;

  panelDefaults = {
    inputlItem: {
      mold_id: -1,
      remote_model: '',
      change_period: '',
      use_count: '',
      business_name: '',
      memo : ''
    },

    formatters : [],
    resizeValue : false,
    graphTitle : "GRAPH"
  };

  constructor($rootScope, $scope, $injector, contextSrv, private rsDsSrv, alertSrv) {
    super($scope, $injector);

    this.isViewer = contextSrv.hasRole('Viewer');
    if (!this.isViewer) {
      this.mode = 'showBtn';
    }

    this.aligns = ['LEFT','CENTER','RIGHT'];

    _.defaults(this.panel, this.panelDefaults);

    this.alertSrv = alertSrv;
    this.$rootScope = $rootScope;
    this.$scope = $scope;

    this.divID = 'table-rms-' + this.panel.id;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));
  }

  onInitialized() {
    // console.log("onInitialized");
    this.initalized = false;
  }

  onInitEditMode() {
    this.addEditorTab('Options', `public/plugins/proj-rms-plugin-app/panel/mold-list/partial/options.html`, 2);
  }

  link(scope, elem, attrs, ctrl) {
    // console.log("link");
    let t = elem.find('.thingspin-table')[0];
    t.id = this.divID;

    this.container = $(t);
    var link = document.createElement( "link" );
    link.href = "public/plugins/proj-rms-plugin-app/panel/mold-list/css/light.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
  }

  delFormatter(index) {
    this.panel.formatters.splice(index,1);
  }

  addFormatter() {
    // console.log(this.panel.formatters);
    this.panel.formatters.push({name: '', localstring: false, decimal: 2, fontsize: 0, width: 100, align: this.aligns[0]});
  }

  onDataError(err) {
    this.dataRaw = [];
    this.render();
  }

  onDataReceived(dataList) {
    // console.log("onDataReceived");
    this.dataRaw = dataList;
    // console.log(this.dataRaw);
    Promise.resolve(this.transformer(this.dataRaw));
    this.createTable(this.dataJson);
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
      // this.container.tabulator("setData", dataList);
      // console.log(this.columns);
      // console.log(dataList);
      this.container.tabulator("setData",dataList);
    } else {
    }
    this.container.tabulator("hideColumn", MOLD_ID);
    this.initalized = true;
    $(window).trigger('resize');
  }

  transformer(dataList) {
    this.columns = [];
    var data = dataList[0];
    var rows = data.rows;
    var getColumns = data.columns;
    getColumns.forEach((columnObj, count) => {
      var column = columnObj.text;
      var obj = {
        title: column,
        field: column,
        // editor: this.autocompEditor,
      };
      this.columnOption(obj);
      this.columns.push(obj);
      if (obj.title === MOLD_USE_COUNT) {
        this.columns.push({
          title: this.panel.graphTitle,
          field: 'achievement',
          align: "left",
          formatter: "progress",
          formatterParams:{legend:function(value){return value + " %"}, legendAlign:'center', legendColor:'#000000'}
        });    
      }
    });

    var jArray = new Array;
    var mapData = new Map();
    rows.forEach((row, count) => {
      var limit = 0;
      var useCount = 0;
      row.forEach((item, row_count) => {
        mapData.set(getColumns[row_count].text,item);
        switch(getColumns[row_count].text) {
          case MOLD_CHANGE_PERIOD :
          limit = item;
          break;
          case MOLD_USE_COUNT :
          useCount = item;
          mapData.set('achievement', (100-Math.floor(100*Number(useCount) / Number(limit))));
          break;
        }

      });
      var object = Object();
      mapData.forEach((v,k)=> {object[k] = v;});
      jArray.push(object);
    });
    this.dataJson = jArray;
  }

  selectRow(obj) {
    // console.log(obj);
    this.panel.inputlItem.mold_id = obj[MOLD_ID];
    this.panel.inputlItem.remote_model = obj[MOLD_REMOTE_MODEL];
    this.panel.inputlItem.change_period = obj[MOLD_CHANGE_PERIOD];
    this.panel.inputlItem.use_count = obj[MOLD_USE_COUNT];
    this.panel.inputlItem.business_name = obj[MOLD_BUSINESS_NAME];
    this.panel.inputlItem.memo = obj[MOLD_MEMO];
  }

  onNew(inputData) {

    let info = inputData;

    // console.log(info);
    if (info.remote_model === undefined || info.remote_model === "") {
      this.alertSrv.set("리모컨 모델명을 입력해 주세요", 'error', 5000);
    } else if(info.change_period === undefined || info.change_period.length === 0) { 
      this.alertSrv.set("금형 교체주기를 입력해 주세요.", 'error', 5000);
    } else if(info.use_count === undefined || info.use_count.length === 0) { 
      this.alertSrv.set("남은 사용횟수를 입력해 주세요.", 'error', 5000);    
    } else {
      this.$rootScope.appEvent('confirm-modal', {
        title: '등록',
        text: '정말로 등록 하시겠습니까?',
        //icon: 'fa-trash',
        //yesText: '삭제',
        onConfirm: () => {
          let selectId = this.datasource.id;
          let columns = "(";
          let values = "(";
          columns = columns + "REMOTE_MODEL";
          values = values + "'" + info.remote_model + "'";
          columns = columns + ", CHANGE_PERIOD";
          values = values + ", " + info.change_period + "";
          columns = columns + ", USE_COUNT";
          values = values + ", " + info.use_count + "";
          columns = columns + ", BUSINESS_NAME";
          if (info.business_name !== undefined && info.business_name !== null ) { 
            values = values + ", '" + info.business_name + "'";
          } else { 
            values = values + ", ''";
          }
          columns = columns + ", MEMO)";
          if (info.memo !== undefined && info.memo !== null ) { values = values + ", '" + info.memo + "')";} else { values = values + ", '')";}
          
          let query = [
            "insert into t_mold " + columns + " values " + values,
          ];
          
          this.rsDsSrv.query(selectId, query).then( result => {
            this.panel.inputlItem.mold_id = -1;
            this.showCtrlMode('showBtn');
            this.refresh();
          }).catch( err => {
            console.error(err);
          });
        }
      });
    }
  }

  onEdit() {
    let info = this.panel.inputlItem;

    if (info.mold_id !== -1) {
      this.$rootScope.appEvent('confirm-modal', {
        title: '수정',
        text: '정말로 수정 하시겠습니까?',
        //icon: 'fa-trash',
        //yesText: '삭제',
        onConfirm: () => {

          let selectId = this.datasource.id;

          let query3 = [
            'update t_mold set ' +
            'remote_model="' + info.remote_model + '", ' +
            'change_period=' + info.change_period + ', ' +
            'use_count=' + info.use_count + ', ' +
            'business_name="' + info.business_name + '", ' +
            'memo="' + info.memo + '" where mold_id=' + info.mold_id
          ];
          this.rsDsSrv.query(selectId, query3).then( result => {
            this.alertSrv.set(name + "이(가) 변경 되었습니다.", '', 'success', 1000);
            this.showCtrlMode('showBtn');
            this.refresh();
            // this.panel.inputlItem.mold_id = -1;
            // this.$rootScope.$broadcast('refresh');
          }).catch( err => {
            this.alertSrv.set(name + " 변경 실패", err, 'error', 5000);
            console.error(err);
          });
        }
      });

    } else {
      this.alertSrv.set("테이블의 Row를 선택해 주세요", 'error', 5000);
    }
  }

  onDel() {
    let info = this.panel.inputlItem;
    if (info.mold_id !== -1) {

      this.$rootScope.appEvent('confirm-modal', {
        title: '삭제',
        text: '정말로 삭제 하시겠습니까?',
        icon: 'fa-trash',
        onConfirm: () => {
          let selectId = this.datasource.id;
          let query = [
            'delete from t_mold where mold_id=' + info.mold_id
          ];

          this.rsDsSrv.query(selectId, query).then( result => {
            this.panel.inputlItem.mold_id = -1;

            this.panel.inputlItem = {
              mold_id: -1,
              remote_model: '',
              change_period: -1,
              use_count: -1,
              business_name: '',
              memo: ''
            };
            this.showCtrlMode('showBtn');
            this.$rootScope.$broadcast('refresh');
          }).catch( err => {
            console.error(err);
          });
        }
      });
    } else {
      this.alertSrv.set("테이블의 Row를 선택해 주세요", 'error', 5000);
    }
  }

  close() {
    const mode = (this.isViewer) ? 'list': 'showBtn';
    this.showCtrlMode(mode);
    this.refresh();
  }

  showCtrlMode(mode) {
    if (mode === 'new') {
      var selectedRows = this.container.tabulator("getSelectedRows");
      if (selectedRows !== undefined) {
        this.container.tabulator("deselectRow", selectedRows);
      }
      this.panel.inputlItem = {
        mold_id: -1,
        remote_model: '',
        change_period: '',
        use_count: '',
        business_name: '',
        memo : ''
      };
      this.refresh();
    }
    this.mode = mode;
    this.events.emit('panel-size-changed');
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
      if (obj.title === MOLD_USE_COUNT || obj.title === MOLD_CHANGE_PERIOD) {
        obj.align = this.aligns[2];
        obj.formatter = function(cell, formatterParam) {
          return Number(cell.getValue()).toLocaleString('en');
        };
      } else {
        obj.align = this.aligns[0];
      }
    }
  }
}

export {
  RmsMoldListPanelCtrl as PanelCtrl
};
