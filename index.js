// root file in here
// common js modules
//  a system for requiring files
const express = require('express');

// this an ES15 modules
// import express from 'express';
// will listen for requests
const app = express();

// route handler
// get - get info
// post - send info
// put - update
// delete - delete something
// patch - update two or more things.

// root/home = /
// req data from user
// res data to user
app.get('/', (req, res) => {
  // send back a response with data
  res.send({
    hi: 'there'
  });
});

app.get('/greeting', (req, res) => {
  res.send('hi person!');
});

// port
// make sure to do ctrl-c
app.listen(5000);