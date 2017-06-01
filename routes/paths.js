const express = require('express');
const router = express.Router();

//this page will contain different pages and the responses the server gives to get or post requests coming from those pages

//Ex this would print "Login" to the screen if the user makes a get request to the page by navigating
// to, localhost:3000/login.
//
//router.get('/login', function(req, res, next){
//  res.send("Login");
//});


//Allows other files to access the router
module.exports = router;
