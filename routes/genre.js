const express = require("express");
const router = express.Router()
const passport = require('passport');
const app = express();

router.get("/", function(req, res){
    if (req.isAuthenticated()) res.render("genre");
    else res.redirect("/login");
  });

module.exports = router;