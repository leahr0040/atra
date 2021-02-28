const router= require('express').Router();
const bodyParser=require('body-parser');
router.use(bodyParser.json());
const jwt = require('jsonwebtoken')

// const dotenv = require('dotenv');
// dotenv.config();

router.post('/signIn',(req, res)=>{
    const user=req.body;
    const token =jwt.sign({firstName:user.fName,lastName:user.lName,password:user.password},process.env.CODE);
    res.send(token);

})
router.post('/verify',(req, res)=>{
    const {token}=req.body;
    
    const user =jwt.verify(token,process.env.CODE);
    res.send(user);

})
module.exports= router