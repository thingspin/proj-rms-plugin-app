var template = require('./actionInAdvance.html');
export class SettingActionInAdvancePageCtrl {
    static template = template;
    baseUrl: string;
    pluginId: any;
    selectId: any;
    appModel: any;
    ace: any;

    mode: string;
    continuousFailure: number;
    cpk: any;
    memo: string[];
    enCPK: boolean;
    enContinuousFailure: boolean;
    enCheckFacilities: boolean;

    aiaList: any[];
    IP_LIST: any[];
    PerceptionConditions: any[];
    actionList: any[];
    modelList: any[];

    constructor(private $location, private rsDsSrv) {
        this.mode = "list";
        this.cpk = {};
        this.memo = [];
        this.memo.push("sample");
        this.pluginId = this.appModel.id;
        this.baseUrl = this.appModel.baseUrl;

        this.selectId = this.appModel.jsonData.datasourceID;
        if (this.selectId === undefined) {
            this.$location.path('/plugins/proj-rms-plugin-app/edit');
        } else {
            this.updateIPList(this.selectId);
            this.updatePerceptionConditionList(this.selectId, ["select * from t_perception_condition"]);
            this.updateAction(this.selectId);
            this.updateModels(this.selectId);
        }
    }

    setMode(mode) {
        this.mode = mode;
    }

    updateIPList(id) {
        let query = [ "select * from t_inspection_property"];
        this.rsDsSrv.query(id, query).then( result => {
            let data = this.rsDsSrv.getTableObj(result);
            this.IP_LIST = data[0];
            // console.log(data);
        }).catch( err => {
            console.error(err);
        });
    }

    updatePerceptionConditionList(id, query) {
        this.rsDsSrv.query(id, query).then( result => {
            let data = this.rsDsSrv.getTableObj(result);
            if (data.length !== 0) {
                let list = [];
                data[0].forEach( row => {
                    list.push({
                        name: row.NAME,
                        // maker: "(" + row.DESCRIPTION + ")",
                        ticked: false,
                        data: row,
                    });
                });
                this.PerceptionConditions = list;
            }
        }).catch( err => {
            console.error(err);
        });
    }

    updateAction(id) {
        let query = [ "select * from t_action"];
        this.rsDsSrv.query(id, query).then( result => {
            let data = this.rsDsSrv.getTableObj(result);
            if (data.length !== 0) {
                let list = [];
                data[0].forEach( row => {
                    list.push({
                        name: row.DESCRIPTION,
                        maker: "(" + row.NAME + ")",
                        ticked: false,
                        data: row,
                    });
                });
                this.actionList = list;
            }
        }).catch( err => {
            console.error(err);
        });
    }

    updateModels(id) {
        let query = [ "select * from t_model"];
        this.rsDsSrv.query(id, query).then( result => {
            let data = this.rsDsSrv.getTableObj(result);
            if (data.length !== 0) {
                let list = [];
                data[0].forEach( row => {
                    list.push({
                        name: row.MODEL_ID,
                        maker: "(" + row.DESCRIPTION + ")",
                        ticked: false,
                        data: row,
                    });
                });
                this.modelList = list;
            }
        }).catch( err => {
            console.error(err);
        });
    }

    addAIA(ip, perceptionCond, selectedActions, applyModels) {
        // check input data
        if (ip === undefined || ip === null) {
            return;
        } else if (perceptionCond === undefined || perceptionCond === null) {
            return;
        } else if (selectedActions === undefined || selectedActions === null || selectedActions.length === 0) {
            return;
        } else if (applyModels === undefined || applyModels === null || applyModels.length === 0) {
            return;
        }

        let pcOpt;
        switch (perceptionCond.IDX) {
            case 1: // 연속 불량
            pcOpt = this.continuousFailure;break;
            case 2: // CPK
            pcOpt = this.cpk;break;
        }
        // insert data
        console.log(ip, perceptionCond, selectedActions, applyModels, pcOpt);
        let columns = "( NAME";
        let values = "('" + name + "'";
        columns = columns + ")";
        values = values + ")";

        // let query = [
        //     "insert into t_action_in_advance " + columns + " values " + values,
        // ];
    }

    changeIP(ip) {
        switch (ip.IP_TYPE) {
            case 1: this.updatePerceptionConditionList(this.selectId, ["select * from t_perception_condition"]); break;
            case 2: this.updatePerceptionConditionList(this.selectId, ["select * from t_perception_condition where IDX=1"]); break;
        }
        this.continuousFailure = null;
        this.cpk = {};
        this.enContinuousFailure = this.enCPK = false;
    }

    changedPC(pc) {
        this.enContinuousFailure = this.enCPK = false;
        this.continuousFailure = null;
        this.cpk = {};
    }

    changedPerceptionCond(pc) {
        this.enContinuousFailure = this.enCPK = false;
        pc.forEach(item => {
            switch (item.name) {
                case "연속불량": this.enContinuousFailure = true; break;
                case "CPK": this.enCPK = true; break;
            }
        });
    }
}
