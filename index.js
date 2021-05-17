// root file in here
// common js modules
//  a system for requiring files
const express = require('express');
const passport = require('passport');
require('./authentication');

// this an ES15 modules
// import express from 'express';
// will listen for requests
const app = express();

// internally google strategy, will associate 'google'
// with the instance of google strategy
app.get('/auth/google', passport.authenticate('google', {
  // specifies what access we want to have in the user's
  // profile and also their email
  // note: should give example see google docs for scopes
    scope: ['profile', 'email']
  })
);

// we are going to exchange code for user profile
app.get('/auth/google/callback', passport.authenticate(
    //use google strategy to handle request
    'google',
  )
)

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