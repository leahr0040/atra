const express = require('express');
const router = express.Router();
const admin = express.Router();
const user=express.Router();
const weather=express.Router();
const userRouter=require('./controllers/users');
const adminRouter=require('./controllers/admin');
const weatherRouter=require('./controllers/weathers');
const login=require('./middelwares/login');
const bodyParser = require("body-parser");
router.use(bodyParser.json())



admin.post('/createAdmin',adminRouter.createAdmin)
admin.post('/createAdmin/:id',adminRouter.getAdmin)
admin.get('/getMyUsers/:id',adminRouter.getMyUsers)
admin.get('/deleteMyUsers/:id',adminRouter.deleteMyUsers)




user.post('/createUser',userRouter.createUser)
user.post('/getUser/:id',userRouter.getUser)
user.post('/viewWeather',login.Login,userRouter.viewWeather)
user.post('/deleteUser/:id',login.Login,userRouter.deleteUser)

 weather.post('/createWeather',login.Login,weatherRouter.createWeather)
weather.post('/getMyWeathers/:id',login.Login,weatherRouter.getMyWeathers)
weather.post('/deleteWeather/:id',login.Login,weatherRouter.deleteWeather)

router.use('/admins',admin)
router.use('/users',user)
router.use('/weathers',weather)
module.exports =router;
 