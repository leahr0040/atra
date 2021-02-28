const express=require('express');
const app = express();
const bodyParser=require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.json());
const routers = require('./routers/all')
app.use(routers)


const port= process.env.PORT
app.listen(port,()=>{
    console.log(`hello i'm lisening to ${port}`)
})
module.exports =app

