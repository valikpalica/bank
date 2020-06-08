const request = require('request');


let option = {
    method: 'GET',
    url:'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
    headers: {},
};

module.exports.getCuurency = async () => {
  await  request(option,function (err,response,body){
        if (err) console.log(err);
        if(response.statusCode==200){
            global.stauscode = response.statusCode;
            global.cuurency = JSON.parse(body);
            global.cuurency.pop();
        }
    })
};