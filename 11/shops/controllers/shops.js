const express = require('express');
const router = express.Router();
const bodyParser= require('body-parser');
router.use(bodyParser.json())
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
mongoose.connect(process.env.DB_CONNECT,options)
const Shop=require('../models/shop')

/* GET users listing. */
router.post('/add', (req, res)=> {
  console.log('req.body',req.body);
  console.log('req.body',req.params);
  const {shop}=req.body;
  const shopAdd=new Shop(shop);
  shopAdd.save().then(()=>{
    res.send('added');
  })
  .catch(err=>{
    res.send('eror!' +err);
  })
  
});
router.get('/:id', (req, res)=> {
  console.log('req.params.id',req.params.id);
  mongoose.connection.db.collection('shops', function (err, collection) {
    if(err)
    res.send('eror!' +err);
    collection.findOne({_id:req.params.id}),(err, data)=>{
      if(err)
      res.send('eror!' +err);
      res.send(data)
    }});  
})




router.get('/', (req, res)=> {
  mongoose.connection.db.collection('shops', function (err, collection) {
    console.log('req.query',req.query)
    if(err)
    res.send('eror!' +err);
    collection.find(req.query).toArray((err, data)=>{
      if(err)
      res.send('eror!' +err);
      res.send(data)
    });  
})

});



module.exports = router;
