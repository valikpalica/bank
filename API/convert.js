module.exports.getConvert =  (option) => {
    let res = 0;
   switch  (option.firstoption) {
        case 'fromGrivna':
            console.log('from Grivna');
            switch (option.secondoption) {
                case 'buy':
                    console.log('buy');
                    console.log(global.cuurency);
                    global.cuurency.forEach(  (item)=> {
                        if (item.ccy == option.money) {
                            res =  option.sum / item.buy;
                            console.log(res);
                        }
                    });
                    break;
                case 'sale':
                    console.log('sale');
                    global.cuurency.forEach(item => {
                        if (item.ccy == option.money) {
                            res= option.sum / item.sale;
                            console.log(res);

                        }
                    });
                    break;
            }
            break;
        case 'InGrivna':
            switch (option.secondoption) {
                case 'buy':
                    global.cuurency.forEach(item => {
                        if (item.ccy == option.money) {
                            res = option.sum * item.buy;
                        }
                    });
                    break;
                case 'sale':
                    global.cuurency.forEach(item => {
                        if (item.ccy == option.money) {
                            res= option.sum * item.sale;
                        }
                    });
                    break;
            }
            break;
    }
    return res;
};
