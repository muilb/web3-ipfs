/**
 * Created by lebamui on 07/01/2019.
 */

// //test web3 Connect
// require('./web3/test-connect')(function (err, res) {
//     if (err === undefined) {
//         console.log('Connected');
//     } else {
//         console.log(err);
//     }
// });

// test create account
require('./web3/create-account')(function (res) {
    console.log('Tra ve sau khi create', res);
});


//process.exit(0);