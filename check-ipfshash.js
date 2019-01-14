/**
 * Created by lebamui on 11/01/2019.
 */
const fs = require('fs');
const moment = require('moment');
const secp256k1 = require('secp256k1');
// const keccak = require('keccak');
const { randomBytes } = require('crypto');

console.log("*************TEST IPFS****************\n");
console.log("\tCREATE NEW CONTRACT\n");

var hash = 'Gia tri hash cua file ipfs';
let privateKey;
do {
    privateKey = randomBytes(32);
} while (!secp256k1.privateKeyVerify(privateKey));
hash = privateKey.toString('hex');
console.log('Start create at:\t', moment.utc().toISOString());
require('./web3/ipfs_test/contract')(hash, function (err, res) {
    if (err) {
        console.log('Create error\n');
        console.log(err);
        process.exit(0);
        return;
    }
    var address = res.options.address;
    var createTime = moment.utc() - moment.utc(res.options.startTime);
    var body = {
        // timestamp: moment.utc().toISOString(),
        address: res.options.address,
        owner: res.options.owner,
        type: "IPFS",
        totaltime: createTime
    }
    console.log('created at:\t', moment.utc().toISOString(), '\tIndexing ...');
    require('./web3/elastic/index-contract')(body, function (err, res) {
        console.log(err || res);
    });

    // console.log('The Contract with ipfs hash: ', hash, "\tcreated at:\n\t", address, "\n");
    // console.log('\tExcute call method to get hash');
    //
    // require('./web3/ipfs_test/call')(address, function (err, res) {
    //     if (err) {
    //         console.log('Call getHash function err\n', err);
    //         process.exit(0);
    //         return;
    //     }
    //     console.log('*****Retrun hash from\t', address, "\t: ", res);
    //     process.exit(0);
    // })
});