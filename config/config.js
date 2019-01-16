/**
 * Created by lebamui on 07/01/2019.
 */
// var args = process.argv.slice(2);
// /** Get WebSocket host and port from args**/
// var host = args[0] || "ws://192.168.178.20";
// var port = args[1] || "8545";
//
// var elastic = {
//     'host'  : '130.149.110.158', //http://130.149.110.158:8201/
//     'port'  : '8201',
//     'auth'  : ''
// };
/** use process env value
 * docker run -e NAME=value -e ORTHERNAME='somtext'
 * Hoac dung docker run --env-file filename.list
 * (name=value on line)*/
var wsHost = process.env.WS_HOST || "ws://localhost";
var wsPort = process.env.WS_PORT || "8545";
var esHost = process.env.ES_HOST || "localhost";
var esPort = process.env.ES_PORT || "9200";
var ethAccount = process.env.ETH_ACCOUNT || '';
var contractNum = process.env.CONTRACT_NUM || 1;

module.exports = {
    "wsURL": wsHost + ":" + wsPort,
    // "args"  : args,
    // "creator" : "0x74C86a188Adce531A66aa497A5A2c027a3930BE3",
    "creator": ethAccount,
    // "excuter" : "0x6f8e5996fa1a0659aB95765c81481EabafD3d7E3",
    contractNum: contractNum,
    elastic: {
        'host': esHost, //http://130.149.110.158:8201/
        'port': esPort,
        'auth': ''
    }
}