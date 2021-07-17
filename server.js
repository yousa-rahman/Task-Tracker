const express = require('express');
const {connection} = require('./config/db.js');


const app = express();


// connection.query('INSERT INTO users(name, email, password) VALUES ("Yousuf", "yousa.rahman@mail.com", "12345")',(err, res, fields) => {
//     if(err) throw err;
//     console.log(res);
// });
connection.query('SELECT * FROM users',(err, res, fields) => {
    if(err) throw err;
    console.log(res);
});


app.listen(5000, ()=>{
    console.log("App is listening on PORT 5000");
});