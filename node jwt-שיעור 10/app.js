const express=require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.set('view engine','ejs');
const router1=require('./ex1-jwt/api')
const router2=require('./ex2-ejs/viewFile')
app.use(router1);
app.use(router2);

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`hello i'm lisening to ${port}`)
})
module.exports =app
