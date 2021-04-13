// root file in here
// common js modules
//  a system for requiring files
const express = require('express');
require('./authentication');

// this an ES15 modules
// import express from 'express';
// will listen for requests
const app = express();

// When eve heroku runs our app, it can inject
// enviroment variables. Herokus opportunity for run time config
// we have to wait till last section to figure out port.
const PORT = process.env.PORT || 5000;
// port
// make sure to do ctrl-c
app.listen(PORT);