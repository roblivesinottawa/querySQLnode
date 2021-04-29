const express = require("express")
const mysql = require('mysql')


const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("<h1>Hello from Node</h1>")
})

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "*Thisisinsane*86",
    database: "games"
})

connection.connect(err => {
    err ? err : console.log("Connected to MySQL Server!")
    connection.query(
        `CREATE DATABASE IF NOT EXISTS games`, 
        () => err ? err : console.log("DATABASE CREATED!")
    )
})

connection.connect(err => {
    err ? err : console.log("Connected to MySQL Server!")
    let sql = ` CREATE TABLE games(
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255),
                console VARCHAR(255)
                )`;
    connection.query(sql, (err, result) => err ? err : console.log("TABLE CREATED!"))
})

connection.connect(err => {
    err ? err : console.log("Connected to MySQL Server!")
    let sql = `INSERT INTO games(name, console) VALUES ?`;
    let values = [
        ['GTA V', 'PS4'],
        ['RED DEAD REDEMPTION', 'PS4'],
        ['LAST OF US', 'PS4'],
        ['L.A NOIR', 'PS4']
        ['DARK SOULS III', 'PS4']
    ]
    connection.query(sql, (err, result) => err ? err : console.log("1 RECORD INSERTED!"))
})










app.listen(port, () => console.log(`server is listening at port ${port}`))
