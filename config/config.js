/**
 * Created by lebamui on 07/01/2019.
 */
var args = process.argv.slice(2);
/** Get WebSocket host and port from args**/
var host = args[0] || "ws://localhost";
var port = args[1] || "8545";

var elastic = {
    'host'  : 'localhost',
    'port'  : '8201',
    'auth'  : ''
};

module.exports = {
    "wsURL" : host + ":" + port,
    "args"  : args,
    "creator" : "0x74C86a188Adce531A66aa497A5A2c027a3930BE3",
    "excuter" : "0x6f8e5996fa1a0659aB95765c81481EabafD3d7E3",
    elastic: elastic
}