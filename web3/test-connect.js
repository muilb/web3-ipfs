/**
 * Created by lebamui on 07/01/2019.
 */
const Web3 = require('web3');
var wsprovider = require("./providers").wsprovider;

function testConnect(cb) {
    var web3 = new Web3();
    web3.setProvider(wsprovider);
    web3.eth.net.isListening()
        .then(function (ws) {
            console.log(ws);
            cb(undefined, true);
        })
        .catch(function (error) {
            cb(error);
        });
}

module.exports = testConnect;