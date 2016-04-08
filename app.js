'use strict';

const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('Hello world from Distelli & Docker!');
});

app.get('/test', function(req, res){
	res.send('We are testing an endpoint to break a test.');
});

module.exports = app;
