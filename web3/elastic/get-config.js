/**
 * Created by lebamui on 28/05/2018.
 */
var fs = require('fs');
var config = require('../../config/config');

/**elastic config*/
var elasticConfig = config.elastic || {};
var elasticHost = elasticConfig.host || "localhost";
var elasticPort = elasticConfig.port || "9200";
var auth = elasticConfig.auth;

var useENVConfig = process.env.USE_ENV || false;
/** Check for use ENV config value*/
if (useENVConfig) {
    // elastic
    elasticHost = process.env.ES_HOST;
    elasticPort = process.env.ES_PORT;
    auth = process.env.ES_AUTH;
}

module.exports = {
    elasticHost: [
        {
            host: elasticHost,
            auth: auth,
            protocol: 'http',
            port: elasticPort
        }
    ]
}