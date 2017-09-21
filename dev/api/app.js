let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

let root = '/promo/api/';
app.use(root + 'login', require('./controllers/loginController'));

module.exports = app;