const mysql = require('mysql');
const config = {
    host: '172.20.10.3',
    user: 'valik1111',
    password: '1111',
    database: 'bank',
};
let connection = mysql.createConnection(config);

module.exports.getDatabase =  async () => {
    console.log('get database');
    connection.connect(function (err) {
        if (err) return console.error('Error ' + err.message);
        else {
            console.log('Connection for database');
            connection.query('select * from kurs;',    async function (error, result, fileds) {
                console.log('result',result);
                global.select = await result;
            });
            connection.end(function (error) {
                if (error) return console.error('Error ' + error.message);
                else {
                    console.log('disable');
                }
            })
        }
    });

};
