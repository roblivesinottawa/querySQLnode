const mysql = require('mysql')

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "*Thisisinsane*86",
    database: "games"
})

module.exports = connection