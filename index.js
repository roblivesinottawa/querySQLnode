const express = require("express")
const mysql = require('mysql')
const connection = require('./config')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("<h1>Hello from Node</h1>")
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


app.listen(port, () => console.log(`server is listening at port ${port}`))
