const IrancellDB = require('../DB/MyIrancellDB')

const getUserIDFromUserToken = (userToken) => {
    let getUserIDQuery = `SELECT id FROM users WHERE token = ${JSON.stringify(userToken)}`;

    return new Promise((resolve, reject) => {
        IrancellDB.query(getUserIDQuery, (err, result) => {
            if (err) {
                console.log(`You have error for get user ID => ${err}`);
                return false
            }
            console.log(result);
            resolve(result)
        })
    })
}

module.exports = getUserIDFromUserToken