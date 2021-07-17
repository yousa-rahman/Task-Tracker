const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_tracker'
});

try {
    connection.connect();
    console.log("Connected to database");
} catch (error) {
    throw error;
}



module.exports = {connection}; 