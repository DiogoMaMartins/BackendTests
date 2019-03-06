const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'newuser',
    database: 'mydb'
});
 
// connect to database
mc.connect();

module.exports = mc; 
