import {PanelCtrl} from  'grafana/app/plugins/sdk';
import '../../css/example-app.css!';
import '../../services/remoteSolutionDS';

export class InsertModelPanelCtrl extends PanelCtrl {
  static templateUrl = './panel/insert_model/P002-newInsertModel.html';
  dsSrv: any;
  $scope: any;
  $rootScope: any;
  events: any;
  appInfo: any;
  editMode: any;

  constructor($rootScope, $scope, $injector, rsDsSrv) {
    super($scope, $injector);
    this.dsSrv = rsDsSrv;
    this.$rootScope = $rootScope;
    this.$scope = $scope;

    this.dsSrv.getPluginInfo("proj-rms-plugin-app").then( app => {
      this.appInfo = app;
    }).catch(err => {
      console.error(err);
    });
  }

  addInsertModel(name) {
    let selectId = this.appInfo.jsonData.datasourceID;
    let query = [
        "insert into t_model (name) values (\"" + name + "\")",
    ];

    this.dsSrv.query(selectId, query).then( result => {
      this.$scope.inspectionName = "";
      this.$rootScope.$broadcast('refresh');
    }).catch( err => {
      console.error(err);
    });
  }
}

export {
  InsertModelPanelCtrl as PanelCtrl
};

