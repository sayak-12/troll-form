const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '8fHIsdMqRVn3',
    database: "Merndb"
})
app.get("/", (req, res)=>{
    var query = "SELECT * FROM `users`";
    db.query(query, (err, data)=>{
        if (err) {
            res.json(err)
        }
        res.json(data);
    })
})
// app.js
app.post("/submit", (req, res) => {
    var reqbody = req.body;
    var sql = `INSERT INTO users (username, email, mobile, password) VALUES (?, ?, ?, ?)`;
    var values = [reqbody.name, reqbody.email, reqbody.mobile, reqbody.password];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(data);
        }
    });
});


app.listen(3000, ()=>{
    console.log("listening on port 3000");
})
