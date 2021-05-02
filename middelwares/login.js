const { json } = require('body-parser');
const jwt = require('jsonwebtoken');
const User=require('../models/user')

const Login=async(req,res,next) =>{
  
    
    try{
      
      // console.log("req.body",req.body)
      // if(req.body.auth===true)
      // {
      //   console.log("yes")
      //   next();
      // }
      // else{
      //   console.log("no")
      req.auth=false
    const getToken=req.headers.authorization
    console.log("getToken",getToken)
    const getUser=req.body;
    console.log("getUser",getUser)
    const user=await User.findOne({userName:getUser.userName})
    console.log("user",user);

    //const token =await jwt.sign({userName:user.userName,password:user.password},process.env.CODE);
    const verifyUser=await jwt.verify(getToken,process.env.CODE);
    console.log("verifyUser",verifyUser)
    if(user.password && user.userName===verifyUser.userName && user.password===verifyUser.password)
    {
        req.auth=true;
        req.user=user
        console.log("yes")
        next();
    }
    else{
      console.log("auth failed")
      res.status(401).json("auth failed")
    }
  }
  //}
  catch(err) {
    console.log("auth failed err",err)
    res.status(400).json(err)
    }
}
module.exports={Login}