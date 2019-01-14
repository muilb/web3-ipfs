/**
 * Created by lebamui on 08/01/2019.
 */
const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const wsprovider = require("./providers").wsprovider;

function createContract(cb) {
    var web3 = new Web3();
    web3.setProvider(wsprovider);
    var BN = web3.utils.BN;

    /** tam test truoc contract da compiled - su dung tool make-compile*/
    var compiled = require('./contracts/Token_Event.sol.json');
    var contract = new web3.eth.Contract(compiled.contracts[0].abi);
    // new web3.eth.Contract(jsonInterface[, address][, options])
    // set option
    // bytecode them tien to   "0x"
    var options = {
        data: "0x" + compiled.contracts[0].bytecode

    }
    // deploy
    contract.deploy(options)
        .send({
            from: "0x74C86a188Adce531A66aa497A5A2c027a3930BE3",  // account
            gas: 1500000,
            gasPrice: '30000000000000'
        })
        .then(function (newContract) {
            console.log(newContract.options.address);
        })
        .catch(function (err) {
            console.log(err);
        });
    // console.log(contract.options);
}

function createContractContructor(hash, cb) {
    var web3 = new Web3();
    web3.setProvider(wsprovider);
    var BN = web3.utils.BN;

    var ipfshashCompiled = require('./contracts/Ipfshash.sol.json');
    var abi = ipfshashCompiled.contracts[0].abi;
    var bytecode = "0x" + ipfshashCompiled.contracts[0].bytecode;
    var account = "0x74C86a188Adce531A66aa497A5A2c027a3930BE3";
    // deploy contract with contructor
    var ipfsContract = new web3.eth.Contract(abi);
    ipfsContract.deploy({data: bytecode, arguments: [hash]})
        .send({
            from: account,
            gas: 1500000,
            gasPrice: '30000000000000'
        })
        .then(function (deployed) {
            // tien xu ly deployed neu can
            // console.log(deployed.options);
            cb(null, deployed);
        })
        .catch(function (err) {
            // console.log(err);
            cb(err);
        })
}
module.exports = createContract;

// myContract.deploy({
//     data: '0x12345...',
//     arguments: [123, 'My String']
// })
//     .send({
//         from: '0x1234567890123456789012345678901234567891',
//         gas: 1500000,
//         gasPrice: '30000000000000'
//     }, function(error, transactionHash){  })
//     .on('error', function(error){  })
//     .on('transactionHash', function(transactionHash){  })
//     .on('receipt', function(receipt){
//         console.log(receipt.contractAddress) // contains the new contract address
//     })
//     .on('confirmation', function(confirmationNumber, receipt){  })
//     .then(function(newContractInstance){
//         console.log(newContractInstance.options.address) // instance with the new contract address
//     });