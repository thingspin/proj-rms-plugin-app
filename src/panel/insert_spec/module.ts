import {PanelCtrl} from  'grafana/app/plugins/sdk';
import '../../css/example-app.css!';
import '../../services/remoteSolutionDS';

export class InsertSpecPanelCtrl extends PanelCtrl {
  static templateUrl = './panel/insert_spec/P003-newInsertSpec.html';
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
    this.$scope.selectOption = [];
    this.$scope.optSelected;

    this.dsSrv.getPluginInfo("proj-rms-plugin-app").then( app => {
      this.appInfo = app;
      let selectId = this.appInfo.jsonData.datasourceID;
      if (selectId === undefined) {
          // $location.path('/plugins/proj-rms-plugin-app/edit');
          console.log("dataSourceID is undefined")
      } else {
        console.log(selectId);
        this.dataLoadingforModel(selectId);
      }
    }).catch(err => {
      console.error(err);
    });

    $scope.modelChanged = function(item) {
      // console.log(this.$scope.selectOption);
      console.log(item);
    }
  }

  dataLoadingforModel(selectId) {
    let query = ["select * from t_model;"];
    console.log(query);
    this.dsSrv.query(selectId, query).then (result => {
      console.log(result[0].rows);
      
      for (var count = 0 ; count < result[0].rows.length ; count++) {
        var item = result[0].rows[count];
        this.$scope.selectOption.push({key:item[0], value:item[1]});
      }
      console.log(this.$scope.selectOption);
    }).catch (err => {
      console.error(err);
    })
  }
}

export {
  InsertSpecPanelCtrl as PanelCtrl
};

