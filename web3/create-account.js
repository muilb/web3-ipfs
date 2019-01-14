/**
 * Created by lebamui on 07/01/2019.
 */
var config = require("../config/config");
const Web3 = require('web3');
const wsprovider = require("./providers").wsprovider;

function createAccount(cb) {
    var web3 = new Web3();
    web3.setProvider(wsprovider);
    // get agr at 2 index
    // var accountType = config.args[2];
    web3.eth.personal.newAccount('testpass').then(cb);
}
module.exports = createAccount;