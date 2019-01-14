/**
 * Created by lebamui on 13/01/2019.
 */
require('./contract')("onlycheck", function (err, res) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(res.options,address);
    }

})