import {PanelCtrl} from  'grafana/app/plugins/sdk';
import '../../css/example-app.css!';
import '../../services/remoteSolutionDS';

class InsertFaultyPanelCtrl extends PanelCtrl {
  static templateUrl = './panel/insert_faulty/P001-newInsertFaulty.html';
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

  addInspectionItem(name, field) {
    let selectId = this.appInfo.jsonData.datasourceID;
    let query = [
        "insert into t_faulty (faulty_name, faulty_field values ('" + name + "', " + "'" + field + "'" + ");",
    ];
    console.log(selectId + " " + query)

    this.dsSrv.query(selectId, query).then( result => {
      this.$scope.inspectionName = "";
      this.$rootScope.$broadcast('refresh');
    }).catch( err => {
      console.error(err);
    });
  }
}

export {
  InsertFaultyPanelCtrl as PanelCtrl
};

