/**
 * Created by vw on 2017-08-09.
 */
var express=require('express');
var router=express.Router();
var User = require('../models/user');
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');

router.post('/signup',function(req,res,next) {

    var user = new User({
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
});
    user.save(function(err,result){
        if(err){
            return res.status(500).json({
                title:"An error occured",
                error:err
            });
        }
        res.status(201).json({
            message:'User created',
            obj:result
        })

    });
});

router.post('/login',function(req,res,next){

    User.findOne({email:req.body.email},function(err,user){
        if(err){
            return res.status(500).json({
                title:'An error occured',
                error:err
            });
        }
        if(!user){
            return res.status(401).json({
                title:'Login failed',
                error:{meesage:"Invalid login credentials."}
            });
        }
        if(!bcrypt.compareSync(req.body.password,user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: "Invalid login credentials."}
            });
        }
        var token=jwt.sign({user: user},'secret',{expiresIn: 7200});
        res.status(200).json({
            token:token,
            userId:user._id
        });
    });
});

router.get('/',function(req,res,next) {

    User.findOne({email: req.query.email}, function (err, user) {
        console.log(req.query.email);
        if (err) {
            console.log("erre");
            return res.status(500).json({
                title: 'An error occured',
                err: err
            });
        }
        if (user) {
            console.log("dups");
            return res.status(200).json({
                unique:false
            });
        }
        console.log("success");
        res.status(200).json({
            unique:true
        });
    });
});
    module.exports = router;
