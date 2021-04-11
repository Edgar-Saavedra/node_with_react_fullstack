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

app.get('/hi-diana', (req, res) => {
  res.send(`
    <h1>hi diana</h1>
    <img style="width: 300px; height: auto;" src="https://images.unsplash.com/photo-1557948206-7478d769f813?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1100&q=60">
    <ul>
      <li><a href="https://google.com" target="_blank">GO TO GOOGLE!</a></li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
    </ul>
  `);
});

// When eve heroku runs our app, it can inject
// enviroment variables. Herokus opportunity for run time config
// we have to wait till last section to figure out port.
const PORT = process.env.PORT || 5000;
// port
// make sure to do ctrl-c
app.listen(5000);