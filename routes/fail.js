const express = require("express");
const router = express.Router()
const app = express();

router.get("/", function(req, res){
    // if (!req.isAuthenticated())
     res.render("fail");
    //  else
    //  res.redirect("/");
});

module.exports = router;