const passport = require('passport');

module.exports = (app) => {
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
  );
};
