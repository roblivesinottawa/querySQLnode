const mysql = require('mysql')
const connection = require('./config')

connection.connect(err => {
    err ? err : console.log("Connected to MySQL Server!")
    let sql = `INSERT INTO games(name, console) VALUES ?`;
    let values = [
        ['GTA V', 'PS4'],
        ['RED DEAD REDEMPTION', 'PS4'],
        ['LAST OF US', 'PS4'],
        ['L.A NOIR', 'PS4']
        ['DARK SOULS III', 'PS4']
    ];
    connection.query(sql, [values], (err, result) => err ? err : console.log(`Number of records inserted ${result.affectedRows}`))
})

