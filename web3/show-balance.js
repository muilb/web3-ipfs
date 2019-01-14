/**
 * Created by lebamui on 07/01/2019.
 */
const Web3 = require('web3');
const wsprovider = require("./providers").wsprovider;

function getAllBalance(cb) {
    var web3 = new Web3();
    web3.setProvider(wsprovider);
    var BN = web3.utils.BN;
    web3.eth.personal.getAccounts().then(function (eths) {
        var i =0;
        eths.forEach(function (e) {
            // var balance;
            web3.eth.getBalance(e).then(function (balance) {
                console.log("---> eth.accounts["+i+"]: " + e + " \tbalance: " + web3.utils.fromWei(new BN(balance).toString(), "ether") + " ether");
            }).catch(function (err) {
                console.log("---> eth.accounts["+i+"]: " + e + " \tbalance: " + "Error on get " + err);
            });
            i++;
        })
    }).catch(function (err) {
        console.log("error on get accounts");
    });
}
// async function showBalance(cb) {
//     var web3 = new Web3();
//     web3.setProvider(wsprovider);
//     web3.eth.personal.getAccounts().then(function (eths) {
//         var i = 0;
//         var result = [];
//         eths.forEach(function(e) {
//             let balance;
//             console.log("---> eth.accounts["+i+"]: " + e + " \tbalance: " + getBalance(e)+ " ether");  // web3.utils.fromWei(getBalance(e), "ether")
//             i++;
//         })
//     });
//
//     async function getBalance(e) {
//         let balance = await web3.eth.getBalance(e);
//         console.log(balance);
//         return web3.utils.BN(balance).toString();
//     }
// }

module.exports = getAllBalance;
