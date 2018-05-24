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
// const options = require("./partial/options.html");

class RmsAlarmRulePanelCtrl extends MetricsPanelCtrl {
  static template = template;

  divID: string;
  initalized: boolean;
  inEditMode: boolean;

  container: any;
  dataTable: any;
  data: any[];
  mouse: any;


  panelDefaults = {
    options: {
      legend: {
          show: true,
          values: false
      },
      legendTable: false,
      traceColors : {}
    },
    companies: [
      {code : '0000', name : '한컴MDS'},
      {code : '0001', name : '리모트솔루션'},
      {code : '0002', name : '삼성전자'},
    ],
    materialCategory: [
      '실린더',
      '리노핀',
      '솔레노이드밸브',
      '모터',
      '센서',
      '기타'
    ],
    materialItem: {
      'category': '',
      'name': '',
      company: '',
      safeAmount : 200,
      currAmount : 0,
      lifeAmount : 1000,
      memo : '',
      etc : ''
    }
  };

  constructor($scope, $injector, $http, $location, uiSegmentSrv, annotationsSrv) {
    super($scope, $injector);

    _.defaults(this.panel, this.panelDefaults);

    this.divID = 'table-rms-' + this.panel.id;
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('render', this.onRender.bind(this));
    this.events.on('panel-initialized', this.onRender.bind(this));
  }

  onInitialized() {
    return Promise.apply(this.fillTable());
  }

  onInitEditMode() {
  }

  fillTable() {
    this.data = [
      { id: 1, category: "실린더", name: "SA549-E", company: "한컴MDS",
        safeAmount: 200,
        currAmount: 200,
        lifeAmount: 200,
        memo: '',
        etc: '',
        regdate: "2018/05/14"
      },
      { id: 2, category: "모터", name: "PRD343-FDF", company: "한컴MDS",
        safeAmount: 200,
        currAmount: 50,
        lifeAmount: 200,
        memo: '',
        etc: '',
        regdate: "2018/05/14"
      },
      { id: 3, category: "센서", name: "HUMDSD-MISD", company: "한컴MDS",
        safeAmount: 200,
        currAmount: 20,
        lifeAmount: 200,
        memo: '긴급 추가 구매 요망!',
        etc: '',
        regdate: "2018/05/14"
      },
      { id: 4, category: "리노핀", name: "REFVDF003403", company: "한컴MDS",
        safeAmount: 200,
        currAmount: 130,
        lifeAmount: 200,
        memo: '',
        etc: '',
        regdate: "2018/05/14"
      },
      { id: 5, category: "솔레노이드밸브", name: "434354FEDP-FF", company: "한컴MDS",
        safeAmount: 200,
        currAmount: 260,
        lifeAmount: 200,
        memo: '',
        etc: '',
        regdate: "2018/05/14"
      },
    ];

    this.container.tabulator("setData", this.data);
    this.initalized = true;
  }

  OnDraw() {
    this.fillTable();
  }

  onRender() {
    if (!this.container) {
      return Promise.reject({});
    }

    if (!this.initalized) {
      return Promise.resolve(this.fillTable());
    }

    if (this.container && this.initalized) {
      return Promise.resolve(this.OnDraw());
    }

    return Promise.resolve({});
  }

  link(scope, elem, attrs, ctrl) {
    let t = elem.find('.thingspin-table')[0];
    t.id = this.divID;

    this.container = $(t);
    this.dataTable = this.container.tabulator({
      height: 340,
      layout: "fitColumns",
      columns: [
        {title: "등록일", field: "regdate", sorter: "date"},
        {title: "품종", field: "category", width: 150},
        {title: "스펙", field: "name", align: "left"},
        {title: "안전수량", field: "safeAmount", align: "right", width: 100},
        {title: "재고수량", field: "currAmount", align: "right", width: 100},
        {title: "", field: "currAmount", formatter: "progress"},
        {title: "교체주기", field: "lifeAmount", align: "right", width: 100},
        {title: "공급업체", field: "company"},
        {title: "메모", field: "memo", width: 200},
        {title: "비고", field: "etc"}
      ],
      rowClick: function(e, row) {
          alert("Row " + row.getData().id + " Clicked!!!!");
      },
    });
  }

  onSave() {
      // TODO ! - call database inasert/update query.

      let info = this.panel.materialItem;
      info.id = this.data.length + 1;
      info.company = info.company.name;
      info.regdate = new Date('YYYY/MM/DD').toString();

      this.data.push(info);
      this.container.tabulator("setData", this.data);
  }

}

export {
  RmsAlarmRulePanelCtrl as PanelCtrl
};
