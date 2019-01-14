/**
 * Created by lebamui on 11/01/2019.
 */
const Web3 = require('web3');
const wsprovider = require("./providers").wsprovider;

function ipfshashCallMethod(cb) {
    var web3 = new Web3();
    web3.setProvider(wsprovider);
    var BN = web3.utils.BN;

    var contractAddress = "0xCF7Ef231737118c2f771Cba006Ac2757b0d1b27b"; // address tra ve khi create contract
    var ipfshashCompiled = require('./contracts/Ipfshash.sol.json');
    var abi = ipfshashCompiled.contracts[0].abi;
    var bytecode = "0x" + ipfshashCompiled.contracts[0].bytecode;
    var account = "0x74C86a188Adce531A66aa497A5A2c027a3930BE3";

    // get contract Instance from contract address
    var contract = new web3.eth.Contract(abi, contractAddress);
    // console.log(contract);
    // excute:
    // 1. check call method
    contract.methods.getHash()
        .call({
            // gas: 1500000,
            // gasPrice: '30000000000000',
            from: account
        })
        .then(function (result) {
            console.log('Tra ve tu ham .call.getHash()', result);
        })
        .catch(function (err) {
            console.log('Tra ve tu ham .call.getHash()', err);
        });
    // 1. check send method
    contract.methods.getHash()
        .send({
            // gas: 1500000,
            // gasPrice: '30000000000000',
            from: account
        })
        .then(function (result) {
            console.log('Tra ve tu ham .send.getHash()', result);
        })
        .catch(function (err) {
            console.log('Tra ve tu ham .send.getHash()', err);
        });
}

function exampleCallMethod(cb) {
    var web3 = new Web3();
    web3.setProvider(wsprovider);
    var BN = web3.utils.BN;

    var contractAddress = "0x7cf5c9B8ECec8D14e5a9175B41cCF2afDf6b63Be"; // address tra ve khi create contract
    var ipfshashCompiled = require('./contracts/Example.sol.json');

    var abi = ipfshashCompiled.contracts[0].abi;
    var bytecode = "0x" + ipfshashCompiled.contracts[0].bytecode;
    var account = "0x74C86a188Adce531A66aa497A5A2c027a3930BE3";

    // get contract Instance from contract address
    var contract = new web3.eth.Contract(abi, contractAddress);
    // console.log(contract);
    // excute:
    // 1. check call getCounter method
    contract.methods.getCounter()
        .call({
            // gas: 1500000,
            // gasPrice: '30000000000000',
            from: account
        })
        .then(function (result) {
            console.log('Tra ve tu ham .call.getCounter()', result);
        })
        .catch(function (err) {
            console.log('Tra ve tu ham .call.getCounter()', err);
        });
    // 1. check call add method
    contract.methods.add()
        .call({
            // gas: 1500000,
            // gasPrice: '30000000000000',
            from: account
        })
        .then(function (result) {
            console.log('Tra ve tu ham .call.add()', result);
        })
        .catch(function (err) {
            console.log('Tra ve tu ham .call.add()', err);
        });
    // ==> ham call  : add()  khong thay doi gia tri cua  Counter

    // 1. check call add method
    contract.methods.add()
        .send({
            // gas: 1500000,
            // gasPrice: '30000000000000',
            from: account
        })
        .then(function (result) {
            console.log('Tra ve tu ham .send.add()', result);
        })
        .catch(function (err) {
            console.log('Tra ve tu ham .send.add()', err);
        });
    /// ====> Thay doi duoc gia tri cua Count  khi goi lai contract lan sau.

/*** Ghi Nho *****
 * Call goi ham get, hoac de debug contract.
 * Send goi ham set, de thay doi contract tren mang **/

}

function tokenCallMethod(cb) {
    var web3 = new Web3();
    web3.setProvider(wsprovider);
    var BN = web3.utils.BN;

    var contractAddress = "0x5849A22501566883a51E1EC9010B54d9BA07E302"; // address tra ve khi create contract
    var ipfshashCompiled = require('./contracts/Token.sol.json');

    var abi = ipfshashCompiled.contracts[0].abi;
    var bytecode = "0x" + ipfshashCompiled.contracts[0].bytecode;
    var account = "0x74C86a188Adce531A66aa497A5A2c027a3930BE3";

    // get contract Instance from contract address
    var contract = new web3.eth.Contract(abi, contractAddress);
    // console.log(contract);
    // excute:
    // 1. check call getCounter method
    contract.methods.getBalance()
        .call({
            // gas: 1500000,
            // gasPrice: '30000000000000',
            from: account
        })
        .then(function (result) {
            console.log('Tra ve tu ham .call.getBalance()', result);
        })
        .catch(function (err) {
            console.log('Tra ve tu ham .call.getBalance()', err);
        });
}

function tokenEventMethod(cb) {
    var web3 = new Web3();
    web3.setProvider(wsprovider);
    var BN = web3.utils.BN;
    var account = "0x74C86a188Adce531A66aa497A5A2c027a3930BE3";
    var contractAddress = "0x841422145C54Ff04E367e003d1b90aeE1d8Fa738"; // address tra ve khi create contract

    var ipfshashCompiled = require('./contracts/Token.sol.json');

    var abi = ipfshashCompiled.contracts[0].abi;
    var bytecode = "0x" + ipfshashCompiled.contracts[0].bytecode;

    // get contract Instance from contract address
    var contract = new web3.eth.Contract(abi, contractAddress);
    // console.log(contract);
    // excute:
    // 1. check call getCounter method
    contract.methods.getBalance()
        .send({
            gas: 1500000,
            gasPrice: '30000000000000',
            from: account
        })
        .then(function (result) {
            console.log('Tra ve tu ham .send.getBalance()', result.events['GetBalance']);
            console.log('Tra ve tu ham .send.getBalance(0)', result.events['0']);
        })
        .catch(function (err) {
            console.log('Tra ve tu ham .send.getBalance()', err);
        });
}
module.exports = tokenEventMethod;