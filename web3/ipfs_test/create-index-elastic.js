/**
 * Created by lebamui on 13/01/2019.
 */
const fs = require('fs');
const moment = require('moment');
const secp256k1 = require('secp256k1');
const { randomBytes } = require('crypto');
const newContract = require('./contract');
const index = require('../elastic/index-contract');
const config = require('../../config/config');
const contractNum = config.contractNum;
// var args = process.argv.slice(2);
console.log("\tCREATING NEWS CONTRACT\t", contractNum, ' contract');

createAndIndex(0);

function createAndIndex(i) {
    let privateKey;
    do {
        privateKey = randomBytes(32);
    } while (!secp256k1.privateKeyVerify(privateKey));
    let hash = privateKey.toString('hex');

    console.log('Start creating contract\t', i);

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
            console.log('Indexed ', err || 'Ok');
            if (i++ < contractNum) {
                createAndIndex(i);
            } else {
                console.log('End test');
                process.exit(0);
            }
        });
    });
}