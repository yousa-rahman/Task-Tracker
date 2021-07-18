const express = require('express');
const bodyParser = require('body-parser');
const {connection} = require('./config/db');
const cors = require('cors');


const app = express();


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.post("/register", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    connection.query(`SELECT * FROM users WHERE email="${email}"`, (err, result) => {
        if(err){
            res.status(500).json({err})
        }else if(result[0]){
            res.status(409).send();
        }else{
            connection.query('INSERT INTO users(name, email, password) VALUES (?,?,?)',[name, email, password],(err, result) => {
                if(err){
                    res.status(500).json({err})
                } 
                else{
                    console.log(result);
                    res.status(201).json({result});
                }
            });
        }
    })
    
    
    
})




app.listen(5000, ()=>{
    console.log("App is listening on PORT 5000");
});