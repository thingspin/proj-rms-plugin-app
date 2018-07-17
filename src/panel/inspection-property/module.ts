import {MetricsPanelCtrl, loadPluginCss} from  'grafana/app/plugins/sdk';

import '../../services/remoteSolutionDS';
import '../../services/remoteSolutionMQTT';

import $ from 'jquery';
import 'jquery-ui';
import 'jquery.tabulator/dist/js/tabulator.min';
import 'jquery.tabulator/dist/css/tabulator.min.css';

const appId = "proj-rms-plugin-app";
loadPluginCss({
    dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
    light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

export class InspectionPropertyPanelCtrl  extends MetricsPanelCtrl  {
    static template = require('./view.html');
    appModel: any;
    mqttdefaultOpts: object;

    inspectList: any[];
    faultyList: any[];
    mode: any;
    enEtcMenu: boolean;
    selectObj: any;
    ip_class: any[];
    isOrgEditor: boolean;

    inspectTable: any;
    faultyTable: any;
    defTabulatorOpts: object;

    constructor($scope, $injector, private $rootScope, private $element, private $location,
        private alertSrv,
        private rsDsSrv, private rsMqttSrv) {
        super($scope, $injector);
        this.mode = "list";
        this.enEtcMenu = false;
        this.ip_class = [
            {   name: "검사 항목",   id : 1, },
            {   name: "불량 입력",   id : 2, },
        ];

        // param : host:string, topic:string, recvcallback:function
        const urlPath = "/";
        const baseUrl = `ws://${this.$location.host()}:${this.$location.port()}/api/plugin-proxy/${appId}`;
        this.rsMqttSrv.connect(`${baseUrl}${urlPath}`);
        // this.rsMqttSrv.subscribe = '#';
        // this.rsMqttSrv.recvMessage(this.mqttRecv.bind(this));

        this.mqttdefaultOpts = {
            qos: 0,
            retain: true,
            dup: false,
        };
        this.defTabulatorOpts = {
            pagination: "local",
            paginationSize: 7,
            selectable: 1,
            fitColumns: true,
            responsiveLayout: true,
            layout: "fitColumns", //fit columns to width of table (optional)
            columns: [ //Define Table Columns
                {title: "ID", field: "IDX"},
                {title: "항목명", field: "NAME" },
                {title: "설명", field: "DESCRIPTION" },
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

    initInspectTable() {
        let opts = Object.assign({ // deep copy
            rowClick: (e, row) => { //trigger an alert message when the row is clicked
                const rows = this.inspectTable.tabulator("getSelectedData");
                if (rows.length === 0) {
                    this.enEtcMenu = false;
                    this.$scope.$apply();
                } else {
                this.showEtcMenu(row.getData());
                this.faultyTable.tabulator('deselectRow');
                }
            },
        }, this.defTabulatorOpts);
        this.inspectTable = $(this.$element.find('#inspectTable')).tabulator(opts);

        var link = document.createElement( "link" );
        link.href = "public/plugins/proj-rms-plugin-app/panel/inspection-property/light.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
    
        document.getElementsByTagName( "head" )[0].appendChild( link );
    }
    initFaultyTable() {
        let opts = Object.assign({ // deep copy
            rowClick: (e, row) => { //trigger an alert message when the row is clicked
                const rows = this.faultyTable.tabulator("getSelectedData");
                if (rows.length === 0) {
                    this.enEtcMenu = false;
                    this.$scope.$apply();
                } else {
                    this.showEtcMenu(row.getData());
                    this.inspectTable.tabulator('deselectRow');
                }
            },
        }, this.defTabulatorOpts);
        this.faultyTable = $(this.$element.find('#faultyTable')).tabulator(opts);
    }

    onDataReceived(dataList) {
        let data = this.rsDsSrv.getTableObj(dataList);
        dataList.forEach( (result, idx) => {
            if (result.meta.sql.includes("IP_TYPE=1")) {
                this.inspectList = data[idx];
                this.inspectTable.tabulator("setData", data[idx]);
            } else if (result.meta.sql.includes("IP_TYPE=2")) {
                this.faultyList = data[idx];
                this.faultyTable.tabulator("setData", data[idx]);
            }
        });
    }

    mqttRecv(topic, message) {
        // console.log(topic, message.toString());
    }

    /*
    updateInspectionPropertyList(selectId) {
        this.$q.all([ this.$q((resolve, reject) => {
            let query = [ "select * from t_inspection_property where IP_TYPE=1"];
            this.rsDsSrv.query(selectId, query).then( result => {
                let data = this.rsDsSrv.getTableObj(result);
                this.inspectList = data[0];
                resolve(data);
            }).catch( err => {
                reject(err);
                console.error(err);
            });
        }), this.$q((resolve, reject) => {
            let query = [ "select * from t_inspection_property where IP_TYPE=2"];
            this.rsDsSrv.query(selectId, query).then( result => {
                let data = this.rsDsSrv.getTableObj(result);
                this.faultyList = data[0];
                resolve(data);
            }).catch( err => {
                reject(err);
                console.error(err);
            });
        })]).then(result => {
            this.enEtcMenu = false;
        }, (err) => {
            this.alertSrv.set("Error", err, 'error', 5000);
        });
    }
    */

    getInspectionProperty(name) {
        let selectId = this.datasource.id;
        let deferred = this.$q.defer();
        let query = ["select * from t_inspection_property where name='" + name + "'"];
        this.rsDsSrv.query(selectId, query).then( result => {
            deferred.resolve(result);
        }).catch( err => {
            deferred.reject(err);
        });
        return deferred.promise;
    }

    addInspectionItem(ipType, name, desc, min, max, cpk_min, cpk_max) {
        if (!name) {
            this.alertSrv.set('검사 항목명을 입력하세요.', '', 'info', 3000);
            return;
        }
        let selectId = this.datasource.id;
        let columns = "( NAME";
        let values = "('" + name + "'";
        columns = columns + ", IP_TYPE";
        values = values + ", " + ipType.id;
        columns = columns + ", DESCRIPTION";
        if (desc !== undefined && desc !== null )       { values = values + ",'" + desc + "'";} else { values = values + ", ''";}
        columns = columns + ", DEFAULT_MIN";
        if (min !== undefined && min !== null)          { values = values + ", " + min;} else {values = values + ", 0";}
        columns = columns + ", DEFAULT_MAX";
        if (max !== undefined && max !== null)          { values = values + ", " + max;} else {values = values + ", 0";}
        columns = columns + ", DEFAULT_CPK_MIN";
        if (cpk_min !== undefined && cpk_min !== null)  { values = values + ", " + cpk_min;} else {values = values + ", 0";}
        columns = columns + ", DEFAULT_CPK_MAX";
        if (cpk_max !== undefined && cpk_max !== null)  { values = values + ", " + cpk_max;} else {values = values + ", 0";}
        columns = columns + ")";
        values = values + ")";
        let query = [
            "insert into t_inspection_property " + columns + " values " + values,
        ];

        this.rsDsSrv.query(selectId, query).then( result => {
            this.getInspectionProperty(name).then((res) => {
                let data = this.rsDsSrv.getTableObj(res);
                if (data.length === 1 && data[0].length === 1) {
                    let topic = '';
                    let obj = Object;
                    if (ipType.id === 1) {
                        topic = 'INSPPROP/' + data[0][0].IDX;
                        obj = data[0][0];
                    } else {
                        topic = 'EYEINSPR/' + data[0][0].IDX;
                        obj = data[0][0];                   
                    }
                    this.rsMqttSrv.publishMessage(topic, JSON.stringify(Object.assign(obj)), this.mqttdefaultOpts);
                }
            });
            this.setMode('list');
            // this.updateInspectionPropertyList(selectId);
            this.alertSrv.set(name + "이(가) 추가되었습니다.", '', 'success', 1000);
        }).catch( err => {
            this.alertSrv.set(name + " 추가 실패", err, 'error', 5000);
            console.error(err);
        });
    }

    deleteInspectionItem() {
        let item = this.selectObj;
        this.$rootScope.appEvent('confirm-modal', {
            title: item.NAME + ' 삭제',
            text: '정말로 지우시겠습니까?',
            icon: 'fa-trash',
            yesText: '삭제',
            onConfirm: () => {
                let selectId = this.datasource.id;
                let query = [];
                query.push("delete from t_inspection_property where IDX = "
                    + item.IDX);
                this.rsDsSrv.query(selectId, query).then( result => {
                    let topic = '';
                    if (item.IP_TYPE === 1) {
                        topic = 'INSPPROP/' + item.IDX;
                    } else {
                        topic = 'EYEINSPR/' + item.IDX;
                    }
                    this.rsMqttSrv.publishMessage(topic, '', this.mqttdefaultOpts);

                    this.setMode('list');
                    // this.updateInspectionPropertyList(selectId);
                    this.alertSrv.set(item.NAME + "이(가) 삭제되었습니다.", '', 'success', 3000);
                }).catch( err => {
                    this.alertSrv.set(item.NAME + " 삭제 실패", err, 'error', 5000);
                    console.error(err);
                });
            }
        });
    }

    updateInspectionItem() {
        let selectId = this.datasource.id;
        let obj = this.selectObj;
        let query = [];
        if (!obj.NAME) {
            this.alertSrv.set('검사 항목명을 입력하세요.', '', 'info', 3000);
            return;
        }
        let updateData = "NAME = '" + obj.NAME  + "'"
            + ", DESCRIPTION = '"   + obj.DESCRIPTION + "'"
            + ", DEFAULT_MIN = "    + obj.DEFAULT_MIN + ""
            + ", DEFAULT_MAX = "    + obj.DEFAULT_MAX + ""
            + ", DEFAULT_CPK_MIN = "+ obj.DEFAULT_CPK_MIN + ""
            + ", DEFAULT_CPK_MAX = "+ obj.DEFAULT_CPK_MAX + "";
        query.push("update t_inspection_property set " + updateData + " where IDX = "
            + obj.IDX);

        this.rsDsSrv.query(selectId, query).then( result => {
            let allQ = [];
            allQ.push("SELECT * FROM t_inspection_property where IDX = " + obj.IDX);
            this.rsDsSrv.query(selectId, allQ).then( result => {
                let data = this.rsDsSrv.getTableObj(result)[0][0];
                if (data !== null && data !== undefined) {
                    let topic ='';
                    if (data.IP_TYPE === 1) {
                        topic = 'INSPPROP/' + obj.IDX;
                    } else {
                        topic = 'EYEINSPR/' + obj.IDX;
                    }
                    this.rsMqttSrv.publishMessage(topic, JSON.stringify(Object.assign(data)), this.mqttdefaultOpts);
                }
            });

            this.setMode('list');
            // this.updateInspectionPropertyList(selectId);
            this.alertSrv.set(obj.NAME + "이(가) 수정되었습니다.", '', 'success', 1000);
        }).catch( err => {
            this.alertSrv.set(obj.NAME + " 수정 실패", err, 'error', 5000);
            console.error(err);
        });
    }

    setMode(mode) {
        this.mode = mode;
        switch (mode) {
            case "list":
                this.enEtcMenu = false;
            break;
        }
        // this.updateInspectionPropertyList(selectId);
        this.refresh();
    }

    showEtcMenu(obj) {
        this.selectObj = obj;
        this.enEtcMenu = true;
        this.$scope.$apply();
    }
}

export {
    InspectionPropertyPanelCtrl as PanelCtrl
};
