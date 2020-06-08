module.exports.getFormat = (objinfo) =>{
    let result = '';
    if(objinfo.firstoption =='fromGrivna'){
        result = `${objinfo.sum} UAH = ${objinfo.convert} ${objinfo.money}`;
    }
    else {
        result = `${objinfo.sum} ${objinfo.money} = ${objinfo.convert} UAH`;
    }
    return result;
}