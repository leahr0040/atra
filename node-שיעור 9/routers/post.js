const router= require('express').Router();
const fs=require('fs');
const bodyParser=require('body-parser');
const { type } = require('os');

 router.post('/user',(req, res) => {
     res.json({'user':req.body})
 })
 router.post('/postWith2params',(req, res) => {
     const fsStram=fs.createWriteStream('new file')
    
     fsStram.write("hello\n")
     console.log("req.body",typeof req.body)
    Object.keys( req.body).forEach((value)=>{
         fsStram.write(`${value}: ${req.body[value]} \n` ) 
     })
     fsStram.close();
     res.status(200).end('finish')
    
})
router.post('/postWith2params/:id',(req, res) => {
   res.send(`id ${req.params.id} other params: ${JSON.stringify (req.body)}`)
})
 module.exports=router;