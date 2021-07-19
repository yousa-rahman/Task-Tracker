const express = require('express');
const bodyParser = require('body-parser');
const {connection} = require('./config/db');
const cors = require('cors');
const {check, validationResult} = require('express-validator');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.post("/register",check('name').not().isEmpty().withMessage("Name is Required"), check('email').not().isEmpty().withMessage("Email is Required").isEmail().withMessage("Please enter a valid Email"), check('password').not().isEmpty().withMessage("Password is Required"), (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    connection.query(`SELECT * FROM users WHERE email="${email}"`, (err, result) => {
        if(err){
            res.status(500).json({err})
        }else if(result[0]){
            res.status(409).json({errors:{[0]:{msg:"User Already Exist"}}})
        }else{
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if(err){console.log(err)}
                connection.query('INSERT INTO users(name, email, password) VALUES (?,?,?)',[name, email, hash],(err, result) => {
                    if(err){
                        res.status(500).json({err})
                    } 
                    else{
                        const token =  jwt.sign({name: name, email: email}, "Please Change This");
                        res.status(201).setHeader('x-auth-token', token).json({result});

                    }
                });
            })
        }
    }) 
})

app.post("/addtask",check('title').not().isEmpty().withMessage("Title is Required"), check('description').not().isEmpty().withMessage("Description is Required"), check('assignee').not().isEmpty().withMessage("Please Assign the task"), (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        const title = req.body.title;
        const description = req.body.description;
        const user_id = req.body.assignee;

        connection.query('INSERT INTO tasks(title, description, user_id) VALUES (?,?,?)',[title, description, user_id],(err, result) => {
        if(err){
            res.status(500).json({err})
        } 
        else{
            res.status(201).json({result});
        }
    });    
})

app.get('/task',(req, res)=>{
    connection.query("SELECT * FROM tasks", (err, result) => {
        if(err){
            res.status(500).json({err});
        }else{
            res.status(200).json({result});
        }
    });
});


app.listen(5000, ()=>{
    console.log("App is listening on PORT 5000");
});