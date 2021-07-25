// root file in here
// common js modules
//  a system for requiring files
const express = require('express');
require('./services/passport');

// this an ES15 modules
// import express from 'express';
// will listen for requests
const app = express();
require('./routes/authRoutes')(app);

// https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?
// response_type=code
// &redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback
// &scope=profile%20email #information we want
// &client_id=xxxxxxx # identifies our application
// &flowName=GeneralOAuthFlow

// When eve heroku runs our app, it can inject
// enviroment variables. Herokus opportunity for run time config
// we have to wait till last section to figure out port.
const PORT = process.env.PORT || 5000;
// port
// make sure to do ctrl-c
app.listen(PORT);

// mongoose.connect(keys.mongoURI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });