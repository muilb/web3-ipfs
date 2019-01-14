/**
 * Created by lebamui on 13/01/2019.
 */
const fs = require('fs');
const moment = require('moment');
const secp256k1 = require('secp256k1');
const { randomBytes } = require('crypto');
const newContract = require('./contract');
const index = require('../elastic/index-contract')
var args = process.argv.slice(2);
console.log("*************TEST IPFS****************\n");
console.log("\tCREATE NEWS CONTRACT\t", args[0], ' contract');

var total = args[0] || 10;
for (var i=1; i< total; i++) {
    createAndIndex();
}

function createAndIndex() {
    let privateKey;
    do {
        privateKey = randomBytes(32);
    } while (!secp256k1.privateKeyVerify(privateKey));
    let hash = privateKey.toString('hex');
    newContract(hash, function (err, res) {
        if (err) {
            console.log('Create error\n');
            console.log(err);
            // process.exit(0);
            return;
        }
        var createTime = moment.utc() - moment.utc(res.options.startTime);
        var body = {
            // timestamp: moment.utc().toISOString(),
            address: res.options.address,
            owner: res.options.owner,
            type: "IPFS",
            totaltime: createTime
        }
        console.log('created at:\t', moment.utc().toISOString(), '\tIndexing ...');
        index(body, function (err, res) {
            console.log('Indexed ');
        });
    });
}