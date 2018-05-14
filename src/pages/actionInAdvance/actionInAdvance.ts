var template = require("./actionInAdvance.html");

export class SettingActionInAdvancePageCtrl {
    static template = template;
    appModel: any;
    aiaList: any[];
    mode: any;
    selectObj: any;
    isOrgEditor: boolean;
    IP_LIST: any[];

    constructor(private $location, private rsDsSrv) {
        this.mode = "list";

        let selectId = this.appModel.jsonData.datasourceID;

        if (selectId === undefined) {
            this.$location.path('/plugins/proj-rms-plugin-app/edit');
        } else {
            this.updateIPList(selectId);
        }
    }

    updateIPList(id) {
        let query = [ "select * from t_inspection_property"];
        this.rsDsSrv.query(id, query).then( result => {
            let data = this.rsDsSrv.getTableObj(result);
            this.IP_LIST = data[0];
            console.log(data);
        }).catch( err => {
            console.error(err);
        });
    }

    setMode(mode) {
        this.mode = mode;
    }
}
