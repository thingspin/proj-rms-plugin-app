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
//const options = require("./partial/options.html");

const MACHINE_CONSUMABLE_ID = '등록 ID';
const MACHINE_NAME = '장비명';
const CONSUMABLE_NAME = '소모품명';
const CONSUMABLE_COUNT = '소모품 개수';
const CHANGE_DATE = '소모품 교체일';
const MACHINE_CONSUMABLE_MEMO = '메모';

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
  dataJson : any;

  mode : any;
  isViewer : any;

  panelDefaults = {
    // options: {
    //   legend: {
    //       show: true,
    //       values: false
    //   },
    //   legendTable: false,
    //   traceColors : {}
    // },

    machineCategory: [
    ],

    consumablesCategory: [
    ],

    inputlItem: {      
      machine_consumables_id: -1,
      machine_name: '',
      consumables_name: '',      
      count: '',
      change_date: '',
      memo : '',      
    },
    formatters : [],
    resizeValue : false
  };

  constructor($rootScope, $scope, $injector, contextSrv, private rsDsSrv, alertSrv) {
    super($scope, $injector);

    this.isViewer = contextSrv.hasRole('Viewer');
    if (!this.isViewer)
      this.mode = 'showBtn';

      this.aligns = ['LEFT','CENTER','RIGHT'];

    _.defaults(this.panel, this.panelDefaults);

    this.panel.inputlItem.change_date = new Date();

    this.alertSrv = alertSrv;
    this.$rootScope = $rootScope;
    this.$scope = $scope;

    this.divID = 'table-rms-' + this.panel.id;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    // this.events.on('render', this.onRender.bind(this)); //dynamic ui process
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));
    //this.events.on('panel-initialized', this.onInitialized.bind(this));
  }

  onInitialized() {
    console.log("onInitialized");
    this.initalized = false;   
  }

  onInitEditMode() {
    this.addEditorTab('Options', `public/plugins/proj-rms-plugin-app/panel/machine-consumables-reg/partial/options.html`, 2);
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

    if (this.initalized == true) {
      this.container.tabulator("destroy");
    }

    this.panel.machineCategory.length=0;
    this.panel.consumablesCategory.length=0;

    let selectId = this.datasource.id;

    // 모델명 추가
    let query1 = [
      'SELECT machine_name FROM t_machine'
    ]; 
    this.rsDsSrv.query(selectId, query1).then( result => {            
      var data = result[0];            
      for(var i=0; i<data.rows.length; i++)
      {
        this.panel.machineCategory.push(data.rows[i][0]);
      }
    }).catch( err => {
      console.error(err);
    }); 

    // 소모품명 추가
    let query2 = [
      'SELECT consumables_name FROM t_consumables'
    ]; 
    this.rsDsSrv.query(selectId, query2).then( result => {            
      var data = result[0];      
      for(var i=0; i<data.rows.length; i++)
      {
        this.panel.consumablesCategory.push(data.rows[i][0]);
      }
    }).catch( err => {
      console.error(err);
    }); 


    var g_root = this;
    this.container.tabulator({
      pagination: "local",
      paginationSize: 10,
      selectable: 1, 
      fitColumns:true,
      layout: "fitColumns",
      resizableColumns: this.panel.resizeValue,
      columns: this.columns,
      rowClick: function(e, row) {
        if (!this.isViewer) {
          g_root.showCtrlMode('edit');
          row.select();
        
          g_root.panel.inputlItem.machine_consumables_id = row.getData()[MACHINE_CONSUMABLE_ID];
          g_root.panel.inputlItem.machine_name = row.getData()[MACHINE_NAME];
          g_root.panel.inputlItem.consumables_name = row.getData()[CONSUMABLE_NAME];
          g_root.panel.inputlItem.count = row.getData()[CONSUMABLE_COUNT];
          g_root.panel.inputlItem.change_date = new Date(row.getData()[CHANGE_DATE]);
          g_root.panel.inputlItem.memo = row.getData()[MACHINE_CONSUMABLE_MEMO];    

          g_root.events.emit('panel-size-changed');
        }
      },
    });

    if (dataList != null) {
      // this.container.tabulator("setData", dataList);
      console.log(this.columns);
      console.log(dataList);
      this.container.tabulator("setData",dataList);
    } else {
      // this.dataTable.setData("setData",tabledata);
      // this.container.tabulator("setData", tabledata);
    }
    this.container.tabulator("hideColumn", MACHINE_CONSUMABLE_ID);
    this.initalized = true;
    $(window).trigger('resize');
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
        // editor: this.autocompEditor,
      }
      this.columnOption(obj);
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
  

  onNew() {

    let info = this.panel.inputlItem; 

    console.log(info);
        
    if (info.machine_name == null 
      || info.consumables_name == null
      || info.count == "" ) {
      this.alertSrv.set("입력 정보를 확인해 주세요", 'error', 5000);
    }
    else{
      this.$rootScope.appEvent('confirm-modal', {
        title: '등록',
        text: '정말로 등록 하시겠습니까?',
        //icon: 'fa-trash',
        //yesText: '삭제',
        onConfirm: () => {

          let selectId = this.datasource.id;
          let query1 = [
            'SELECT machine_name, consumables_name '
            + 'FROM t_machine AS a, t_consumables AS b, t_machine_consumables AS c WHERE a.machine_id = c.machine_id AND b.consumables_id = c.consumables_id '
            + 'and a.machine_name="' + info.machine_name + '" and b.consumables_name="' + info.consumables_name + '"'
          ];
          
          //console.log(query1);  

          this.rsDsSrv.query(selectId, query1).then( result => {
            var data = result[0];
            //console.log("data rows: " + data.rows.length);  
            if(data.rows.length == 0)
            {
              let query2 = [
                'select machine_id, consumables_id from t_machine, t_consumables where machine_name="' 
                + info.machine_name + '" and consumables_name="' + info.consumables_name + '"'
              ];

              this.rsDsSrv.query(selectId, query2).then( result => {  

                var data = result[0];      
                var machine_id = data.rows[0][0];
                var consumables_id = data.rows[0][1];
                
                var tmpDate = new Date(info.change_date);
                var strDate = tmpDate.getFullYear() + '/' + (tmpDate.getMonth()+1) + '/' + tmpDate.getDate()
    
                let query3 = [
                  'insert into t_machine_consumables(machine_id, consumables_id, consumables_count, change_date, memo) values('
                  + machine_id + ', ' + consumables_id + ', ' + info.count + ', "' 
                  + strDate + '", "' + info.memo + '");'
                ]; 

                //console.log(query3);
    
                this.rsDsSrv.query(selectId, query3).then( result => {            
                  this.panel.inputlItem.machine_consumables_id = -1;
                  this.showCtrlMode('showBtn');
                  this.$rootScope.$broadcast('refresh');
                }).catch( err => {
                  console.error(err);
                }); 
                
              }).catch( err => {
                console.error(err);
              });               
            } 
            else
            {
              this.alertSrv.set("이미 등록 되어있습니다.", 'error', 5000);
            }
  
          }).catch( err => {
            console.error(err);
          }); 

        }
      });

    }
  };

  onEdit() {    

    let info = this.panel.inputlItem;

    console.log(info);

    if(info.machine_consumables_id != -1){

      this.$rootScope.appEvent('confirm-modal', {
        title: '수정',
        text: '정말로 수정 하시겠습니까?',
        //icon: 'fa-trash',
        //yesText: '삭제',
        onConfirm: () => {

          let selectId = this.datasource.id;

          let query1 = [
            'SELECT machine_name, consumables_name '
            + 'FROM t_machine AS a, t_consumables AS b, t_machine_consumables AS c WHERE a.machine_id = c.machine_id AND b.consumables_id = c.consumables_id '
            + 'and a.machine_name="' + info.machine_name + '" and b.consumables_name="' 
            + info.consumables_name + '" and machine_consumables_id !=' + info.machine_consumables_id
          ];
          
          //console.log(query1);  

          this.rsDsSrv.query(selectId, query1).then( result => {
            var data = result[0];
            //console.log("data rows: " + data.rows.length);  
            if(data.rows.length == 0)
            {
              let query2 = [
                'select machine_id, consumables_id from t_machine, t_consumables where machine_name="' 
                    + info.machine_name + '" and consumables_name="' + info.consumables_name + '"'
              ];
    
              this.rsDsSrv.query(selectId, query2).then( result => {  
    
                var data = result[0];      
                var machine_id = data.rows[0][0];
                var consumables_id = data.rows[0][1];
    
                var tmpDate = new Date(info.change_date);
                var strDate = tmpDate.getFullYear() + '/' + (tmpDate.getMonth()+1) + '/' + tmpDate.getDate()
                
                let query2 = [
                  'update t_machine_consumables set ' + 
                  'machine_id=' + machine_id + ', ' + 
                  'consumables_id=' + consumables_id + ', ' + 
                  'consumables_count=' + info.count + ', ' + 
                  'change_date="' + strDate + '", ' + 
                  'memo="' + info.memo + '" where machine_consumables_id=' + info.machine_consumables_id
                ];       
          
                console.log(selectId + " " + query2);
          
                this.rsDsSrv.query(selectId, query2).then( result => {
                  this.panel.inputlItem.machine_consumables_id = -1;
                  this.showCtrlMode('showBtn');
                  this.$rootScope.$broadcast('refresh');
                }).catch( err => {
                  console.error(err);
                });    
    
    
              }).catch( err => {
                console.error(err);
              });
            }
            else
            {
              this.alertSrv.set("이미 등록 되어있습니다.", 'error', 5000);
            }

          }).catch( err => {
            console.error(err);
          });             
        }
      });   

    }
    else{
      this.alertSrv.set("테이블의 Row를 선택해 주세요", 'error', 5000);
    }    
  };


  onDel() {    
    
    let info = this.panel.inputlItem;
    if(info.mold_id != -1){

      this.$rootScope.appEvent('confirm-modal', {
        title: '삭제',
        text: '정말로 삭제 하시겠습니까?',
        icon: 'fa-trash',
        //yesText: '삭제',
        onConfirm: () => {
          let selectId = this.datasource.id;
          let query = [
            'delete from t_machine_consumables where machine_consumables_id=' + info.machine_consumables_id
          ];       

          console.log(selectId + " " + query);

          this.rsDsSrv.query(selectId, query).then( result => {
            this.panel.inputlItem.machine_consumables_id = -1;
            this.panel.inputlItem = {      
              machine_consumables_id: -1,
              machine_name: '',
              consumables_name: '',      
              count: '',
              change_date: '',
              memo : '',      
            }
            this.showCtrlMode('showBtn');
            this.$rootScope.$broadcast('refresh');
          }).catch( err => {
            console.error(err);
          });  
        } 
      });
    }
    else{
      this.alertSrv.set("테이블의 Row를 선택해 주세요", 'error', 5000);
    }
  };

  close() {
    if (this.isViewer)
      this.showCtrlMode('list');
    else
      this.showCtrlMode('showBtn');
    this.refresh();
  }

  showCtrlMode(mode) {
    if (mode == 'new') {
      var selectedRows = this.container.tabulator("getSelectedRows");
      if (selectedRows != undefined) {
        this.container.tabulator("deselectRow", selectedRows);
      }
      this.panel.inputlItem = {      
        machine_consumables_id: -1,
        machine_name: '',
        consumables_name: '',      
        count: '',
        change_date: '',
        memo : '',      
      }
      this.refresh();
    }
    this.mode = mode;
    this.events.emit('panel-size-changed');
  };

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
      if (obj.title === CONSUMABLE_COUNT) {
        obj.align = this.aligns[2];
        obj.formatter = function(cell, formatterParam) {
          return Number(cell.getValue()).toLocaleString('en');
        }
      } else if (obj.title === CHANGE_DATE) {
        obj.align = this.aligns[1];
        obj.formatter = function(cell, formatterParam) {
          return moment(cell.getValue()).format("YYYY/MM/DD");
        }
      } else {
        obj.align = this.aligns[0];
      }
    }
  }
}

export {
  RmsMachineConsumablesPanelCtrl as PanelCtrl
};
