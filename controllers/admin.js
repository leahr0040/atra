const User= require("../models/user");
const adminSchema= require("../models/admin");
const jwt = require('jsonwebtoken');
const request =require("request")


const createAdmin=(req, res)=>{
    const admin=new adminSchema(req.body); 
    admin.save()
    .then((adminSchema)=>{
    res.send(adminSchema)
    })
    .catch((err) => {
    res.status(400).json(err);
    })
}
const getAdmin=(req, res)=>{
     User.findById(req.params.id).populate({path:"users"})
     .then((resulst)=>{
     res.send(resulst)
    })
     .catch( err=>{
             res.send(err)        
         })
}
const getMyUsers=(req, res)=>{
    adminSchema.findById(req.params.id)
      .populate({path:'users',populate:{path:'weathers'}})
      .then(admin=>{
        res.json(admin.users);
      })
    .catch(err=>{
      res.status(400).send('eror!' +err);
    })
} 
const CallForDeleteUser= (options,user) =>{
   return new Promise((resolve,reject) =>{
      request.post(`http://localhost:3000/users/deleteUser/${user}`,options,(err,data) => {  
          console.log("2.5 data.body",data.body)
    resolve(data.body );
    reject(err);
        
     })
  })
}


// const deleteMyUsers=async(req, res)=>{
//   try{
    
//     adminSchema.findById(req.params.id)
//     .then(async(admin)=>{
//       //let deletedUsers=[];
     
//      Promise.all( admin.users.map(async(user)=>{
//         const myUser=await User.findById(user);
//         console.log("1 myUser",myUser)
//         const token=await jwt.sign({userName:myUser.userName,password:myUser.password},process.env.CODE)
//         console.log("2 token",token)
//         const options={
//           headers:{authorization:token},
//           body:{userName:myUser.userName},
//           json:true
//         }
//         return await CallForDeleteUser(options,user)
//         // .then(data=>{
//         //   deletedUsers.push(data);
//         //   console.log("*****2.7 a",data)
          
//         // }).catch(err=>{
//         //   res.status(400).send('eror!' +err);
//         // });
        
        
//       }) ).then((data)=>{
//         console.log("9 deletedUsers",data)
//       res.status(200).json(data);
//       })
//     })
//   .catch(err=>{
//     res.status(400).send('eror!' +err);
//   }) 
  
// }
// catch(err)
// {
//   res.status(400).send('eror!' +err);
// }
// }

module.exports=
{
    createAdmin,
    getAdmin,
    getMyUsers,
    deleteMyUsers
}

