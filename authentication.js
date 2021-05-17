const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20')
  .Strategy;
const keys = require('./config/keys')

// Generic register: "hey passport, use this Strategy"
// user clicks button
// sent to google
// user grants perms
// google sends the back with access token
passport.use(new GoogleStrategy({
    // needs a client ID & Client Secret
    clientID: keys.googleClientID,
    clientSecret: keys.googleCLientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    // if we had asked to read, email
    // contact list, do something on users behalf
    // that is the purpose of this. In the past
    // this user said to read their profile.
    console.log('accessToken', accessToken);
    // undefined
    // allows us to automatically re-access the
    // access token again
    // not we should look more into how this works more
    // refresh token allows us to re-access the acocunt
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
    // server waits for us to do something
  })
);

