const express= require('express');
const Student = require('../models/student')
const router = express();

const { body, validationResult } = require("express-validator");
const  jwt = require('jsonwebtoken');
const JWT_SECRET ="iamabadboy"; 

// student login get api /login
router.post('/login',
[
  body("email", "Enter a valid email").isEmail(),
    body("rollNo", "Roll no cant be blank").exists(),
], 
async(req,res)=>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const {email,rollNo}= req.body;
    let student = await Student.findOne({email:email});
    if(!student){
      return res.status(400).json({error:"please login with correct credentials"});
    }
    const password = student.rollNo;
    if(password!=rollNo){
      return res.status(400).json({error:"please login with correct rollNo credentials"})
    }
    const data={
      student:{
        id:student.id,
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
      res.json({authToken})
    } catch (error) {
      console.log(error)
      res.status(500).send("some error occured")
    }
    
})
