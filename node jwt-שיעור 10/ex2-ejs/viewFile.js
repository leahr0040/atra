const router= require('express').Router();
const bodyParser=require('body-parser');
const app = require('../app');
router.use(bodyParser.json());


router.post('/viewDetails',(req, res)=>{
    const details=req.body;
    res.render('index.ejs',{name: details.name,phone: details.phone,address: details.address});

})
module.exports= router