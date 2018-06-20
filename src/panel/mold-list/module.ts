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
//const options = require("./partial/options.html");

const MOLD_ID = "금형 ID";
const MOLD_BUSINESS = "업체명";
const MOLD_MODEL = "모델명";
const MOLD_CHANGE_DATE = "교체일";
const MOLD_PERIOD = "교체주기";
const MOLD_USE_COUNT = "사용횟수";
const MOLD_MEMO = "메모";

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

    businessCategory: [
    ],

    inputlItem: {
      mold_id: -1,
      plant_id: -1,      
      business_name: '',
      mold_name: '',
      change_date: '',
      period : '',
      use_count: '',
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
    this.addEditorTab('Options', `public/plugins/proj-rms-plugin-app/panel/mold-list/partial/options.html`, 2);
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

  delFormatter(index) {
    this.panel.formatters.splice(index,1);
  }

  addFormatter() {
    console.log(this.panel.formatters);
    this.panel.formatters.push({name: '', localstring: false, decimal: 2, fontsize: 0, width: 100, align:this.aligns[0]});
  }
  
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

    // var tabledata = [
    //   { id: 1, mold_name: "A모델", change_date: "2018/05/15", change_period: "10000", use_count: "10000",  memo: ''},
    //   { id: 2, mold_name: "B모델", change_date: "2018/05/15", change_period: "10000", use_count: "10000",  memo: ''},
    //   { id: 3, mold_name: "C모델", change_date: "2018/05/15", change_period: "10000", use_count: "10000",  memo: ''},
    //   { id: 4, mold_name: "D모델", change_date: "2018/05/15", change_period: "10000", use_count: "10000",  memo: ''},
    //   { id: 5, mold_name: "E모델", change_date: "2018/05/15", change_period: "10000", use_count: "10000",  memo: ''}
    // ];

    if (this.initalized == true) {
      this.container.tabulator("destroy");
    }

    this.panel.businessCategory.length=0;

    let selectId = this.datasource.id;
    if (!this.isViewer) {
      let query1 = [
        'select name from t_business where business_type="금형업체"'
      ]; 
      this.rsDsSrv.query(selectId, query1).then( result => {            

        var data = result[0];      
        //console.log("data rows: " + data.rows.length);  
        //console.log(data);  
        
        for(var i=0; i<data.rows.length; i++)
        {
          //var obj = {name:data.rows[i]};
          this.panel.businessCategory.push(data.rows[i][0]);
        }
  
      }).catch( err => {
        console.error(err);
      });  
    }

    var g_root = this;
    this.container.tabulator({
      pagination: "local",
      paginationSize: 10,
      selectable: 1,
      fitColumns: true,     
      layout: "fitColumns",
      resizableColumns: this.panel.resizeValue,
      columns: this.columns,
      rowClick: function(e, row) {
        if (!this.isViewer) {
          g_root.showCtrlMode('edit');
          row.select();
          g_root.panel.inputlItem.mold_id = row.getData()[MOLD_ID];
          //g_root.panel.inputlItem.plant_id = row.getData().PLANT_ID;
          g_root.panel.inputlItem.business_name = row.getData()[MOLD_BUSINESS];
          g_root.panel.inputlItem.mold_name = row.getData()[MOLD_MODEL];
          g_root.panel.inputlItem.change_date = new Date(row.getData()[MOLD_CHANGE_DATE]);
          g_root.panel.inputlItem.period = row.getData()[MOLD_PERIOD];
          g_root.panel.inputlItem.use_count = row.getData()[MOLD_USE_COUNT];
          g_root.panel.inputlItem.memo = row.getData()[MOLD_MEMO];
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
    this.container.tabulator("hideColumn", MOLD_ID);
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
        // editor: this.autocompEditor,
      };
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
        
    if (info.business_name == null 
      || info.mold_name == ""
      || info.period == ""
      || info.use_count == "" ) {
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
            'select * from t_mold where mold_name="' + info.mold_name + '";'
          ];   

          this.rsDsSrv.query(selectId, query1).then( result => {
            var data = result[0];
            //console.log("data rows: " + data.rows.length);  
            if(data.rows.length == 0)
            {

              let query2 = [
                'select business_id from t_business where name="'
                + info.business_name + '" and business_type="금형업체"' 
              ];

              this.rsDsSrv.query(selectId, query2).then( result => {  

                var data = result[0];      
                var business_id = data.rows[0][0];
                
                var tmpDate = new Date(info.change_date);
                var strDate = tmpDate.getFullYear() + '/' + (tmpDate.getMonth()+1) + '/' + tmpDate.getDate()
    
                let query3 = [
                  'insert into t_mold(plant_id, business_id, mold_name, change_date, change_period, use_count, memo) values(1000, '
                  + business_id + ', "' + info.mold_name + '","' 
                  + strDate + '", "' + info.period + '", "' 
                  + info.use_count + '", "' +  info.memo + '");'
                ]; 

                //console.log(query3);
    
                this.rsDsSrv.query(selectId, query3).then( result => {            
                  this.panel.inputlItem.mold_id = -1;
                  this.showCtrlMode('showBtn');
                  this.refresh();
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


      // var day = new Date(this.panel.inputlItem.change_date);
      // console.log("select CHANGE_DATE1: " + this.panel.inputlItem.change_date);
      // console.log("select CHANGE_DATE2: " 
      // + day.getFullYear() + '/' + (day.getMonth()+1) + '/' + day.getDate());

      // let info = this.panel.materialItem;
      // info.id = this.data.length + 1;
      // info.company = info.company.name;
      // info.regdate = new Date('YYYY/MM/DD').toString();

      // this.data.push(info);
      // this.container.tabulator("setData", this.data);
  };

  onEdit() {    

    let info = this.panel.inputlItem;

    console.log(info);

    if(info.mold_id != -1){

      this.$rootScope.appEvent('confirm-modal', {
        title: '수정',
        text: '정말로 수정 하시겠습니까?',
        //icon: 'fa-trash',
        //yesText: '삭제',
        onConfirm: () => {

          let selectId = this.datasource.id;

          let query1 = [
            'select * from t_mold where mold_name="' + info.mold_name + '" and mold_id!=' + info.mold_id
          ]; 

          this.rsDsSrv.query(selectId, query1).then( result => {
            var data = result[0];
            //console.log("data rows: " + data.rows.length);  
            if(data.rows.length == 0)
            {
              let query2 = [
                'select business_id from t_business where name="'
                + info.business_name + '" and business_type="금형업체"' 
              ];
    
              this.rsDsSrv.query(selectId, query2).then( result => {  
    
                var data = result[0];      
                var business_id = data.rows[0][0];
    
                var tmpDate = new Date(info.change_date);
                var strDate = tmpDate.getFullYear() + '/' + (tmpDate.getMonth()+1) + '/' + tmpDate.getDate()
                
                let query3 = [
                  'update t_mold set ' + 
                  'business_id="' + business_id + '", ' + 
                  'mold_name="' + info.mold_name + '", ' + 
                  'change_date="' + strDate + '", ' + 
                  'change_period="' + info.period + '", ' + 
                  'use_count="' + info.use_count + '", ' + 
                  'memo="' + info.memo + '" where mold_id=' + info.mold_id        
                ];       
          
                console.log(selectId + " " + query3);
          
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
            'delete from t_mold where mold_id=' + info.mold_id
          ];       

          console.log(selectId + " " + query);

          this.rsDsSrv.query(selectId, query).then( result => {
            this.panel.inputlItem.mold_id = -1;

            this.panel.inputlItem = {
              mold_id: -1,
              plant_id: -1,      
              business_name: '',
              mold_name: '',
              change_date: '',
              period : '',
              use_count: '',
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
        mold_id: -1,
        plant_id: -1,      
        business_name: '',
        mold_name: '',
        change_date: '',
        period : '',
        use_count: '',
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
      if (obj.title === MOLD_USE_COUNT) {
        obj.align = this.aligns[2];
        obj.formatter = function(cell, formatterParam) {
          return Number(cell.getValue()).toLocaleString('en');
        }
      } else {
        obj.align = this.aligns[0];
      }
    }
  }
}

export {
  RmsMoldListPanelCtrl as PanelCtrl
};
