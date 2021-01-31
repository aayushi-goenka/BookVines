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

//
const database= require('./database/db')();
const User= require('./database/user');
const reviews = require('./database/review');




//Route dependency 
const loginRout = require('./routes/login')
const signupRout = require('./routes/signup')
const creviewRout = require('./routes/creviews')
const reviewRout = require('./routes/reviews')
const profileRout = require('./routes/profile')
const checkoutRout = require('./routes/checkout')
const addRout = require('./routes/book')
const productRout = require('./routes/product')
const genreRout = require('./routes/genre')
const bookRout=require('./routes/book')
const bookSearch=require("./routes/")


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use('/static/', express.static(__dirname + '/static'));
// app.use('/images/', express.static(__dirname + '/images'));

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




app.get("/", function(req, res){
  
    res.render("landing");
  
  
});

//login
app.use("/login", loginRout)


//sign up
app.use("/signup", signupRout)


//CREVIEWS( ADD OR READ)
app.use('/creviews', creviewRout)


//review
app.use('/reviews', reviewRout)


//profile
app.use('/profile', profileRout)


//chekout
app.use('/checkout', checkoutRout)


//add
app.use('/add', addRout)


//product
app.use('/product', productRout)


//genre
app.use('/genre', genreRout)

//Book
app.use('/book',bookRout)

//Book Search
app.use("/Search",)

app.listen(process.env.PORT || 5000,()=>console.log("Up and Running.."))