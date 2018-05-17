import _ from 'lodash';
import $ from 'jquery';
import 'jquery-ui';
import 'jquery.tabulator/dist/js/tabulator.min';
import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/panel/tabulator-table/css/tabulator.min.css',
  light: 'plugins/proj-rms-plugin-app/panel/tabulator-table/css/tabulator.min.css'
});

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

const template = require("./partial/templet.html");
//const options = require("./partial/options.html");

class RmsCompanyListPanelCtrl extends MetricsPanelCtrl {
  static template = template;

  dsSrv: any;
  $rootScope: any;

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
      name: 'Z업체',
      business_type: '소모품업체',
      phone: '010-1111-1111',
      person : '아아아',
      mail : '111@111.com',
      memo : '아무말',      
    }
  };

  constructor($rootScope, $scope, $injector, rsDsSrv) {
    super($scope, $injector);

    _.defaults(this.panel, this.panelDefaults);

    this.dsSrv = rsDsSrv;
    this.$rootScope = $rootScope;

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
    console.log("onDataReceived");
    this.dataRaw = dataList;
    console.log(this.dataRaw);
    Promise.resolve(this.transformer(this.dataRaw));
    this.createTable(this.dataJson);
  }  

  createTable(dataList) {
    console.log("create table ...");   
    
    var tabledata = [
      { id: 1, name: 'A업체', phone: '010-1234-1234', person: '아무개', mail: 'email1@mda.com',  memo: ''}, 
      { id: 2, name: 'B업체', phone: '010-1234-1234', person: '아무개', mail: 'email1@mda.com',  memo: ''},     
    ];

    if (this.initalized == true) {
      this.container.tabulator("destroy");
    }      



    this.container.tabulator({
      //height: 340,
      layout: "fitColumns",
      columns: this.columns,
      rowClick: function(e, row) {
        
        console.log(row.getData());        
        
        // console.log(row.getData().BUSINESS_ID);
        // console.log(row.getData().BUSINESS_TYPE);  
        

        //this.inputlItem.business_id = row.getData().BUSINESS_ID;

        // let info = this.inputlItem;
        // info.business_id = row.getData().BUSINESS_ID;
        // info.business_type = row.getData().BUSINESS_TYPE;        
        // this.panel.inputlItem.business_id = row.getData().BUSINESS_ID;
        // this.panel.inputlItem.business_type = row.getData().BUSINESS_TYPE;
        
        // console.log(row);
        //   alert("Row " + row.getData() + " Clicked!!!!");
      },
    });

    if (dataList != null) {
      // this.container.tabulator("setData", dataList);
      console.log(this.columns);
      console.log(dataList);
      this.container.tabulator("setData",dataList);
    } else {
      this.dataTable.setData("setData",tabledata);
      this.container.tabulator("setData", tabledata);
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
    // TODO ! - call database inasert/update query.
    //console.log("New SQL");  
    let info = this.panel.inputlItem;
    // console.log(info.name);  
    // console.log(info.business_type);  
    // console.log(info.phone);  
    // console.log(info.person);  
    // console.log(info.mail);  
    // console.log(info.memo);  

    let selectId = this.datasource.id;
    let query = [
      'insert into t_business(business_type, name, phone, person, mail, memo) values("'
      + info.business_type + '", "' + info.name + '", "' + info.phone + '", "' + info.person + '", "' +  info.mail + '", "' +  info.memo + '");'
    ];       
    console.log(selectId + " " + query);

    this.dsSrv.query(selectId, query).then( result => {
      this.$scope.inspectionName = "";
      this.$rootScope.$broadcast('refresh');
    }).catch( err => {
      console.error(err);
    });    
  };

  onEdit() {    

    // let info = this.panel.inputlItem;
    // let selectId = this.datasource.id;
    // let query = [
    //   'insert into t_business(business_type, name, phone, person, mail, memo) values("'
    //   + info.business_type + '", "' + info.name + '", "' + info.phone + '", "' + info.person + '", "' +  info.mail + '", "' +  info.memo + '");'
    // ];       
    // console.log(selectId + " " + query);

    // this.dsSrv.query(selectId, query).then( result => {
    //   this.$scope.inspectionName = "";
    //   this.$rootScope.$broadcast('refresh');
    // }).catch( err => {
    //   console.error(err);
    // });    
  };

  onDel() {    
    
    // let info = this.panel.inputlItem;
    // let selectId = this.datasource.id;
    // let query = [
    //   'insert into t_business(business_type, name, phone, person, mail, memo) values("'
    //   + info.business_type + '", "' + info.name + '", "' + info.phone + '", "' + info.person + '", "' +  info.mail + '", "' +  info.memo + '");'
    // ];       
    // console.log(selectId + " " + query);

    // this.dsSrv.query(selectId, query).then( result => {
    //   this.$scope.inspectionName = "";
    //   this.$rootScope.$broadcast('refresh');
    // }).catch( err => {
    //   console.error(err);
    // });    
  };
}



export {
  RmsCompanyListPanelCtrl as PanelCtrl
};
