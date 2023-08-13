const mySql = require('mysql')
const DB = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my-irancell'
})

module.exports = DB