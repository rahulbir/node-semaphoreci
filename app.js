'use strict';

const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('Hello world from Distelli & Docker!');
});

module.exports = app;
