const express = require('express');
const app = express();
const hbs = require('hbs');
const HbsExp = require('express-handlebars');
const body = require('body-parser');
const urlparser = body.urlencoded({extended: false});
const {request, convert, test} = require('./module');
const {getCuurency} = require('./API/getCuurency');
const {getDatabase} = require('./API/getdatabase');
const {getConvert} = require('./API/convert');
const {getFormat} = require('./API/formatstring');
const {update} = require('./API/updatedatabase');
app.use(body.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.engine('hbs', HbsExp({
    layoutsDir: 'views/layouts',
    defaultLayout: 'layout.hbs',
    extname: 'hbs'
}));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', async function (req, res) {
    await getCuurency();
    console.log(global.cuurency);
    if(global.stauscode==200){
        update(global.cuurency);
        res.render('main.hbs',{
            value:global.cuurency[0],value1:global.cuurency[1],value2:global.cuurency[2],
        })
    }
    else {
        if(global.select!== undefined){
            res.render('main.hbs',{
                value:global.select[0],value1:global.select[1],value2:global.select[2],
            })
        }
    }
});
app.get('/bank', function (req, res) {
    res.redirect('/');
});
app.get('/money', function (req, res) {
    res.render('money.hbs');
});
app.post('/money', urlparser,async function (req, res) {
    let {
        inlineRadioOptions,
        inlineRadioOptions1,
        money,
        sum,
    } = req.body;
    let convert={
        firstoption :inlineRadioOptions,
        secondoption: inlineRadioOptions1,
        money,
        sum
    };
    console.log(convert);
    let s = await getConvert(convert);
    console.log('res is',s);
    convert['convert'] = s;
    let format=await getFormat(convert);
    console.log(format);
    res.render('money.hbs',{visible:true,format:format});
});

app.listen(8080, async () => {
    await getDatabase();
    console.log('server has been started');
});