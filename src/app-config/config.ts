'use strict';

import _ from 'lodash';
var template = require("./config.html");
import {PanelCtrl} from 'grafana/app/plugins/sdk';
import appEvents from 'grafana/app/core/app_events';

class AppConfigCtrl {
  static template = template;

  dsList: any[];
  appModel: any;
  pageReady: any;
  isOrgEditor: any;
  appEditCtrl: any;
  enabled: boolean;

  constructor(private $scope, private $injector, private $q, private $location, private rsDsSrv, private backendSrv) {

    this.enabled = false;
    this.setDatasourceList(0);
    this.appEditCtrl.setPreUpdateHook(this.preUpdate.bind(this));
    this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this));
  }

  setDatasourceList(p: number) {
    this.rsDsSrv.getDatasources()
      .then( result => {
        this.dsList = result;
        this.pageReady = true;
    }).catch( err => {
      console.error(err);
    });
  }

  preUpdate() {
    return this.$q.resolve();
  }

  postUpdate() {

    if (!this.appModel.enabled) {
      return this.$q.resolve();
    }
    return this.appEditCtrl.importDashboards().then(() => {
      this.enabled = true;
      return {
        url: "plugins/proj-rms-plugin-app/page/beobinbyeol-saengsanhyeonhwang",
        message: "App enabled!"
      };
    });
  }

  confirmDelete(id) {
    this.backendSrv.delete('/api/datasources/' + id).then(() => {
      this.setDatasourceList(0);
    });
  }

  deleteDs(ds) {
    appEvents.emit('confirm-modal', {
      title: '데이터 소스 제거',
      text: '이 데이터 소스를 제거하시겠습니까?',
      yesText: "Delete",
      icon: "fa-trash",
      onConfirm: () => {
        this.confirmDelete(ds.id);
      }
    });
  }

  dsInfo(ds) {
    this.$location.path("/datasources/edit/" + ds.id);
  }
};

// AppConfigCtrl.templateURL = './pages/config.html';

export {
  AppConfigCtrl
};
