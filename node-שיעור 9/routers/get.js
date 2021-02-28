const router= require('express').Router();
const wether= require('../middlewares/whether')
const add=(p1,p2)=>{
    return p1+p2
}

 router.get('/user/:id',wether,(req, res) => {
     if(req.wether=='cold')
     console.log("it's winter now")
    else if(req.wether=='hot')
     console.log("it's summer now")
    else
     console.log("unknown wether")
     res.send(`hello ${req.params.id}`)
 })
 router.get('/queryWith2Params',async (req, res) => {
     let obj=new Object(req.query) ;
    const additon= await add(Number(obj.p1) ,Number(obj.p2))
    res.send(`hello ${additon}`)
})

module.exports=router;