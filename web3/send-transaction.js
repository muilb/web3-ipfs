/**
 * Created by lebamui on 08/01/2019.
 */
const Web3 = require('web3');
const wsprovider = require("./providers").wsprovider;

function sendTransaction(cb) {
    var web3 = new Web3();
    web3.setProvider(wsprovider);
    var BN = web3.utils.BN;

    var sendVal = new BN(web3.utils.toWei('5')).toString();
    var  transactionBalanceObject = {
        from: '0x74C86a188Adce531A66aa497A5A2c027a3930BE3',
        to: '0x6f8e5996fa1a0659aB95765c81481EabafD3d7E3',
        value: sendVal
    }

    web3.eth.sendTransaction(transactionBalanceObject, cb);
}

module.exports = sendTransaction;