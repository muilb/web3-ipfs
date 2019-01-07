/**
 * Created by lebamui on 07/01/2019.
 */
var args = process.argv.slice(2);
/** Get WebSocket host and port from args**/
var host = args[0] || "ws://localhost";
var port = args[1] || "8546";

module.exports = {
    "wsURL" : host + ":" + port,
    "args"  : args
}