import _ from 'lodash';
import $ from 'jquery';
// import moment from 'moment';
import 'jquery-ui';
import 'jquery.tabulator/dist/css/tabulator.min.css';
import 'jquery.tabulator/dist/js/tabulator.min';
import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

import '../../services/remoteSolutionDS';
// import { clearLine } from 'readline';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

const template = require("./partial/templet.html");
//const options = require("./partial/options.html");

const MACHINEUSE_ID = '장비 ID';
const MACHINE_NAME = '장비명';
const CONSUMABLE = '소모품';
const MACHINEUSE_COUNT = '남은 사용횟수';
const BUSINESS_NAME = '장비업체명';
const MACHINEUSE_MEMO = '메모(담당자, 전화번호)';

class RmsMachineConsumablesPanelCtrl extends MetricsPanelCtrl {
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

  consumablesCategoryMap = new Map();

  panelDefaults = {
    consumablesCategory: [
    ],
    inputlItem: {
      machineuse_id: -1,
      machine_name: '',
      consumable: '',
      machineuse_count:'',
      business_name:'',
      memo:''
    },

    formatters : [],
    resizeValue : false,
    graphTitle: "남은 비율"
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
    this.addEditorTab('Options', `public/plugins/proj-rms-plugin-app/panel/machine-consumables-reg/partial/options.html`, 2);
  }

  link(scope, elem, attrs, ctrl) {
    // console.log("link");
    let t = elem.find('.thingspin-table')[0];
    t.id = this.divID;

    this.container = $(t);
    var link = document.createElement( "link" );
    link.href = "public/plugins/proj-rms-plugin-app/panel/machine-consumables-reg/css/light.css";
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
    // console.log("onDataReceived");
    this.dataRaw = dataList;
    // console.log(this.dataRaw);
    Promise.resolve(this.initDataSet());
    // Promise.resolve(this.transformer(this.dataRaw));
  }

  createTable(dataList) {
    if (this.initalized) {
      this.container.tabulator("destroy");
    }
    // 소모품 규격 추가
    // let query3 = [
    //   'SELECT consumables_standard FROM t_consumables'
    // ];
    // this.rsDsSrv.query(selectId, query3).then( result => {
    //   var data = result[0];
    //   for (var i = 0; i<data.rows.length; i++) {
    //     this.panel.consumablesStandardCategory.push(data.rows[i][0]);
    //   }
    //   this.panel.inputlItem.consumables_standard = this.panel.consumablesStandardCategory[0];
    // }).catch( err => {
    //   console.error(err);
    // });

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
      this.container.tabulator("setData",dataList);
    } else {
      // this.dataTable.setData("setData",tabledata);
      // this.container.tabulator("setData", tabledata);
    }
    this.container.tabulator("hideColumn", MACHINEUSE_ID);
    this.initalized = true;
    $(window).trigger('resize');
  }

  initDataSet() {
    this.panel.consumablesCategory.length = 0;
    if(this.panel.consumablesCategoryMap.size > 0)
      this.panel.consumablesCategoryMap.clear();
    let selectId = this.datasource.id;

    if (selectId !== undefined) {
      // 소모품명 추가
      let query = [
        'SELECT CONSUMABLES_ID, CONCAT(CONSUMABLES_NAME, \'-\', CONSUMABLES_STANDARD) as CONSUMABLES, CURRENT_COUNT FROM t_consumables'
      ];
      this.rsDsSrv.query(selectId, query).then( result => {
        var data = result[0];
        for (var i = 0; i<data.rows.length; i++) {
          // console.log(data.rows[i]);
          var value = data.rows[i];
          var obj = {
            index : 0,
            key : '',
            current_count : 0
          }
          for (var j = 0; j<value.length; j++) {
            switch(j) {
              case 0:
                obj.index = value[j];
              break;
              case 1:
                obj.key = value[j];
              break;
              case 2:
                obj.current_count = value[j];
              break;
            }
          }
          this.panel.consumablesCategory.push(obj.key);
          this.consumablesCategoryMap.set(obj.key, obj);
          // console.log(obj);
          this.transformer(this.dataRaw);
        }
        this.panel.inputlItem.consumable = this.panel.consumablesCategory[0];
      }).catch( err => {
        console.error(err);
      });
    }
  }

  selectRow(obj) {
    // console.log(obj);
    this.panel.inputlItem.machineuse_id = obj[MACHINEUSE_ID];
    this.panel.inputlItem.machine_name = obj[MACHINE_NAME];
    this.panel.inputlItem.consumable = obj[CONSUMABLE];
    this.panel.inputlItem.machineuse_count = obj[MACHINEUSE_COUNT];
    this.panel.inputlItem.business_name = obj[BUSINESS_NAME];
    this.panel.inputlItem.memo = obj[MACHINEUSE_MEMO];
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
        // editor: this.autocompEditor,
      };
      this.columnOption(obj);
      this.columns.push(obj);

      if(obj.title === MACHINEUSE_COUNT) {
        this.columns.push({
          title: this.panel.graphTitle,
          field:'achievement',
          align:'left',
          formatter: 'progress',
          formatterParams:{legend:function(value){return value + " %"}, legendAlign:'center', legendColor:'#000000'}
        });
      }
    });

    var jArray = new Array;
    var mapData = new Map();
    rows.forEach((row, count) => {
      var use_count = 0;
      var graph_str = '';
      row.forEach((item, row_count) => {
        mapData.set(getColumns[row_count].text,item);
        switch(getColumns[row_count].text) {
          case CONSUMABLE :
          graph_str = item;
          break;
          case MACHINEUSE_COUNT :
          use_count = item;
          var value = this.consumablesCategoryMap.get(graph_str);
          // console.log(value);
          if (value !== undefined)
            mapData.set('achievement', (100-Math.floor(100*Number(use_count) / Number(value.current_count))));
          break;
        }
      });
      var object = Object();
      mapData.forEach((v,k)=> {object[k] = v;});
      jArray.push(object);

    });
    this.dataJson = jArray;
    this.createTable(this.dataJson);
  }

  onNew(value) {
    let info = value;

    // console.log(info);
    if (info.machine_name === undefined || info.machine_name === "") {
      this.alertSrv.set("장비명을 입력해 주세요", 'error', 5000);
    } else if(info.machineuse_count === undefined || info.machineuse_count === null) { 
      this.alertSrv.set("남은 사용횟수를 입력해 주세요.", 'error', 5000);
    } else {
      this.$rootScope.appEvent('confirm-modal', {
        title: '등록',
        text: '정말로 등록 하시겠습니까?',
        //icon: 'fa-trash',
        //yesText: '삭제',
        onConfirm: () => {

          let selectId = this.datasource.id;
          var consumables = info.consumable.split('-');
          var consumable_name = "";
          for (var i=1;i<consumables.length;i++) {
            if (consumables.length == i+1)
            consumable_name += consumables[i];
            else
              consumable_name += consumables[i] + '-';
          }
          let query1 = [
            'SELECT MACHINE_NAME, b.CONSUMABLES_NAME, b.CONSUMABLES_STANDARD '
            + 'FROM t_machine_use AS a, t_consumables AS b WHERE a.CONSUMABLES_ID = b.CONSUMABLES_ID '
            + 'and a.machine_name="' + info.machine_name + '" and CONSUMABLES_NAME="' + consumables[0] + '"'
            + 'and CONSUMABLES_STANDARD="' + consumable_name + '"'
          ];
          // console.log(query1);

          this.rsDsSrv.query(selectId, query1).then( result => {
            var data = result[0];
            //console.log("data rows: " + data.rows.length);
            if (data.rows.length === 0) {
              console.log("data is null");
              var value = this.consumablesCategoryMap.get(info.consumable);

              let query2 = [
                'insert into t_machine_use(MACHINE_NAME, CONSUMABLES_ID, MACHINEUSE_COUNT, BUSINESS_NAME, MEMO) values('
                + info.machine_name + ', ' + value.index + ', ' + info.machineuse_count + ', "'
                + info.business_name + '", "' + info.memo + '");'
              ];
              console.log(query2);
              this.rsDsSrv.query(selectId, query2).then( result => {
                this.panel.inputlItem.machine_consumables_id = -1;
                this.showCtrlMode('showBtn');
                this.$rootScope.$broadcast('refresh');
              }).catch( err => {
                this.alertSrv.set("등록에 실패하였습니다.", 'error', 5000);
                console.error(err);
              });
            } else {
              this.alertSrv.set("이미 등록 되어있습니다.", 'error', 5000);
            }
          }).catch( err => {
            console.error(err);
          });
        }
      });
    }
  }

  onEdit(value) {
    let info = value;

    // console.log(info);

    this.$rootScope.appEvent('confirm-modal', {
      title: '수정',
      text: '정말로 수정 하시겠습니까?',
      //icon: 'fa-trash',
      //yesText: '삭제',
      onConfirm: () => {

        let selectId = this.datasource.id;
        var value = this.consumablesCategoryMap.get(info.consumable);
        let query2 = [
          'update t_machine_use set ' +
          'MACHINE_NAME="' + info.machine_name + '", ' +
          'CONSUMABLES_ID=' + value.index + ', ' +
          'MACHINEUSE_COUNT=' + info.machineuse_count + ', ' +
          'BUSINESS_NAME="' + info.business_name + '", ' +
          'memo="' + info.memo + '" where MACHINEUSE_ID=' + info.machineuse_id
        ];

        this.rsDsSrv.query(selectId, query2).then( result => {
          this.panel.inputlItem.machine_consumables_id = -1;
          this.showCtrlMode('showBtn');
          this.$rootScope.$broadcast('refresh');
        }).catch( err => {
          console.error(err);
        });
      }
    });
  }

  onDel() {
    let info = this.panel.inputlItem;
    if (info.mold_id !== -1) {

      this.$rootScope.appEvent('confirm-modal', {
        title: '삭제',
        text: '정말로 삭제 하시겠습니까?',
        icon: 'fa-trash',
        //yesText: '삭제',
        onConfirm: () => {
          let selectId = this.datasource.id;
          let query = [
            'delete from t_machine_use where MACHINEUSE_ID=' + info.machineuse_id
          ];

          this.rsDsSrv.query(selectId, query).then( result => {
            this.panel.inputlItem.machine_consumables_id = -1;
            this.panel.inputlItem = {
              machine_consumables_id: -1,
              machine_name: '',
              consumables_name: '',
              consumables_standard: '',
              count: '',
              change_date: '',
              memo : '',
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
    const mode = (this.isViewer) ? 'list' : 'showBtn';
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
        machineuse_id: -1,
        machine_name: '',
        consumable: '',
        machineuse_count:'',
        business_name:'',
        memo:''
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
    } else if (obj.title === this.panel.graphTitle) {
      console.log(obj);
      obj.formatterParams = function(value) {
        return value + " % ";  
      }
    } else {
      if (obj.title === MACHINEUSE_COUNT) {
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
  RmsMachineConsumablesPanelCtrl as PanelCtrl
};
