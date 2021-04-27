require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require('mongoose');
const session = require("express-session");
const passport =require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); 
const app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//
const database= require('./database/db')();
const User= require('./database/user');
const reviews = require('./database/review');




//Route dependency 
const loginRout = require('./routes/login')
const logoutRout = require('./routes/logout')
const signupRout = require('./routes/signup')
const profileRout = require('./routes/profile')
const productRout = require('./routes/product')
const bookRout=require('./routes/book')
const bookSearch=require("./routes/bookSearch")
const failRout = require('./routes/fail')
const landingRout=require('./routes/landing')
const faqRout = require('./routes/faq')
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use('/static/', express.static(__dirname + '/static'));


//using cookies
app.use(session({
    secret:process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
//initializing the session for the user
app.use(passport.initialize());
app.use(passport.session());

//PASSPORT

passport.use(User.createStrategy());


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


//Landing
app.use("/",landingRout)

//login
app.use("/login", loginRout)

//logout
app.use("/logout", logoutRout)

//fail
app.use("/fail", failRout)

//sign up
app.use("/signup", signupRout)

//profile
app.use('/profile', profileRout)


//product
app.use('/product', productRout)

//Book
app.use('/book',bookRout)

//Book Search
 app.use("/Search",bookSearch)

 //FAQ Page
 app.use("/faq",faqRout)

app.listen(process.env.PORT || 3000,()=>console.log("Up and Running.."))