const express = require('express');
const router = express.Router();

//this page will contain different pages and the responses the server gives to get or post requests coming from those pages

//Right now all pages are set to send their name to the screen if the user makes a get request to the page by navigating
// to, for example, localhost:3000/home. None of these routes are protected yet, meaning anyone can access them.

router.get('/login', function(req, res, next){
     res.send("Login");
});

router.get('/home', function(req, res, next){
    res.send("Your Homepage");
});

router.get('/block', function(req, res, next){
    res.send("Set your website blocking options");
});

router.get('/buddies', function(req, res, next){
    res.send("Find Study Buddies");
});

router.get('/graphs', function(req, res, next){
    res.send("Visually see your progress");
});

router.get('/badges', function(req, res, next){
    res.send("Badges");
});

router.get('/courses', function(req, res, next){
    res.send("Update your course selection and settings");
});

//Allows other files to access the router
module.exports = router;
