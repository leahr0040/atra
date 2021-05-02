
const User=require('../models/user')
const Weather=require('../models/weather')

/* GET users listing. */

const createWeather=async (req, res)=> {
  try{
    const body=req.body
    if(req.auth)
    {

    const weatherAdd=new Weather({temp:body.temp,weather:body.weather,user:body.user});
    const weather =await weatherAdd.save()  
     await User.findByIdAndUpdate(weather.user,{$push:{weathers:weather}})
    res.status(200).send(weather);
  }
  else
  {
    res.status(401).send("not authorized!"); 
  }
}

  
  catch(err)
  {
    res.status(400).json(eror);
  } 
}

const getMyWeathers=async (req, res)=> {
  if(req.auth)
  {
    
      User.findById(req.params.id)
      .populate('weathers')
      .then(weather=>{
        res.json(weather.weathers);
      })
    .catch(err=>{
      res.status(400).send('eror!' +err);
    })
  }
  else
  {
    res.status(401).send("not authorized!");
  }
}
const deleteWeather=async (req, res) => {
  try{
    const body=req.body
    if(req.auth)
    {
    const weatherDeleted=await Weather.findByIdAndDelete(body.weatherId);
    if(!weatherDeleted)
    {
      console.log("couldn't find weather")
      res.status(400).send("couldn't find weather");  
      return;
    }
    console.log("5 weatherDeleted",weatherDeleted)
    await User.findByIdAndUpdate(req.params.id,{$pull:{weathers:body.weatherId}});
    res.status(200).json(weatherDeleted);
  }
  else
  {
    console.log("not authorized!")
    res.status(401).send("not authorized!"); 
  }
  }

  catch (err)
  {
    console.log("err",err)
    res.status(400).json(err)
  }

}
    


module.exports = {
  createWeather,
  getMyWeathers,
  deleteWeather
};
