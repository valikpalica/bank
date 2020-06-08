const mysql = require('mysql');
const config = {
    host: '172.20.10.3',
    user: 'valik1111',
    password: '1111',
    database: 'bank',
};
let connection = mysql.createConnection(config);

module.exports.update = (array) => {
    console.log('update database');
    connection.connect(function (error) {
        if (error) console.log(error);
        else {
            console.log('connection for update sucssesfull');
            array.forEach(item => {
                let update = `update kurs set  buy='${item.buy}',sale = '${item.sale}' where ccy='${item.ccy}';`;
                connection.query(update, function (err, result) {
                    if (err) console.log(err);
                    else {
                        console.log('update sucssesfull');
                    }
                })
            });
            connection.end(function (err) {
                if (err) console.log(err);
                console.log('connection disable');
            });
        }
    })
};