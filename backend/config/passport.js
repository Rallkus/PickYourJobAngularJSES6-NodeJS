var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var TwitchtvStrategy = require('passport-twitchtv').Strategy;
var socialKeys = require('../credentials/credentials.json');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // console.log(`id: ${id}`);
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
});

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]'
}, function(email, password, done) {
  User.findOne({email: email}).then(function(user){
    if(!user || !user.validPassword(password)){
      return done(null, false, {errors: {'email or password': 'is invalid'}});
    }
    return done(null, user);
  }).catch(done);
}));


passport.use(new GoogleStrategy({
  clientID: socialKeys.GOOGLEPLUS_CLIENT_ID,
  clientSecret: socialKeys.GOOGLEPLUS_CLIENT_SECRET,
  callbackURL: socialKeys.GOOGLEPLUS_CALLBACK,
  passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    //console.log(profile);
    User.findOne({ 'idsocial' : profile.id }, function(err, user) {
        if (err)
          return done(err);

        // if the user is found then log them in
        if (user) {
            console.log('USER EXISTS');
            return done(null, user);
        } else {
          console.log('USUARIO NO EXISTE');
          var user = new User({
              idsocial: profile.id,
              username: profile.name.givenName,
              email: profile.emails[0].value,
              bio: profile.photos[0].value,
          });
          console.log("user" + user);
          user.save(function(err) {
              if(err){
                console.log(err);
                  return done(null, user);
              }
          });
      }
    });
  }
));

passport.use(new TwitchtvStrategy({
  clientID: socialKeys.TWITCHTV_CLIENT_ID,
  clientSecret: socialKeys.TWITCHTV_CLIENT_SECRET,
  callbackURL: socialKeys.TWITCHTV_CALLBACK,
  scope: "user_read"
},
function(accessToken, refreshToken, profile, done) {
  User.findOne({ 'idsocial' : profile.id }, function(err, user) {
    if (err)
      return done(err);

    // if the user is found then log them in
    if (user) {
        console.log('USER EXISTS');
        return done(null, user);
    } else {
      console.log('USUARIO NO EXISTE');
      console.log(profile);
      console.log(profile.username);
      console.log(profile.email);
      console.log(profile.logo);
      var user = new User({
          idsocial: profile.id,
          username: profile.username,
          email: profile.email,
          bio: profile.logo,
      });
      console.log("user" + user);
      user.save(function(err) {
          if(err){
            console.log(err);
              return done(null, user);
          }
      });
  }
});
}
));



