'use strict';

const express = require('express');
const routes = require('./src/routes')
const bodyParser = require("body-parser");

const PORT = 8081;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public'));

routes(app);

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
