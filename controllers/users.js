
const Admin=require('../models/admin')
const User=require('../models/user')
const Weather=require('../models/weather')
const request =require("request")
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
/* GET users listing. */

const createUser=async (req, res)=> {
  
  try{
    
     const userAdd=new User(req.body); 
      userAdd.save().then(async(user)=>{
        console.log('user',user)
        await Admin.findByIdAndUpdate(user.admin,{$push:{users:user}})
        const token =await jwt.sign({userName:user.userName,password:user.password},process.env.CODE); 
        console.log('token',token)
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
          user: 'leahr0040@gmail.com',
          pass: process.env.MAILPASSWORD
          }
        });
      
        const mailOptions = {
          from: 'Leah <noreply.leahr0040@gmail.com>',
          replyTo: `noreply.${user.email}`,
        
          to: user.email,
          subject:user.userName+ ' ברוכים הבאים ',
          text: 'That was easy!'
        };
      
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log('error mail ',error)
            res.status(400).json(error);   
          } 
          else {
            console.log('Email sent: ' + info.response);
          }
        });
        res.status(200).json({user,token:token});
      })
      .catch(err=>{
        console.log('err',err) 
        res.status(400).json(err);
      }) ;
      
  }
  catch(err)
  {
    console.log('err',err)
    res.status(400).json(err);
  } 
};
const getUser=(req, res)=>{
  if(req.auth){
  User.findById(req.params.id).populate({path:"weathers"})
  .then((resulst)=>{
  res.send(resulst)
 })
  .catch( err=>{
          res.send(err)        
      })
}
else{
  res.status(401).send("not authorized!");
}
}
const viewWeather=async(req, res)=>{
  try{
    if(req.auth)
    {
    
    const {cityName}=req.body;
    console.log("req.body",req.body);
    console.log("cityName",cityName);
    console.log("process.env.APIKEY",process.env.APIKEY);
    const options={
      METHOD: 'GET',
      // URL:`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.APIKEY}`
    }
      request(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.APIKEY}`,options,(err, data) => {
      if(err)
      {
        console.log("err",err)
        res.status(500).json(err);
      }
      else{
        
        const body=JSON.parse(data.body) ;
        const newWeather={temp:body.main.temp,weather:body.weather} 
        const options2={
          headers:{authorization:req.headers.authorization},
          body:{...newWeather,userName:req.body.userName, user:req.user},
          json:true
        }
         request.post(`http://localhost:3000/weathers/createWeather`,options2,(err2,data2) => {
          if(err2)
          {
            console.log("err2",err2)
            res.status(400).json(err2);  
          }
          else
          {
            console.log("res",data2.body)
            res.status(200).json({temp:data2.body.temp,weather:data2.body.weather});
          }
        }); 
      } 
    })
    }
  else
  {
    res.status(401).send("not authorized!");
  }
  }
  catch(err)
  {
    console.log("err",err,err.code,res.statusCode)
    res.status(400).json(err);
  } 
}
const deleteWeatherCalling=(options2,req)=>{
  return new Promise((resolve,reject)=>{
    request.post(`http://localhost:3000/weathers/deleteWeather/${req.params.id}`,options2,(err,data) => {
         console.log('6 data',data.body)
         resolve(data);
         reject(err);
        
  })
})
}
const deleteUser=async (req,res)=>{
  try{
  if(req.auth)
  { 
    // console.log("3 *********************deleteuserFun***********************")
    const user=await User.findById(req.params.id);
    if(!user)
    {
      res.status(400).send("couldn't find user"); 
      return;
    }
    // console.log('4 user.weathers',user.weathers)
    Promise.all( [user.weathers.map(async(weather)=>{
      const options2={
        headers:{authorization:req.headers.authorization}, 
        body:{weatherId:weather,userName:user.userName},
        json:true
      }
      //  request.post(`http://localhost:3000/weathers/deleteWeather/${req.params.id}`,options2,(err,data) => {
      //    console.log('6 data',data.body)
      //   if(err)
      //   {
      //     console.log("err",err)
      //     res.status(400).json(err);  
      //   }
     // })
     await deleteWeatherCalling(options2,req)
    })]).then(async()=>{
      await User.deleteOne(user);
    // console.log("7 deleteUserFromFunction")
    await Admin.findByIdAndUpdate(user.admin,{$pull:{users:user._id}})
    // console.log("8 userDeleted",user)
    res.status(200).json(user)
    })
    
  }
  else
  {
    res.status(401).send("not authorized!");  
  }
}
catch(err){
  console.log("err",err)
  res.status(400).json(err);  
}
}

module.exports = {
  createUser,
  getUser,
  viewWeather,
  deleteUser
};
