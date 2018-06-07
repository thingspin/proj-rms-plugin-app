import _ from 'lodash';
import $ from 'jquery';
import 'jquery-ui';
import 'jquery.tabulator/dist/css/tabulator.min.css';
import 'jquery.tabulator/dist/js/tabulator.min';
import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

const template = require("./partial/templet.html");
//const options = require("./partial/options.html");

class RmsCompanyListPanelCtrl extends MetricsPanelCtrl {
  static template = template;

  dsSrv: any;
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
  dataJson : any;

  mode : any;

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
      '소모품업체',
      '장비업체',
      '금형업체'      
    ],

    inputlItem: {
      business_id: -1,
      name: '',
      business_type: '',
      phone: '',
      person : '',
      mail : '',
      memo : '',      
    }
  };

  constructor($rootScope, $scope, $injector, rsDsSrv, alertSrv) {
    super($scope, $injector);

    _.defaults(this.panel, this.panelDefaults);

    this.panel.inputlItem.business_id = -1;

    this.dsSrv = rsDsSrv;
    this.alertSrv = alertSrv;
    this.$rootScope = $rootScope;
    this.$scope = $scope;

    this.divID = 'table-rms-' + this.panel.id;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    //this.events.on('render', this.rander.bind(this));
    // this.events.on('panel-initialized', this.onRender.bind(this));

    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));
  }

  onInitialized() {
    console.log("onInitialized");
    this.initalized = false;

    //return Promise.apply(this.fillTable());
  }

  onInitEditMode() {
  }  

  link(scope, elem, attrs, ctrl) {
    console.log("link");
    let t = elem.find('.thingspin-table')[0];
    t.id = this.divID;

    this.container = $(t);
  }

  // 2018.05.16
  rander() {
    //console.log("rander()...");
    if (!this.container) {
      console.log("container not found!");
      return Promise.reject({});
    }

    if (!this.initalized) {
      console.log("table is not initialized, yet!");
      //return Promise.resolve(this.createTable(null));
      return Promise.resolve(this.createTable(this.dataJson));
    } 

    return super.render(this.container.tabulator);
  }

  onDataError(err) {
    this.dataRaw = [];
    this.render();
  }

  onDataReceived(dataList) {
    //console.log("onDataReceived");
    this.dataRaw = dataList;
    //console.log(this.dataRaw);
    Promise.resolve(this.transformer(this.dataRaw));
    this.createTable(this.dataJson);
  }  

  createTable(dataList) {
    //console.log("create table ...");   
    
    // var tabledata = [
    //   { id: 1, name: 'A업체', phone: '010-1234-1234', person: '아무개', mail: 'email1@mda.com',  memo: ''}, 
    //   { id: 2, name: 'B업체', phone: '010-1234-1234', person: '아무개', mail: 'email1@mda.com',  memo: ''},     
    // ];

    if (this.initalized == true) {
      this.container.tabulator("destroy");
    }  

    var g_root = this;       
    this.container.tabulator({
      pagination: "local",
      paginationSize: 10,
      selectable: 1,
      fitColumns: true,     
      layout: "fitColumns",
      columns: this.columns,
      rowClick: function(e, row) {              
        
        g_root.showCtrlMode('edit');
        row.select();        

        g_root.panel.inputlItem.business_id = row.getData().BUSINESS_ID;
        g_root.panel.inputlItem.name = row.getData().NAME;
        g_root.panel.inputlItem.business_type = row.getData().BUSINESS_TYPE;
        g_root.panel.inputlItem.phone = row.getData().PHONE;
        g_root.panel.inputlItem.person = row.getData().PERSON;
        g_root.panel.inputlItem.mail = row.getData().MAIL;
        g_root.panel.inputlItem.memo = row.getData().MEMO;               
        
        g_root.events.emit('panel-size-changed');
        //g_root.$rootScope.$broadcast('refresh');           
                 
        console.log("select business_id: " + g_root.panel.inputlItem.business_id);
      },
    });

    if (dataList != null) {
      // this.container.tabulator("setData", dataList);
      //console.log(this.columns);
      //console.log(dataList);
      this.container.tabulator("setData",dataList);
    } else {
      // this.dataTable.setData("setData",tabledata);
      // this.container.tabulator("setData", tabledata);
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

  onNew() {

    let info = this.panel.inputlItem; 

    // console.log(info.name);
    // console.log(info.person);
    // console.log(info.mail);
    // console.log(info.phone);

    if (info.name == "" 
      || info.person == ""
      || info.mail == ""
      || info.phone == "" ) {
      this.alertSrv.set("입력 정보를 확인해 주세요", 'error', 5000);
    }
    else
    {
      this.$rootScope.appEvent('confirm-modal', {
        title: '등록',
        text: '정말로 등록 하시겠습니까?',
        //icon: 'fa-trash',
        //yesText: '삭제',
        onConfirm: () => {
            
          let selectId = this.datasource.id;
          // let query1 = [
          //   'select * from t_business where business_type="' 
          //   + info.business_type + '" and name="' + info.name + '" and person="' + info.person + '";'
          // ];     

          let query1 = [
            'select * from t_business where business_type="' 
            + info.business_type + '" and name="' + info.name + '"'
          ];     
  
          //console.log(selectId + " " + query);
          this.dsSrv.query(selectId, query1).then( result => {
            var data = result[0];
            //console.log("data rows: " + data.rows.length);  
            if(data.rows.length == 0)
            {
  
              let query2 = [
                'insert into t_business(business_type, name, phone, person, mail, memo) values("'
                + info.business_type + '", "' + info.name + '", "' + info.phone + '", "' + info.person + '", "' +  info.mail + '", "' +  info.memo + '");'
              ]; 
  
              this.dsSrv.query(selectId, query2).then( result => {            
                this.panel.inputlItem.business_id = -1;
                this.$rootScope.$broadcast('refresh');
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
  
          // {
          //   let query = [
          //     'insert into t_business(business_type, name, phone, person, mail, memo) values("'
          //     + info.business_type + '", "' + info.name + '", "' + info.phone + '", "' + info.person + '", "' +  info.mail + '", "' +  info.memo + '");'
          //   ];       
    
          //   // let query = [
          //   //   'insert into t_business(business_type, name, phone, person, mail, memo) select "'
          //   //   + info.business_type + '", "' 
          //   //   + info.name + '", "' 
          //   //   + info.phone + '", "' 
          //   //   + info.person + '", "' 
          //   //   +  info.mail + '", "' 
          //   //   +  info.memo + '" from dual where not exists(select * from t_business where business_type="'
          //   //                                               + info.business_type + '" and name="'
          //   //                                               + info.name + '" and person="'
          //   //                                               + info.person + '")'
          //   // ];       
    
          //   console.log(selectId + " " + query);
    
          //   this.dsSrv.query(selectId, query).then( result => {            
          //     this.panel.inputlItem.business_id = -1;
          //     this.$rootScope.$broadcast('refresh');
          //   }).catch( err => {
          //     console.error(err);
          //   });   
          // }
          //console.log("select business_id: " + this.panel.inputlItem.business_id);
        }
      });
    }        
  };

  onEdit() {    

    let info = this.panel.inputlItem;
    if(info.business_id != -1){

      this.$rootScope.appEvent('confirm-modal', {
        title: '수정',
        text: '정말로 수정 하시겠습니까?',
        //icon: 'fa-trash',
        //yesText: '삭제',
        onConfirm: () => {

          let selectId = this.datasource.id;

          let query1 = [
            'select * from t_business where business_type="' 
            + info.business_type + '" and name="' + info.name + '" and business_id!=' + info.business_id
          ];

          this.dsSrv.query(selectId, query1).then( result => {
            var data = result[0];
            //console.log("data rows: " + data.rows.length);  
            if(data.rows.length == 0)
            {
              let query2 = [
                'update t_business set ' + 
                'name="' + info.name + '", ' + 
                'business_type="' + info.business_type + '", ' + 
                'phone="' + info.phone + '", ' + 
                'mail="' + info.mail + '", ' + 
                'person="' + info.person + '", ' + 
                'memo="' + info.memo + '" where business_id=' + info.business_id        
              ];       
        
              //console.log(selectId + " " + query2);
        
              this.dsSrv.query(selectId, query2).then( result => {
                this.panel.inputlItem.business_id = -1;
                this.$rootScope.$broadcast('refresh');
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
    if(info.business_id != -1){

      this.$rootScope.appEvent('confirm-modal', {
        title: '삭제',
        text: '정말로 삭제 하시겠습니까?',
        icon: 'fa-trash',
        //yesText: '삭제',
        onConfirm: () => {
          let selectId = this.datasource.id;
          let query = [
            'delete from t_business where business_id=' + info.business_id
          ];       

          console.log(selectId + " " + query);

          this.dsSrv.query(selectId, query).then( result => {
            this.panel.inputlItem.business_id = -1;
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
    this.showCtrlMode('list');
    this.refresh();
  }

  showCtrlMode(mode) {
    if (mode == 'new') {
      var selectedRows = this.container.tabulator("getSelectedRows");
      if (selectedRows != undefined) {
        this.container.tabulator("deselectRow", selectedRows);
      }
      this.panel.inputlItem = {
        business_id: -1,
        name: '',
        business_type: '',
        phone: '',
        person : '',
        mail : '',
        memo : '',      
      }
      this.refresh();
    }
    this.mode = mode;
    this.events.emit('panel-size-changed');
  };
}



export {
  RmsCompanyListPanelCtrl as PanelCtrl
};
