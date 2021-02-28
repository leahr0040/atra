const router= require('express').Router();
const wether=(req, res, next)=>{
    req.wether='cold'
    next();
}
module.exports=wether;