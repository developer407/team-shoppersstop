require("dotenv").config();
const {v4: uuidv4} = require('uuid');
const User = require("../models/user.model");
const passport = require('passport');
const {newToken} = require('../controllers/authentication.controller');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:1234/auth/google/callback",
        userProfileURL: "https://**www**.googleapis.com/oauth2/v3/userinfo",
        passReqToCallback: true
    },

    async function (request, accessToken, refreshToken, profile, done) {
        console.log(profile)
        let user = await User.findOne({
            email: profile._json.email
        }).lean().exec()

        console.log(profile)

        if (!user) {
            user = await User.create({
                email: profile._json.email,
                password: uuidv4(),
                role: ["customer"],
            });
        }
        const token = newToken(user);

        return done(null,{user,token});
    }
));
module.exports = passport; 