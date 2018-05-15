import 'handsontable/dist/handsontable.full.css';
import appEvents from 'grafana/app/core/app_events';
import Handsontable from 'handsontable/dist/handsontable.full';
var modelModalHtml = require('./modelModal.html');
var memoModalHtml = require('./memoModal.html');
interface LooseObject {
    [key: string]: any;
}

export class SettingActionInAdvancePageCtrl {
    static template: string = require('./actionInAdvance.html');
    selectId: any;
    appModel: any;
    mqttdefaultOpts: object;

    cpk: any;
    memo: string[][];
    enCPK: boolean;
    selectObj: any;
    enEtcMenu: boolean;
    continuousFailure: number;
    enCheckFacilities: boolean;
    enContinuousFailure: boolean;

    aiaList: object[];
    IP_LIST: object[];
    IT_LIST: object[];
    viewList: object[];
    modelList: any[];
    actionList: any[];
    description: string[];
    PerceptionConditions: any[];

    hot: any;
    showObj: object;

    mode: string;
    set setMode(mode) {
        this.mode = mode;
        switch (mode) {
            case "new":
                this.memo = [ [''] ];
                this.selectObj = null;
                this.continuousFailure = undefined;
                this.enContinuousFailure = false;
                this.enCPK = false;
            case "edit":
                this.updateIPList(this.selectId);
                this.updateITList(this.selectId);
                this.updatePerceptionConditionList(this.selectId, ["select * from t_perception_condition"]);
                this.updateAction(this.selectId);
                this.updateModels(this.selectId);
                this.updateMemo();
                this.updateEnCheckFacilities();
                break;
            case "list":
                this.selectObj = null;
                this.enEtcMenu = false;
                break;
            default:
                console.error("mode is not found : ", mode);
                break;
        }
    }
    get setMode() { return this.mode; }

    constructor(private $q, private $rootScope, private $location, private $element,
        private rsDsSrv, private rsMqttSrv,
        private alertSrv,) {
        this.setMode = "list";
        this.cpk = {};
        this.selectObj = null;
        this.memo = [ [''] ];


        this.selectId = this.appModel.jsonData.datasourceID;
        if (this.selectId === undefined) {
            this.$location.path('/plugins/proj-rms-plugin-app/edit');
        } else {
            this.updateAIA(this.selectId);
        }

        this.rsMqttSrv.connect("ws://219.251.4.236:1884");
        this.mqttdefaultOpts = {
            qos: 0,
            retain: true,
            dup: false,
        };
    }

    memoInit() {
        this.hot = new Handsontable(this.$element.find("#rs-memo-input")[0], {
            rowHeaders: true,
            colHeaders: ["점검 내용"],
            filters: true,
            dropdownMenu: true,
            manualColumnResize: true,
            minSpareRows: 1,
        });
        this.hot.loadData(this.memo);
    }

    private updateMemo() {
        if ( this.selectObj !== null ) {
            this.memo = this.selectObj.DESCRIPTION;
        }
    }
    private updateEnCheckFacilities() {
        if ( this.selectObj !== null ) {
            this.enCheckFacilities = this.selectObj.JSON_DATA.enCheckFacilities;
        }
    }

    updateITList(id) {
        let query = [ "select * from t_inspection_type"];
        this.rsDsSrv.query(id, query).then( result => {
            let data = this.rsDsSrv.getTableObj(result);
            if (data.length !== 0) {
                let list = [];
                data[0].forEach( row => {
                    var ticked = false;
                    if ( this.selectObj !== null ) {
                        var selectedIT_IDX = this.selectObj.IT_IDX;
                        if (selectedIT_IDX === row.IDX) { ticked = true; }
                    }

                    list.push({ name: row.NAME, ticked: ticked, data: row, });
                });
                this.IT_LIST = list;
            }
        }).catch( err => {
            console.error(err);
        });
    }

    updateIPList(id) {
        let query = [ "select * from t_inspection_property"];
        this.rsDsSrv.query(id, query).then( result => {
            let data = this.rsDsSrv.getTableObj(result);
            if (data.length !== 0) {
                let list = [];
                data[0].forEach( row => {
                    var ticked = false;
                    if ( this.selectObj !== null ) {
                        var selectedIP_IDX = this.selectObj.IP_IDX;
                        if (selectedIP_IDX === row.IDX) { ticked = true; }
                    }

                    list.push({ name: row.NAME, ticked: ticked, data: row, });
                });
                this.IP_LIST = list;
            }

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
                    var ticked = false;
                    if ( this.selectObj !== null ) {
                        if (this.selectObj.JSON_DATA.CONT_FAIL !== undefined &&  row.IDX === 1)  {
                            this.enContinuousFailure = true;
                            this.continuousFailure = this.selectObj.JSON_DATA.CONT_FAIL.COUNT;
                            ticked = true;
                        } else if (this.selectObj.JSON_DATA.CPK !== undefined &&  row.IDX === 2)  {
                            var cpkObj = this.selectObj.JSON_DATA.CPK;
                            this.enCPK = true;
                            this.cpk.min = cpkObj.LSL;
                            this.cpk.max = cpkObj.USL;
                            ticked = true;
                        }
                    }
                    list.push({ name: row.NAME, ticked: ticked, data: row, });
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
                    var ticked = false;
                    if ( this.selectObj !== null ) {
                        if (this.selectObj.JSON_DATA.CONT_FAIL !== undefined && row.DESCRIPTION === this.selectObj.JSON_DATA.CONT_FAIL.ACTION)  {
                            ticked = true;
                        } else if (this.selectObj.JSON_DATA.CPK !== undefined &&  row.DESCRIPTION === this.selectObj.JSON_DATA.CPK.ACTION)  {
                            ticked = true;
                        }
                    }
                    list.push({ name: row.DESCRIPTION, maker: "(" + row.NAME + ")", ticked: ticked, data: row, });
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
                    var ticked = false;
                    if ( this.selectObj !== null ) {
                        var models = this.selectObj.JSON_DATA.MODELS;
                        models.forEach(selRow => {
                            if (selRow.ID === row.MODEL_ID) { ticked = true; }
                        });
                    }

                    list.push({ name: row.MODEL_ID, maker: "(" + row.DESCRIPTION + ")", ticked: ticked, data: row, });
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
                    item.DESCRIPTION = JSON.parse(item.DESCRIPTION);
                    this.aiaList.push(item);
                });
            });
        }).catch( err => {
            console.error(err);
        });
    }
    changeIP(ip) {
        switch (ip[0].data.IP_TYPE) {
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
            INSPPROP_ID: ip[0].data.IDX,
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
        let columns = "( IT_IDX, IP_IDX, JSON_DATA, DESCRIPTION )";
        let values = "(" +
            it[0].data.IDX + ", " +
            ip[0].data.IDX + ", " +
            "'" + JSON.stringify(jData) + "', " +
            "'" + JSON.stringify(this.memo) + "'";
        values = values + " )";

        let selectId = this.appModel.jsonData.datasourceID;
        let query = [
            "insert into t_action_in_advance " + columns + " values " + values,
        ];
        this.rsDsSrv.query(selectId, query).then( result => {
            this.getAIA(it[0].data.IDX, ip[0].data.IDX).then( (res) => {
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
    editAIA(it, ip, perceptionCond, selectedActions, applyModels) {
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
        let updateData = "IT_IDX = " + it[0].data.IDX
            + ", IP_IDX=" + ip[0].data.IDX
            + ", JSON_DATA= '" + JSON.stringify(jData) + "'"
            + ", DESCRIPTION= '" + JSON.stringify(this.memo) + "'";

        let selectId = this.appModel.jsonData.datasourceID;
        let query = [
            "update t_action_in_advance set " + updateData + " where ID=" + this.selectObj.ID,
        ];
        this.rsDsSrv.query(selectId, query).then( result => {
            this.getAIA(it[0].data.IDX, ip[0].data.IDX).then( (res) => {
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

    showSelectedModal(obj, htmlfileName) {
        this.showObj = obj;
        appEvents.emit('show-modal', {
            templateHtml: require(htmlfileName),
            model: this,
        });
    }
    showSelectedModel(obj) {
        this.showObj = obj;
        appEvents.emit('show-modal', {
            templateHtml: modelModalHtml,
            model: this,
        });
    }
    showSelectedMemo(obj) {
        this.showObj = obj;
        appEvents.emit('show-modal', {
            templateHtml: memoModalHtml,
            model: this,
        });
    }
}
