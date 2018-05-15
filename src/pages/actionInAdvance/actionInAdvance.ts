import appEvents from 'grafana/app/core/app_events';
var template = require('./actionInAdvance.html');
var modelModalHtml = require('./modelModal.html');

interface LooseObject {
    [key: string]: any;
}

export class SettingActionInAdvancePageCtrl {
    static template = template;
    baseUrl: string;
    pluginId: any;
    selectId: any;
    appModel: any;
    ace: any;
    mqttdefaultOpts: object;

    continuousFailure: number;
    cpk: any;
    memo: string[];
    enCPK: boolean;
    enContinuousFailure: boolean;
    enCheckFacilities: boolean;
    selectObj: any;
    enEtcMenu: boolean;

    aiaList: object[];
    IP_LIST: object[];
    IT_LIST: object[];
    PerceptionConditions: any[];
    actionList: any[];
    modelList: any[];
    viewList: object[];

    showObj: object;

    mode: string;
    set setMode(mode) {
        this.mode = mode;
        switch (mode) {
            case "new":
            case "edit":
                this.updateIPList(this.selectId);
                this.updateITList(this.selectId);
                this.updatePerceptionConditionList(this.selectId, ["select * from t_perception_condition"]);
                this.updateAction(this.selectId);
                this.updateModels(this.selectId);
            break;
        }
    }
    get setMode() { return this.mode; }

    constructor(private $q, private $rootScope, private $location, private rsDsSrv, private rsMqttSrv, private alertSrv) {
        this.setMode = "list";
        this.cpk = {};
        this.memo = [];
        this.memo.push("sample");
        this.pluginId = this.appModel.id;
        this.baseUrl = this.appModel.baseUrl;

        this.selectId = this.appModel.jsonData.datasourceID;
        if (this.selectId === undefined) {
            this.$location.path('/plugins/proj-rms-plugin-app/edit');
        } else {
            this.updateAIA(this.selectId);
        }

        // param : host:string, topic:string, recvcallback:function
        this.rsMqttSrv.connect("ws://219.251.4.236:1884");
        this.mqttdefaultOpts = {
            qos: 0,
            retain: true,
            dup: false,
        };
    }

    updateITList(id) {
        let query = [ "select * from t_inspection_type"];
        this.rsDsSrv.query(id, query).then( result => {
            let data = this.rsDsSrv.getTableObj(result);
            this.IT_LIST = data[0];
            // console.log(data);
        }).catch( err => {
            console.error(err);
        });
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

    updateAIA(id) {
        let query = [
            `select
                t_action_in_advance.ID,
                t_action_in_advance.IP_IDX,
                t_inspection_property.NAME as IP_NAME,
                t_action_in_advance.IT_IDX,
                t_inspection_type.NAME as IT_NAME,
                t_action_in_advance.JSON_DATA,
                t_action_in_advance.DESCRIPTION
            from ((t_action_in_advance
                INNER join t_inspection_property on t_action_in_advance.IP_IDX = t_inspection_property.IDX)
                INNER JOIN t_inspection_type on t_action_in_advance.IT_IDX = t_inspection_type.IDX);
            `,
        ];
        this.rsDsSrv.query(id, query).then( result => {
            let data = this.rsDsSrv.getTableObj(result);
            this.aiaList = [];
            data.forEach((arr) => {
                arr.forEach((item) => {
                    item.JSON_DATA = JSON.parse(item.JSON_DATA);
                    this.aiaList.push(item);
                });
            });
            console.log(this.aiaList);
        }).catch( err => {
            console.error(err);
        });
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

    private getJsonData(it, ip, perceptionCond, selectedActions, applyModels) {
        var jData: LooseObject = {
            INSPPROP_ID: ip.IDX,
            enCheckFacilities: (this.enCheckFacilities === undefined || this.enCheckFacilities === null) ?
                false : this.enCheckFacilities,
        };

        perceptionCond.forEach( (item) => {
            switch (item.name) {
                case "연속불량":
                    jData.CONT_FAIL = {
                        COUNT : this.continuousFailure,
                        ACTION: selectedActions[0].name,
                    };
                    break;
                case "CPK":
                    jData.CPK = {
                        USL: this.cpk.max,
                        LSL: this.cpk.min,
                        ACTION: selectedActions[0].name,
                    };
                    break;
            }
        });

        jData.MODELS = [];
        applyModels.forEach((item) => {
            jData.MODELS.push({
                ID: item.data.MODEL_ID,
                DESC: item.data.DESCRIPTION,
            });
        });

        return jData;
    }

    getAIA(IT_IDX: number, IP_IDX: number) {
        let deferred = this.$q.defer();
        let selectId = this.appModel.jsonData.datasourceID;
        let query: string[] = [
            "select * from t_action_in_advance where IP_IDX = " + IP_IDX + " and IT_IDX = " + IT_IDX,
        ];

        this.rsDsSrv.query(selectId, query).then( result => {
            deferred.resolve(result);
        }).catch( err => {
            deferred.reject(err);
        });

        return deferred.promise;
    }

    addAIA(it, ip, perceptionCond, selectedActions, applyModels) {
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

        var jData = this.getJsonData(it, ip, perceptionCond, selectedActions, applyModels);

        // insert data
        let columns = "( IT_IDX, IP_IDX, JSON_DATA )";
        let values = "(" +
            it.IDX + ", " +
            ip.IDX + ", " +
            "'" + JSON.stringify(jData) + "'";
        values = values + " )";

        let selectId = this.appModel.jsonData.datasourceID;
        let query = [
            "insert into t_action_in_advance " + columns + " values " + values,
        ];
        this.rsDsSrv.query(selectId, query).then( result => {
            this.getAIA(it.IDX, ip.IDX).then( (res) => {
                let data = this.rsDsSrv.getTableObj(res);
                if (data.length === 1 && data[0].length === 1) {
                    let topic = 'ACTINADV/' + data[0][0].ID;
                    this.rsMqttSrv.publishMessage(topic, JSON.stringify(jData), this.mqttdefaultOpts);
                }
            });

            this.setMode = 'list';
            this.updateAIA(selectId);
        });
    }
    deleteAIA() {
        let item = this.selectObj;
        this.$rootScope.appEvent('confirm-modal', {
            title: '삭제',
            text: '정말로 지우시겠습니까?',
            icon: 'fa-trash',
            yesText: '삭제',
            onConfirm: () => {
                let selectId = this.appModel.jsonData.datasourceID;
                let query = [];
                query.push("delete from t_action_in_advance where IT_IDX = " + item.IT_IDX + " and IP_IDX = " + item.IP_IDX);
                this.rsDsSrv.query(selectId, query).then( result => {
                    let topic = 'ACTINADV/' + item.ID;
                    this.rsMqttSrv.publishMessage(topic, '', this.mqttdefaultOpts);

                    this.setMode = 'list';
                    this.updateAIA(selectId);
                    this.alertSrv.set("삭제되었습니다.", '', 'success', 3000);
                }).catch( err => {
                    this.alertSrv.set("삭제 실패", err, 'error', 5000);
                    console.error(err);
                });
            }
        });
    }

    showEtcMenu(obj) {
        this.selectObj = obj;
        this.enEtcMenu = true;
    }

    showSelectedModel(obj) {
        this.showObj = obj;
        appEvents.emit('show-modal', {
            templateHtml: modelModalHtml,
            model: this,
        });
    }
}
