//import _ from 'lodash';
import coreModule from 'grafana/app/core/core_module';
import appEvents from 'grafana/app/core/app_events';
// import { strictEqual } from 'assert';

export class RemoteSolutionWSCtrl {
    wsInfo: any;

    //===================================================================================
    // Remote Solution Websocket Initialize
    //===================================================================================

    constructor(private $location) {
        // set internal variable
        this.wsInfo = {};

        // init function or test function call
    }

    CreateRemoteSolutionWebsocket(appId, urlPath) {
        if ( undefined === this.wsInfo[appId] ) {
            console.log("[rsWsSrv] New Websocket Instance:", appId);
            let url = "ws://" + this.$location.host() + ":" + this.$location.port()
                + "/api/plugin-proxy/" + appId + urlPath;
            this.wsInfo[appId] = {};
            this.wsInfo[appId].conn = new WebSocket(url);

            // register websocket Events
            this.wsInfo[appId].conn.onopen      = (evt) => { this.onWsOpen(evt, appId); };
            this.wsInfo[appId].conn.onclose     = (evt) => { this.onWsClose(evt, appId, urlPath); };
            this.wsInfo[appId].conn.onmessage   = (evt) => { this.onWsMessage(evt, appId); };
            return true;
        }

        console.log("[rsWsSrv] already initialize Websocket:", appId);
        return false;
    }

    //===================================================================================
    // Remote Solution Websocket Events
    //===================================================================================

    onWsOpen(event, appId) {
        console.log("[rsWsSrv] Websocket Connected:", appId);
        this.RegisterWebsocketClient(appId);
    }

    onWsClose(event, appId, urlPath) {
        console.log("[rsWsSrv] Websocket Disconnected:", appId);
        setTimeout(() => {
            // re create websocket
            delete this.wsInfo[appId];
            this.CreateRemoteSolutionWebsocket(appId, urlPath);
        } , 2000);
    }

    // Remote Solution Websocket Response Commands
    onWsMessage(event, appId){
        let obj = JSON.parse(event.data);

        switch (obj.action) {
            case "resp_register":
                this.wsInfo[appId].id = obj.id;
                break;
        }

        // resp_DeviceList
        appEvents.emit('ws-recv-data-' + appId, obj);
    }

    //===================================================================================
    // Remote Solution Websocket Reqeust Commands
    //===================================================================================

    RegisterWebsocketClient(appId) {
        if ( this.wsInfo[appId].conn === undefined ) {
            console.error("[rsWsSrv]", appId, "Websocket Instance Not found");
            return false;
        }

        let sendMsg = {
            action: 'req_register',
            devId: 'None',
            type: 'browser',
            siteCode: 'None'
        };

        this.wsInfo[appId].conn.send( JSON.stringify(sendMsg) );
        return true;
    }

    /*
    ReqDeviceList(appId, siteCode) {
        if ( this.wsInfo[appId].conn === undefined ) {
            console.error("[rsWsSrv]", appId, "Websocket Instance Not found");
            return false;
        } else if (this.wsInfo[appId].id === undefined) {
            console.error("[rsWsSrv]", appId, "unregistered");
            return false;
        }

        let sendMsg = {
            action: 'req_DeviceList',
            id: this.wsInfo[appId].id,
            siteCode: siteCode
        };

        this.wsInfo[appId].conn.send( JSON.stringify(sendMsg) );
        return true;
    }
    */

    ReqMessage(appId, reqMsg) {
        if ( this.wsInfo[appId].conn === undefined ) {
            console.error("[rsWsSrv]", appId, "Websocket Instance Not found");
            return false;
        } else if (this.wsInfo[appId].id === undefined) {
            console.error("[rsWsSrv]", appId, "unregistered");
            return false;
        }

        reqMsg.id = this.wsInfo[appId].id;

        this.wsInfo[appId].conn.send( JSON.stringify(reqMsg) );
        return true;
    }

    //===================================================================================
    // Remote Solution Websocket Utils
    //===================================================================================

    getSessionId(appId) {
        return this.wsInfo[appId].id;
    }
}
coreModule.service('rsWsSrv', RemoteSolutionWSCtrl);
