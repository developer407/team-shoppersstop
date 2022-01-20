const express = require("express");
const app = express();
const {body,validationResult} = require("express-validator")
const {register,login} = require("./controllers/authentication.controller")
const passport = require("./config/passport");
const productController = require("./controllers/product.controller")
app.use(express.json())

app.use("/products",productController)

app.use(passport.initialize());

passport.serializeUser(function (
    user, callback) {
    callback(null,
        user
    );
})

passport.deserializeUser(function (user, callback) {
    callback(null,
        user
    );
})

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/google/failure'
    }), (req, res) => {
        return res.status(201).json({
            user: req.user.user,
            token: req.user.token
        });
    });

app.get("/auth/google/failure", async (req, res) => {
    return res.send("failure");
});





app.post("/register",
body("username").isLength({min:3}).withMessage("user name must have atleast 3 characters"),
body("email").isEmail().withMessage("please enter the valid email address"),
body("password").isStrongPassword().withMessage("please enter strong password"),
body("gender").custom((value)=>{
    if(value != "male" && value != "female" && value != "other"){
        throw new Error
    }
    return true;
}),
body("role").custom((value)=>{
    if(value != "customer" && value != "seller"){
        throw new Error
    }

    return true
}),
body("mobile").isLength({min:10,max:10}).withMessage("this is a incorrect number"),
register);



app.post("/login",
body("email").isEmail().withMessage("please enter the valid email address"),
body("password").notEmpty().withMessage("please enter the  password")
,login);


module.exports = app