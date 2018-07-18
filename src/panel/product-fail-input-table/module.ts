import _ from 'lodash';
import $ from 'jquery';
import moment from 'moment';
import 'jquery-ui';
import 'jquery.tabulator/dist/css/tabulator.min.css';
import 'jquery.tabulator/dist/js/tabulator.min';
import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

const PRODUCT_TOTAL = "검사기 양품수";
const PRODUCT_INPUT_MACHINE_TOTAL = "불량입력 불량수";

class RmsProductFailPanelCtrl extends MetricsPanelCtrl {
  static template = require("./partial/templet.html");

  divID: string;
  initalized: boolean;
  columninit: boolean;
  inEditMode: boolean;

  container: any;
  dataTable: any;
  data: any[];

  dataRaw = [];
  columns = [];
  aligns = [];

  dataJson: any;
  defTabulatorOpts: any;
  mode: any;
  tableName: string;
  getColumns: any;

  panelDefaults = {
    formatters : [],
    colume : []
  };

  constructor($scope, $injector, $http, $location, uiSegmentSrv, annotationsSrv) {
    super($scope, $injector);

    _.defaults(this.panel, this.panelDefaults);

    this.aligns = ['LEFT','CENTER','RIGHT'];
    this.getColumns = new Map();

    this.divID = 'table-rms-' + this.panel.id;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('panel-size-changed', this.onSizeChanged.bind(this));

    // this.events.on('render', this.onRender.bind(this)); //dynamic ui process
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));
  }

  onInitialized() {
    this.initalized = false;
    this.columninit = false;
  }

  onInitEditMode() {
    this.addEditorTab('Options', `public/plugins/proj-rms-plugin-app/panel/product-fail-table/partial/options.html`, 2);
  }

  link(scope, elem, attrs, ctrl) {
    let t = elem.find('.thingspin-table')[0];
    t.id = this.divID;

    this.container = $(t);
    var link = document.createElement( "link" );
    link.href = "public/plugins/proj-rms-plugin-app/panel/product-fail-table/css/light.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
  }

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
    this.panel.formatters.push({name: '', localstring: false, decimal: 2, fontsize: 0, width: 100, align: this.aligns[0]});
  }

  initColume() {
    this.columns.push({title:'time_sec', field:'time_sec',align:'center'});
    this.columns.push({title:'날짜', field:'날짜',align:'center'});
    this.columns.push({title:'모델', field:'모델',align:'center'});
  }

  createTable(dataList) {
    if (this.initalized) {
      this.container.tabulator("destroy");
    }
    this.defTabulatorOpts = {
      height: this.height-10,
      pagination: "local",
      paginationSize: 20,
      selectable: 1,
      fitColumns: true,
      layout: "fitColumns",
      columns: this.columns,
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
    }
    this.container.tabulator("hideColumn","time_sec");
    this.initalized = true;
    $(window).trigger('resize');
  }

  onSizeChanged () {
  }

  selectRow(obj) {
  }

  transDataInput(dataList) {
  }

  columnOption(obj) {
    // console.log(obj);
    var count = this.panel.formatters.map( (e) => {return e.name;}).indexOf(obj.title);
    if (count !== -1) {
      var formatter = this.panel.formatters[count];
      if (obj.width !== 0)
        obj.width = formatter.width;
      obj.align = formatter.align;
      obj.formatter = function(cell, formatterParam) {
        const value = cell.getValue();
        if (!isNaN(value)) {
          return (formatter.localstring)
            ? Number((Number(value)).toFixed(formatter.decimal)).toLocaleString('en')
            : (Number(value)).toFixed(formatter.decimal);
        } else {
          return value;
        }
      };
    } else {
      if (obj.title === PRODUCT_TOTAL || obj.title === PRODUCT_INPUT_MACHINE_TOTAL) {
        obj.align = this.aligns[2];
        obj.formatter = function(cell, formatterParam) {
          if (cell.getValue() === undefined || cell.getValue === null)
            cell.setValue(0);
          return Number(cell.getValue()).toLocaleString('en');
        };
      }
    }
  }

  transformer(dataList) {
    this.columns = [];
    this.columninit = false;
    var jArray = new Array;
    var tableMap = new Map();
    dataList.forEach(element => {
      this.transAddedData(element, tableMap);
    });
    var inputValue = false;
    // console.log(this);

    tableMap.forEach(function (value, key, mapObj) {
      var object = Object();
      var tempProduct = 0;
      var tempError = 0;
      value.forEach((v,k) => {
        object[k] = v;
        switch (k) {
          case PRODUCT_TOTAL: tempProduct = v; break;
          case PRODUCT_INPUT_MACHINE_TOTAL: tempError = v; break;
        }
      });
      if (tempProduct !== 0) {
        if (!inputValue)
          inputValue = true;
        object.achievement = ((Number(tempError)*100)/Number(tempProduct)).toFixed(2) + " %"; 
      }
      jArray.push(object);
    });

    if (inputValue) {
      this.columns.push({
        title: '불량율',
        field: 'achievement',
        align: "right",
      });  
    }

    this.dataJson = jArray;
  }

  transAddedData(data, tableMap) {
    var rows = data.rows;
    var columns = data.columns;
    // console.log("fail :" + rows);

    if (columns.map(x => x.text).indexOf(PRODUCT_TOTAL) !== -1
      || columns.map(x => x.text).indexOf(PRODUCT_INPUT_MACHINE_TOTAL) !== -1) {
      if(!this.columninit) {
        this.initColume();
        this.columninit = true;
      }
      var obj = {
        title: columns[2].text,
        field: columns[2].text,
        align: "left",
        // editor: this.autocompEditor,
      };
      this.columnOption(obj);
      this.columns.push(obj);
      rows.forEach((row, count) => {
        var inputData = tableMap.get(row[1]);
        if (inputData) {
          if (row[2] !== 0) {
            const setData = inputData.get(obj.title) ? row[2] + inputData.get(obj.title) : row[2];
            inputData.set(obj.title, setData);
            tableMap.set(row[1], inputData);
          }
        } else {
          if (row[2] !== 0) {
            var date = new Date(row[0]);
            var map = new Map();
            map.set('time_sec', row[0]);
            map.set('날짜', moment(date).format("YYYY/MM/DD"));
            map.set('모델', row[1]);
            map.set(obj.title, row[2]);
            tableMap.set(row[1], map);
          }
        }
      });
      // console.log(tableMap);
    }
  }
}

export {
  RmsProductFailPanelCtrl as PanelCtrl
};
