import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';
import appEvents from 'grafana/app/core/app_events';

import '../../services/remoteSolutionDS';
import '../../services/remoteSolutionMQTT';

import $ from 'jquery';
import 'jquery-ui';
import 'jquery.tabulator/dist/js/tabulator.min';
import 'jquery.tabulator/dist/css/tabulator.min.css';

import '../../vendor/mds_customs/isteven-angular-multiselect/isteven-multi-select';
import Handsontable from 'handsontable/dist/handsontable.full';
import 'handsontable/dist/handsontable.full.css';

const appId = "proj-rms-plugin-app";
const baseCssFilename = "rms-plugins-app";
loadPluginCss({
  dark: `plugins/${appId}/css/${baseCssFilename}.dark.css`,
  light: `plugins/${appId}/css/${baseCssFilename}.light.css`
});

interface LooseObject {
    [key: string]: any;
}

export class SettingActionInAdvancePanelCtrl extends MetricsPanelCtrl {
    static template: string = require('./view.html');
    mqttdefaultOpts: object;
    defTabulatorOpts: object;

    aiaTable: any;

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
                var selectId = this.datasource.id;
                this.updateIPList(selectId);
                this.updateITList(selectId);
                this.updatePerceptionConditionList(selectId, ["select * from t_perception_condition"]);
                this.updateAction(selectId);
                this.updateModels(selectId);
                this.updateMemo();
                this.updateEnCheckFacilities();
                break;
            case "list":
                this.selectObj = null;
                this.enEtcMenu = false;
                this.refresh();
                break;
            default:
                console.error("mode is not found : ", mode);
                break;
        }
    }
    get setMode() { return this.mode; }

    constructor($scope, $injector, private $rootScope, private $element,
        private rsDsSrv, private rsMqttSrv,
        private alertSrv,) {
        super($scope, $injector);

        this.setMode = "list";
        this.cpk = {};
        this.selectObj = null;
        this.memo = [ [''] ];


        this.rsMqttSrv.connect("ws://219.251.4.236:1884");
        this.mqttdefaultOpts = {
            qos: 0,
            retain: true,
            dup: false,
        };

        this.defTabulatorOpts = {
            pagination: "local",
            paginationSize: 20,
            selectable: 1,
            responsiveLayout: true,
            layout: "fitColumns", //fit columns to width of table (optional)
            columns: [ //Define Table Columns
                {title: "검사 구분", field: "IT_NAME"},
                {title: "검사 항목", field: "IP_NAME" },
                {title: "검사 대상", field: "JSON_DATA", formatter: (cell, formatterParams) => {
                    let value = cell.getValue();
                    let retVal = '<div>'+ value.MODELS[0].ID + ' (' + value.MODELS[0].DESC + ')' + '</div>';
                    return retVal;
                }, cellClick : (e,cell) => {
                    let value = cell.getValue();
                    this.showSelectedModel(value);
                }},
                {title: "검사 감지조건", field: "JSON_DATA" ,formatter: (cell, formatterParams) => {
                    let retVal = "";
                    let value = cell.getValue();
                    if (value.CONT_FAIL !== undefined) {
                        retVal += '<div>연속불량 : '+ value.CONT_FAIL.COUNT +' 회 </div>';
                    }
                    if (value.CPK !== undefined) {
                        retVal += '<div>CPK : ' +value.CPK.LSL + ' 이상 '+ value.CPK.USL +' 미만</div>';
                    }

                    return retVal;
                }},
                {title: "검사 점검내용", field: "DESCRIPTION", formatter: (cell, formatterParams) => {
                    let value = cell.getValue();
                    let retVal = '<div>'+ '<SPAN><i class="fa fa-info-circle">' + value[0] + ', ... </i></SPAN>' + '</div>';

                    return retVal;
                }, cellClick : (e,cell) => {
                    let value = cell.getValue();
                    this.showSelectedMemo(value);
                }},
            ],
        };

        this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
        this.events.on('render', this.onRender.bind(this));
        this.events.on('panel-initialized', this.onInitialized.bind(this));
        this.events.on('data-received', this.onDataReceived.bind(this));
        this.events.on('data-snapshot-load', this.onDataReceived.bind(this));

    }

    onInitialized() {

    }

    onInitEditMode() {
    }

    onRender() {
    }

    onDataReceived(dataList) {
        let data = this.rsDsSrv.getTableObj(dataList);
        this.aiaList = [];
        data.forEach((arr) => {
            arr.forEach((item) => {
                item.JSON_DATA = JSON.parse(item.JSON_DATA);
                item.DESCRIPTION = JSON.parse(item.DESCRIPTION);
                this.aiaList.push(item);
            });
        });
        this.aiaTable.tabulator("setData", this.aiaList);

    }

    initAIATable() {
        let opts = Object.assign({ // deep copy
            rowClick: (e, row) => { //trigger an alert message when the row is clicked
                this.showEtcMenu(row.getData());
            },
        }, this.defTabulatorOpts);
        this.aiaTable = $(this.$element.find('#aiaTable')).tabulator(opts);
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
                    } else if (row.DESCRIPTION === "안함") {
                        ticked = true;
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

    /*
    updateAIA(id) {
        let query = [
            `
                select
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
        }).catch( err => {
            console.error(err);
        });
    }
    */

    changeIP(ip) {
        let selectId = this.datasource.id;
        switch (ip[0].data.IP_TYPE) {
            case 1: this.updatePerceptionConditionList(selectId, ["select * from t_perception_condition"]); break;
            case 2: this.updatePerceptionConditionList(selectId, ["select * from t_perception_condition where IDX=1"]); break;
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
        let selectId = this.datasource.id;
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
        if (it === undefined || it === null || it.length === 0) {
            this.alertSrv.set("등록 실패", "검사종류 선택이 필요합니다.", '알림', 5000);
            return;
        } else if (ip === undefined || ip === null || ip.length === 0) {
            this.alertSrv.set("등록 실패", "검사항목 선택이 필요합니다.", '알림', 5000);
            return;
        } else if (perceptionCond === undefined || perceptionCond === null || perceptionCond.length === 0) {
            this.alertSrv.set("등록 실패", "감시 조건 선택이 필요합니다.", '알림', 5000);
            return;
        } else if (selectedActions === undefined || selectedActions === null || selectedActions.length === 0) {
            this.alertSrv.set("등록 실패", "사전 조치 항목 선택이 필요합니다.", '알림', 5000);
            return;
        } else if (applyModels === undefined || applyModels === null || applyModels.length === 0) {
            this.alertSrv.set("등록 실패", "적용 모델을 선택하세요.", '알림', 5000);
            return;
        }

        var jData = this.getJsonData(it, ip, perceptionCond, selectedActions, applyModels);

        this.$rootScope.appEvent('confirm-modal', {
            title: '확인',
            text: '정말 등록 하시겠습니까?',
            icon: 'fa-save',
            yesText: '등록',
            onConfirm: () => {
                let columns = "( IT_IDX, IP_IDX, JSON_DATA, DESCRIPTION )";
                let values = "(" +
                    it[0].data.IDX + ", " +
                    ip[0].data.IDX + ", " +
                    "'" + JSON.stringify(jData) + "', " +
                    "'" + JSON.stringify(this.memo) + "'";
                values = values + " )";

                let selectId = this.datasource.id;
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
                    // this.updateAIA(selectId);
                    this.refresh();
                }).catch( err => {
                    this.alertSrv.set("등록 실패", err, '오류', 5000);
                });
            }
        });
    }

    editAIA(it, ip, perceptionCond, selectedActions, applyModels) {
        // check input data
        if (it === undefined || it === null || it.length === 0) {
            this.alertSrv.set("등록 실패", "검사종류 선택이 필요합니다.", '알림', 5000);
            return;
        } else if (ip === undefined || ip === null || ip.length === 0) {
            this.alertSrv.set("등록 실패", "검사항목 선택이 필요합니다.", '알림', 5000);
            return;
        } else if (perceptionCond === undefined || perceptionCond === null || perceptionCond.length === 0) {
            this.alertSrv.set("등록 실패", "감시 조건 선택이 필요합니다.", '알림', 5000);
            return;
        } else if (selectedActions === undefined || selectedActions === null || selectedActions.length === 0) {
            this.alertSrv.set("등록 실패", "사전 조치 항목 선택이 필요합니다.", '알림', 5000);
            return;
        } else if (applyModels === undefined || applyModels === null || applyModels.length === 0) {
            this.alertSrv.set("등록 실패", "적용 모델을 선택하세요.", '알림', 5000);
            return;
        }

        var jData = this.getJsonData(it, ip, perceptionCond, selectedActions, applyModels);

        this.$rootScope.appEvent('confirm-modal', {
            title: '확인',
            text: '정말 수정 하시겠습니까?',
            icon: 'fa-save',
            yesText: '수정',
            onConfirm: () => {
                // insert data
                let updateData = "IT_IDX = " + it[0].data.IDX
                    + ", IP_IDX=" + ip[0].data.IDX
                    + ", JSON_DATA= '" + JSON.stringify(jData) + "'"
                    + ", DESCRIPTION= '" + JSON.stringify(this.memo) + "'";

                let selectId = this.datasource.id;
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
                    // this.updateAIA(selectId);
                    this.refresh();
                });
            }
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
                let selectId = this.datasource.id;
                let query = [];
                query.push("delete from t_action_in_advance where IT_IDX = " + item.IT_IDX + " and IP_IDX = " + item.IP_IDX);
                this.rsDsSrv.query(selectId, query).then( result => {
                    let topic = 'ACTINADV/' + item.ID;
                    this.rsMqttSrv.publishMessage(topic, '', this.mqttdefaultOpts);

                    this.setMode = 'list';
                    // this.updateAIA(selectId);
                    this.refresh();
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
        this.$scope.$apply();
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
            templateHtml: require('./modelModal.html'),
            model: this,
        });
    }
    showSelectedMemo(obj) {
        this.showObj = obj;
        appEvents.emit('show-modal', {
            templateHtml: require('./memoModal.html'),
            model: this,
        });
    }
}

export {
    SettingActionInAdvancePanelCtrl as PanelCtrl
};
