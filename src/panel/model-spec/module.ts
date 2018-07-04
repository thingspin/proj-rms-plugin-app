import { MetricsPanelCtrl, loadPluginCss } from 'grafana/app/plugins/sdk';

// import _ from 'lodash';
import $ from 'jquery';
import 'jquery-ui';
import 'jquery.tabulator/dist/js/tabulator.min';
import 'jquery.tabulator/dist/css/tabulator.min.css';
// import * as Snap from "snapsvg/dist/snap.svg-min.js";
import '../../vendor/mds_customs/isteven-angular-multiselect/isteven-multi-select';

import '../../services/remoteSolutionDS';
import '../../services/remoteSolutionMQTT';


const appId = "proj-rms-plugin-app";
const baseCssFilename = "rms-plugins-app";
loadPluginCss({
    dark: `plugins/${appId}/css/${baseCssFilename}.dark.css`,
    light: `plugins/${appId}/css/${baseCssFilename}.light.css`
});

class RmsModelSpecMgmtPanelCtrl extends MetricsPanelCtrl {
    static template = require(`./partial/template.html`);
    defTabulatorOpts: object;
    mqttdefaultOpts: object;
    divID: String = "rms-app-model-spec-mgmt";
    baseTopic: String = "MODELSPEC/";

    mode: string;
    set setMode(mode) {
        this.mode = mode;
        switch (mode) {
            case "new":
                this.inputModelSpecs = [{
                    min: 0, max: 0, lsl: 0, usl: 0,
                }];
            case "edit":
                const selectId = this.datasource.id;
                this.updateModels(selectId);
                this.updateIPList(selectId);
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

    private _container: any;
    set container(container: any) { this._container = container; }
    get container() { return this._container; }

    private _table: any;
    set table(table: any) { this._table = table; }
    get table() { return this._table; }

    private _enEtcMenu: Boolean;
    set enEtcMenu(enEtcMenu: Boolean) { this._enEtcMenu = enEtcMenu; }
    get enEtcMenu() { return this._enEtcMenu; }

    private _selectObj: any;
    set selectObj(selectObj: any) { this._selectObj = selectObj; }
    get selectObj() { return this._selectObj;}

    private _modelSpecList: any;
    set modelSpecList(modelSpecList: any) { this._modelSpecList = modelSpecList; }
    get modelSpecList() { return this._modelSpecList; }

    private _oriIpLIST: any;
    set oriIpList(oriIpList: any) { this._oriIpLIST = oriIpList; }
    get oriIpList() { return this._oriIpLIST; }

    private _modelList: any;
    set modelList(modelList: any) { this._modelList = modelList; }
    get modelList() { return this._modelList; }

    private _inputModelSpecs: any;
    set inputModelSpecs(input_modelSpecs: any) { this._inputModelSpecs = input_modelSpecs; }
    get inputModelSpecs() { return this._inputModelSpecs; }
    private _inputIpList: any = [{}];
    set inputIpList(inputIpList: any) { this._inputIpList = inputIpList; }
    get inputIpList() { return this._inputIpList; }

    constructor($scope, $injector, private $element, private $rootScope, private $location,
        private alertSrv,
        private rsMqttSrv, private rsDsSrv, ) {
        super($scope, $injector);

        this.setMode = "list";
        this.selectObj = null;

        this.mqttdefaultOpts = {
            qos: 0,
            retain: true,
            dup: false,
        };
        this.defTabulatorOpts = {
            pagination: "local",
            paginationSize: 20,
            selectable: 1,
            fitColumns: true,
            responsiveLayout: true,
            layout: "fitColumns", //fit columns to width of table (optional)
            columns: [ //Define Table Columns
                { title: "모델명", field: "ID" },
                { title: "검사 항목 스펙", field: "IP_JSON", formatter: (cell, formatterParams) => {
                    let retStr = "";
                    const arr = cell.getValue();
                    arr.forEach((obj, idx) => {
                        const {ip: [ip]} = obj;
                        retStr += `${ip.name}${idx !== (arr.length-1) ? ", " : ""}`;
                    });
                    return retStr;
                }},
            ],
        };

        this.events.on('panel-initialized', this.onInitialized.bind(this));
        this.events.on('data-received', this.onDataReceived.bind(this));
    }

    showEtcMenu(obj) {
        this.selectObj = obj;
        this.enEtcMenu = true;
        this.$scope.$apply();
    }

    initModelSpecTable() {
        const $targetDiv = $(this.container.find("#modelSpec"));
        this.table = $targetDiv.tabulator(Object.assign({ // deep copy
            rowClick: (e, row) => { //trigger an alert message when the row is clicked
                const rows = this.table.tabulator("getSelectedData");
                if ( rows.length === 0) {
                    this.enEtcMenu = false;
                    this.$scope.$apply();
                } else {
                    this.showEtcMenu(row.getData());
                }
            },
        }, this.defTabulatorOpts));
    }

    onInitialized() {
        const node: any = this.$element.find("ng-transclude > div");
        if (node.length === 0) {
            console.error(`cannot find element id '#${this.divID}'`);
            return;
        }
        this.container = node;
        const urlPath = "/";
        const baseUrl = `ws://${this.$location.host()}:${this.$location.port()}/api/plugin-proxy/${appId}`;
        this.rsMqttSrv.connect(`${baseUrl}${urlPath}`);
    }

    onDataReceived(dataList) {
        const data = this.rsDsSrv.getTableObj(dataList);
        this.modelSpecList = [];
        data.forEach((arr) => {
            arr.forEach((item) => {
                item.IP_JSON = JSON.parse(item.IP_JSON);
                this.modelSpecList.push(item);
            });
        });
        if (this.table) {
            this.table.tabulator("setData", this.modelSpecList);
        } else {
            this.alertSrv.set("UI Error", 'Tabulator가 생성되어 있지 않습니다.', 'error', 1000);
        }

    }

    updateModelSpecList(id) {
        const query = [ "select * from t_model_spec"];
        this.rsDsSrv.query(id, query).then( result => {
            const data = this.rsDsSrv.getTableObj(result);
            if (data.length > 0) {
                const list = [];
                const d = data[0];
                d.forEach( row => {
                    const ticked = this.selectObj && this.selectObj.IT_IDX === row.IDX ? true : false;
                    list.push({ name: row.NAME, ticked: ticked, data: row, });
                });
                this.modelSpecList = list;
            }
        }).catch( err => {
            console.error(err);
        });
    }

    updateIPList(id) {
        this.rsDsSrv.query(id, [ "select * from t_inspection_property"]).then( result => {
            let data = this.rsDsSrv.getTableObj(result);
            if (data.length !== 0) {
                let list = [];
                const [d] = data;
                d.slice(1, d.length).forEach( row => {
                    list.push({ name: row.NAME, ticked: false, data: row, });
                });
                this.oriIpList = list;


                switch (this.mode) {
                    case "new":
                        const ipList = JSON.parse(JSON.stringify(this.oriIpList));
                        this.inputIpList = [ ipList ];
                    break;
                    case "edit":
                        this.inputModelSpecs = [];
                        this.inputIpList = [];
                        this.selectObj.IP_JSON.forEach(({ip: [ip], min, max, lsl, usl}, mainIdx) => {
                            const ipList = JSON.parse(JSON.stringify(this.oriIpList));
                            ipList.forEach(({name: name}, idx) => {
                                ipList[idx].ticked = name === ip.name ? true : false;
                            });
                            if (!this.inputModelSpecs[mainIdx]) {
                                this.inputModelSpecs.push({
                                    min, max, lsl, usl
                                });
                            } else {
                                this.inputModelSpecs[mainIdx].min = min;
                                this.inputModelSpecs[mainIdx].max = max;
                                this.inputModelSpecs[mainIdx].lsl = lsl;
                                this.inputModelSpecs[mainIdx].usl = usl;
                            }
                            this.inputIpList.push(ipList);
                        });
                    break;
                    default:
                        console.error(`${this.mode} 모드를 찾을 수 없습니다.`);
                }
            }

        }).catch( err => {
            console.error(err);
        });
    }

    updateModels(id) {
        this.rsDsSrv.query(id, [ "select * from t_model"]).then( result => {
            const data = this.rsDsSrv.getTableObj(result);
            if (data.length !== 0) {
                const list = [];
                const [d] = data;
                d.slice(1, d.length).forEach( row => {
                    let ticked = (this.mode ==="edit" && this.selectObj && this.selectObj.ID === row.MODEL_ID) ? true : false;
                    list.push({ name: row.MODEL_ID, maker: "(" + row.DESCRIPTION + ")", ticked: ticked, data: row, });
                });

                this.modelList = list;
            }
        }).catch( err => {
            console.error(err);
        });
    }
    addSpec() {
        this.inputModelSpecs.push({
            min: 0, max: 0, lsl: 0, usl: 0,
        });
        const ipList = JSON.parse(JSON.stringify(this.oriIpList));
        this.inputIpList.push(ipList);
    }

    addModelSpec() {
        if (arguments[0].length === 0) {
            this.alertSrv.set("등록 실패", `모델을 선택해 주세요.`, '알림', 5000);
            return;
        }
        for (let idx in this.inputModelSpecs) {
            const {ip: ip} = this.inputModelSpecs[idx];
            if (ip.length === 0) {
                this.alertSrv.set("등록 실패", `${idx+1} 번째 검사 항목을 선택해 주세요.`, '알림', 5000);
                return;
            }
        }
        const [
            { data: {
                MODEL_ID: modelId
            }
        } ] = arguments[0];

        this.$rootScope.appEvent('confirm-modal', {
            title: '확인',
            text: '정말 등록 하시겠습니까?',
            icon: 'fa-save',
            yesText: '등록',
            onConfirm: () => {
                this.insertModelSpecTable(modelId).then( result => {
                    const topic = `${this.baseTopic}${modelId}`;
                    const publishData = this.inputModelSpecs.map( ({ ip: [{data: ip}], min, max, lsl, usl}) => {
                        return { ip: ip, min, max, lsl, usl, iid: ip.IDX };
                    });
                    // console.log(topic, publishData);
                    this.rsMqttSrv.publishMessage(topic, JSON.stringify(publishData), this.mqttdefaultOpts);
                    this.setMode = 'list';
                }).catch(err => {
                    this.alertSrv.set("등록 실패", err, '알림', 5000);
                    console.error(err);
                });
            }
        });
    }

    insertModelSpecTable(modelId) {
        return new Promise((resolve, reject) => {
            const query = [`insert into t_model_spec (ID, IP_JSON)
                values ('${modelId}', '${JSON.stringify(this.inputModelSpecs)}')`
            ];
            this.rsDsSrv.query(this.datasource.id, query).then( result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    deleteModelSpecItem() {
        this.$rootScope.appEvent('confirm-modal', {
            title: '삭제',
            text: '정말로 지우시겠습니까?',
            icon: 'fa-trash',
            yesText: '삭제',
            onConfirm: () => {
                const {ID: targetId} = this.selectObj;
                this.deleteModelSpecTable(targetId).then( result => {
                    this.rsMqttSrv.publishMessage(`${this.baseTopic}${targetId}`, '', this.mqttdefaultOpts);
                    this.setMode = 'list';
                    this.alertSrv.set("삭제되었습니다.", '', 'success', 3000);
                }).catch(err => {
                    this.alertSrv.set("삭제 실패", err, 'error', 5000);
                });
            },
        });
    }
    deleteModelSpecTable(modelId) {
        return new Promise((resolve, reject) => {
            const query = [
                `delete from t_model_spec where ID='${modelId}'`
            ];
            this.rsDsSrv.query(this.datasource.id, query).then( result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    editModelSpec() {
        if (arguments[0].length === 0) {
            this.alertSrv.set("등록 실패", `모델을 선택해 주세요.`, '알림', 5000);
            return;
        }
        for (let idx in this.inputModelSpecs) {
            const {ip: ip} = this.inputModelSpecs[idx];
            if (ip.length === 0) {
                this.alertSrv.set("등록 실패", `${idx+1} 번째 검사 항목을 선택해 주세요.`, '알림', 5000);
                return;
            }
        }
        const [
            { data: {
                MODEL_ID: modelId
            }
        } ] = arguments[0];

        this.$rootScope.appEvent('confirm-modal', {
            title: '확인',
            text: '정말 수정 하시겠습니까?',
            icon: 'fa-pencil',
            yesText: '수정',
            onConfirm: () => {
                this.updateModelSpecTable(modelId).then( result => {
                    const topic = `${this.baseTopic}${modelId}`;
                    const publishData = this.inputModelSpecs.map( ({ ip: [{data: ip}], min, max, lsl, usl}) => {
                        return { ip: ip, min, max, lsl, usl, iid: ip.IDX };
                    });
                    // console.log(topic, publishData);
                    this.rsMqttSrv.publishMessage(topic, JSON.stringify(publishData), this.mqttdefaultOpts);
                    this.setMode = 'list';
                }).catch(err => {
                    this.alertSrv.set("등록 실패", err, '알림', 5000);
                    console.error(err);
                });
            }
        });
    }

    updateModelSpecTable(modelId) {
        return new Promise((resolve, reject) => {
            const query = [`update t_model_spec set IP_JSON = '${JSON.stringify(this.inputModelSpecs)}'
                where ID='${modelId}'`
            ];
            this.rsDsSrv.query(this.datasource.id, query).then( result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
}

export {
    RmsModelSpecMgmtPanelCtrl as PanelCtrl
};
