/**
 * Created by lebamui on 11/01/2019.
 */
// const fs = require('fs');
// const solc = require('solc');
const moment = require('moment');
const Web3 = require('web3');
const wsprovider = require("../providers").wsprovider;
var ipfshashCompiled = require('../contracts/Ipfshash.sol.json');
// var config = require('../../config/config');
var abi = ipfshashCompiled.contracts[0].abi;
var bytecode = "0x" + ipfshashCompiled.contracts[0].bytecode;

function callGetHash(option, cb) {
    var web3 = new Web3();
    web3.setProvider(wsprovider);
    var BN = web3.utils.BN;

    // get contract Instance from contract address
    var contract = new web3.eth.Contract(abi, option.address);
    var startTime = moment.utc().toISOString();
    contract.methods.getHash()
        .call({
            gas: 1500000,
            gasPrice: '30000000000000',
            from: option.owner
        })
        .then(function (hash) {
            var result = {
                hash: hash,
                startTime: startTime
            };
            cb(null, result)
        })
        .catch(function (err) {
            cb(err)
        });
}

module.exports = callGetHash;