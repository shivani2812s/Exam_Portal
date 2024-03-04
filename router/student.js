const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User=require('../models/userModel');
const Exam=require('../models/questions');

router.get('/allstudents',async(req,res)=>{
    const students=await User.find();
   
    res.render('allstudents',{students});
})

router.get('/studentdashboard',async(req,res)=>{
    res.render('studentdashboard');
})
module.exports = router;