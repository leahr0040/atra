const User= require("../models/user");
const router= require('express').Router();
const bodyParser=require('body-parser');

router.post('/newUser',(req, res)=>{

    const user=new User(req.body); 
    user.save().then(()=>{
    res.send("User saved")
})
.catch((err) => {
    res.send("err ", err);
})
})

