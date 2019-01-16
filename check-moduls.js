/**
 * Created by lebamui on 07/01/2019.
 */
const fs = require('fs');
// //test web3 Connect
// require('./web3/test-connect')(function (err, res) {
//     if (err === undefined) {
//         console.log('Connected');
//     } else {
//         console.log(err);
//     }
// });

// // test create account
// require('./web3/create-account')(function (res) {
//     console.log('Tra ve sau khi create', res);
// });

// // show balance
// require('./web3/show-balance')();
// show balance async
require('./web3/show-balance')(function (err, res) {
    console.log("Err: ", err);
    console.log("Ok: ", res);
});
//
// // check transaction
// require('./web3/send-transaction')(function (err, res) {
//    console.log("Err: ", err);
//     console.log("Ok: ", res);
// });

// create contract
// require('./web3/create-contract')();

// // create contract with contructor
// require('./web3/create-contract')('74C86a188Adce531A66aa497A5A2c027a3930BE3', function (err, deployed) {
//     if (err) {
//         console.log('Deploy contract error: \n', err);
//     } else {
//         console.log(deployed.toString());
//         // fs.writeFileSync('contractInstance.json', JSON.stringify(deployed));
//
//         // console.log(deployed.options);
//         // ==>
//         // { address: [Getter/Setter],
//         //     jsonInterface: [Getter/Setter],
//         //     data: undefined,
//         //     from: undefined,
//         //     gasPrice: undefined,
//         //     gas: undefined }
//         console.log('check ', deployed.options.address);
//     }
// });

// // check call method
// require('./web3/excute-method')('0xCF7Ef231737118c2f771Cba006Ac2757b0d1b27b');

//process.exit(0);