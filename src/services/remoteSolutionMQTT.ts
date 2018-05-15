import coreModule from 'grafana/app/core/core_module';
import * as mqtt from 'mqtt/dist/mqtt.min';

export class RemoteSolutionMQTTCtrl {
    _host: string;
    set host(host: string) { this._host = host; }
    get host() { return this._host; }
    _subscribe: string;
    set subscribe(subscribe: string) {
        if (this.client !== undefined ) {
            if (this._subscribe !== undefined ) {
                console.log("[MQTT] unsubscribe : ", this._subscribe);
                this.client.unsubscribe(this._subscribe);
            }
            console.log("[MQTT] subscribe : ", subscribe);
            this.client.subscribe(subscribe);
        }
        this._subscribe = subscribe;
    }
    get subscribe() { return this._subscribe; }
    _connect: any;
    set client(client: any) { this._connect = client; }
    get client() { return this._connect;}


    constructor() {
    }

    connect(host: string) {
        this.host = host;
        try {
            this.client = mqtt.connect(host);
            this.client.on('connect', this.onConnect.bind(this));
            this.client.on('close', this.onClose.bind(this));
        } catch (e) {
            console.error(e);
            this.client = null;
        }
    }

    onConnect() {
        console.log("[MQTT] Connected : " + this.host);
    }

    onClose() {
        this.client = null;
    }

    recvMessage(callback: any) {
        if (this.client !== undefined ) {
            this.client.on('message', callback.bind(this));
        }
    }

    publishMessage(topic: string, message: string, options: object) {
        if (this.client !== undefined ) {
            console.log('[MQTT publish]',topic, message, options);
            try {
                this.client.publish(topic, message, options);
            } catch (e) {
                console.error(e);
            }
        }
    }
}

coreModule.service('rsMqttSrv', RemoteSolutionMQTTCtrl);
