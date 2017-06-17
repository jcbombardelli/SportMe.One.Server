var express = require('express');
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
var _db = null


var app = express();

app.use(express.static('./public'));
app.set('view engine', 'ejs');

var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' })
app.use(jsonParser);
app.use(urlencodedParser)


app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor Iniciado!');
});

//mongodb://<dbuser>:<dbpassword>@ds155490.mlab.com:55490/capiroto
MongoClient.connect('mongodb://admin:sportmeadmin@ds025772.mlab.com:25772/sportme-lead', function (err, db) {
    if (err) {
        throw err;
    }

    require('./routes/leads.route.js')(app, db)
    console.log('banco de dados conectado')
});