const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db',
});

connection.connect((err) => {
    if(err) throw err;
});

module.export = connection;