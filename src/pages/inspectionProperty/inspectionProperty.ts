var template = require('./inspectionProperty.html');

export class InspectionPropertyPageCtrl {
    static template = template;
    appModel: any;
    mqttdefaultOpts: object;

    inspectList: any[];
    faultyList: any[];
    mode: any;
    enEtcMenu: boolean;
    selectObj: any;
    ip_class: any[];
    isOrgEditor: boolean;

    constructor(private $rootScope, private $location, private $q,
        private alertSrv,
        private rsDsSrv, private rsMqttSrv) {
        this.mode = "list";
        this.enEtcMenu = false;
        this.ip_class = [
            {   name: "검사 항목",   id : 1, },
            {   name: "불량 입력",   id : 2, },
        ];
        let selectId = this.appModel.jsonData.datasourceID;
        if (selectId === undefined) {
            this.$location.path('/plugins/proj-rms-plugin-app/edit');
        } else {
            this.updateInspectionPropertyList(selectId);
        }

        // param : host:string, topic:string, recvcallback:function
        this.rsMqttSrv.connect("ws://219.251.4.236:1884");
        // this.rsMqttSrv.subscribe = '#';
        // this.rsMqttSrv.recvMessage(this.mqttRecv.bind(this));

        this.mqttdefaultOpts = {
            qos: 0,
            retain: true,
            dup: false,
        };
    }

    mqttRecv(topic, message) {
        console.log(topic, message.toString());
    }

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

    getInspectionProperty(name) {
        let selectId = this.appModel.jsonData.datasourceID;
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
        let selectId = this.appModel.jsonData.datasourceID;
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
                    let topic = 'INSPPROP/' + data[0][0].IDX;
                    let obj = data[0][0];
                    let messageObj = {
                        "NAME": obj.NAME,
                        "DESCRIPTION": obj.DESCRIPTION,
                        "TYPE": obj.IP_TYPE
                    };
                    this.rsMqttSrv.publishMessage(topic, JSON.stringify(messageObj), this.mqttdefaultOpts);
                }
            });
            this.setMode('list');
            this.updateInspectionPropertyList(selectId);
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
                let selectId = this.appModel.jsonData.datasourceID;
                let query = [];
                query.push("delete from t_inspection_property where IDX = "
                    + item.IDX);
                this.rsDsSrv.query(selectId, query).then( result => {
                    let topic = 'INSPPROP/' + item.IDX;
                    this.rsMqttSrv.publishMessage(topic, '', this.mqttdefaultOpts);

                    this.setMode('list');
                    this.updateInspectionPropertyList(selectId);
                    this.alertSrv.set(item.NAME + "이(가) 삭제되었습니다.", '', 'success', 3000);
                }).catch( err => {
                    this.alertSrv.set(item.NAME + " 삭제 실패", err, 'error', 5000);
                    console.error(err);
                });
            }
        });
    }

    updateInspectionItem() {
        let selectId = this.appModel.jsonData.datasourceID;
        let obj = this.selectObj;
        let query = [];
        let updateData = "NAME = '" + obj.NAME  + "'"
            + ", DESCRIPTION = '"   + obj.DESCRIPTION + "'"
            + ", DEFAULT_MIN = "    + obj.DEFAULT_MIN + ""
            + ", DEFAULT_MAX = "    + obj.DEFAULT_MAX + ""
            + ", DEFAULT_CPK_MIN = "+ obj.DEFAULT_CPK_MIN + ""
            + ", DEFAULT_CPK_MAX = "+ obj.DEFAULT_CPK_MAX + "";
        query.push("update t_inspection_property set " + updateData + " where IDX = "
            + obj.IDX);

        this.rsDsSrv.query(selectId, query).then( result => {
            let topic = 'INSPPROP/' + obj.IDX;
            let messageObj = {
                "NAME": obj.NAME,
                "DESCRIPTION": obj.DESCRIPTION
            };
            this.rsMqttSrv.publishMessage(topic, JSON.stringify(messageObj), this.mqttdefaultOpts);

            this.setMode('list');
            this.updateInspectionPropertyList(selectId);
            this.alertSrv.set(name + "이(가) 수정되었습니다.", '', 'success', 1000);
        }).catch( err => {
            this.alertSrv.set(obj.NAME + " 수정 실패", err, 'error', 5000);
            console.error(err);
        });
    }

    setMode(mode) {
        this.mode = mode;
        this.updateInspectionPropertyList(this.appModel.jsonData.datasourceID);
    }

    showEtcMenu(obj) {
        this.selectObj = obj;
        this.enEtcMenu = true;
    }
}
