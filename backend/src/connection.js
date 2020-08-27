const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '192.168.0.5',
    user: 'habitica',
    password: '12345678',
    database: 'habitica',
});

connection.connect((err) => {
    if(err) throw err;
});

module.export = connection;