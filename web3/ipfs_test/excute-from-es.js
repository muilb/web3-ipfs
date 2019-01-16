/**
 * Created by lebamui on 16/01/2019.
 */
const moment = require('moment');
const queryES = require('../elastic/query-contract');
const excuteMethod = require('./call');
const indexMethod = require('../elastic/index-call-method');

queryES({from: 0, size: 5}, function (err, hits) {
    if (err) {
        console.log('Query list contract from ES err\n', err);
        process.exit(0);
    }
    var contractNum = hits.length;
    callMethod(hits, 0);

    function callMethod(contracts, index) {
        // console.log(contracts);
        if (contracts[index] === undefined) {
            console.log('End test.');
            process.exit(0);
        }
        console.log('Excute at:\t', moment.utc().toISOString(), '\t...');
        var contract = contracts[index]._source;
        excuteMethod(contract, function (err, res) {
            if (err) {
                console.log('Excute error\n');
            } else {
                // return methods.getHash() ==> Object with start time and ipfs hash as string?
                console.log('Excuted get result:\t', res.hash, '\nIndexing...');
                // var excuteTime = moment.utc() - moment.utc(res.startTime);
                contract.excutor = contract.owner;
                contract.method = "getHash";
                contract.totaltime = moment.utc() - moment.utc(res.startTime);

                indexMethod(contract, function (err, res) {
                    if (err) {
                        console.log('Index excute method of contract\t', contract.address, '\terror. See logs file');
                        /** Make logs*/
                        logsError(contract);
                    } else {
                        console.log('Indexed Excute method of contract\t', contract.address);
                    }
                    // callMethod(contracts, index++);
                    if (index++ < contractNum) {
                        callMethod(index);
                    } else {
                        console.log('End test');
                        process.exit(0);
                    }
                });
            }
        });
    }
});