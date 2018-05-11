import _ from 'lodash';
import coreModule from 'grafana/app/core/core_module';

export class RemoteSolutionDSCtrl {
    dsReady: any;
    datasources: any[];
    appModel: any;

    constructor(private $q, private backendSrv) {
        this.dsReady = false;
    }

    getDatasource() {
        return this.datasources;
    }

    // promise
    getDatasources() {
        return this.backendSrv.get('/api/datasources').then( result => {
            this.datasources = _.filter(result, { "type": "mysql" });
            return this.datasources;
        });
    }

    query(dsIdx, statement) {
        if (!this.dsReady) {
            return this.getDatasources().then( res => {
                if (this.datasources.length !== 0){
                    this.dsReady = true;
                } else {
                    console.error("MariaDB datasource is not defined",res);
                }
                return this.sql(dsIdx, statement);
            });
        } else {
            return this.sql(dsIdx, statement);
        }
    }

    setQueries(selectId, statements) {
        let queries = [];
        statements.forEach( statement => {
            queries.push({
                refId: 'A',
                intervalMs: 1,
                maxDataPoints: 1,
                datasourceId: selectId,
                rawSql: statement,
                format: 'table',
            });
        });
        return queries;
    }

    sql(selectId, statements) {
        if (selectId !== undefined && this.dsReady === true) {
            selectId = parseInt(selectId);
            return this.backendSrv.datasourceRequest({
                url: '/api/tsdb/query',
                method: 'POST',
                data: {
                    queries: this.setQueries(selectId, statements),
                }
            }).then(res => {
                return res.data.results.A.tables;
            }).catch(err => {
                if (err.data && err.data.message) {
                    return this.$q.reject({ status: "error", message: err.data.message } );
                } else {
                    return this.$q.reject({ status: "error", message: err.status });
                }
            });
        } else {
            return this.$q.reject({status: "error",  message: "datasource is not found" });
        }
      }

      getTableObj(target){
        let data = [];

        target.forEach( (item, itemIdx) => {
            data[itemIdx] = [];
            item.rows.forEach( (row) => {
                let obj = {};
                row.forEach( (field, idx) => {
                    obj[item.columns[idx].text] = field;
                });
                data[itemIdx].push(obj);
            });
        });

        return data;
    }
    getPluginInfo(pluginId) {
        return this.backendSrv.get('/api/plugins/'+ pluginId + '/settings').then(app => {
            return app;
        }).catch(err => {
            return this.$q.reject({status: "error",  message: err });
        });
    }
}

coreModule.service('rsDsSrv', RemoteSolutionDSCtrl);
