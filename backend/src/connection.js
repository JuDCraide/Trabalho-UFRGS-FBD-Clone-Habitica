const mysql = require('mysql2');

module.exports = {

    dbConnection: function () {

        const connection = mysql.createConnection({
            host: '192.168.0.2',
            user: 'habitica',
            password: '12345678',
            database: 'habitica',
        });
        connection.connect();
        return connection;
    }

};