const internet = require('internet-available');
const rp = require('request-promise');
let option = {
    method: 'GET',
    url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
    headers: {},
    json: true,
};
let res = [];

function request() {
    return new Promise((resolve, reject) => {
        rp(option).then(function (response) {
            res = response;
            resolve(response)
        }).catch(() => {
            reject('request err');
        })
    })
}

function convert(money, privatemas) {
    console.log(money, privatemas);
    switch (money.typeOfTransaction) {
        case 'fromGrivna':
            console.log('from Grivna');
            switch (money.typeOfMoneyDoing) {
                case 'buy':
                    console.log('buy')
                    for ( item in privatemas){
                        console.log(money.money,item)
                        if(money.money==item.ccy){

                            return money.sum/item.buy;
                            break;
                        }
                        else{
                            return null;
                        }
                    }
                    break;
                case 'sale':
                    console.log('sale');
                    for ( item in privatemas){
                        console.log(money.money,item.ccy)
                        if(money.money==item.ccy){
                            return money.sum/item.sale;
                            break;
                        }
                        else{
                            return null;
                        }
                    }
                    break;
            }
            break;

        case 'InGrivna':
            switch (money.typeOfMoneyDoing) {
                case 'buy':
                    for (let item in privatemas){
                        if(money.money==item.ccy){
                            return money.sum*item.buy;
                            break;
                        }
                        else{
                            return null;
                        }
                    }
                    break;
                case 'sale':
                    for (let item in privatemas){
                        if(money.money==item.ccy){
                            return money.sum*item.buy;
                            break;
                        }
                        else{
                            return null;
                        }
                    }
                    break;
            }
            break;
    }
}

function test(mass){
    console.log(mass)

}


module.exports = {request, convert,test}