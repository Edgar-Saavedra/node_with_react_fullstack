// root file in here
// common js modules
//  a system for requiring files
const express = require('express');

// this an ES15 modules
// import express from 'express';
// will listen for requests
const app = express();

// route handler
app.get('/', (req, res) => {
  res.send({
    hi: 'there'
  });
});

// port
app.listen(5000);