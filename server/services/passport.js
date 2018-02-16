const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then(foundUser => {
          if (foundUser) {
            // user exist
            done(null, foundUser);
          } else {
            // no user, create new
            new User({ googleId: profile.id })
              .save()
              .then(user => done(null, user))
          }
        })
    })
);

// /config/keys.js:
// module.exports = {
//   googleClientID: '',
//   googleClientSecret: '',
//   mongoURI: ''
// }