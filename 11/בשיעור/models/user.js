const mongoose = require('mongoose');
const userSchema=mongoose.Schema({ 
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
        unique:true
    },
    password:{type:String},
    age:{type:Number,default:0,min:0,max:120},
    phone:{type:String,trim:false,
//     validator:{(val)=>{
//         return
//     },message:()=>"not valid"
// }
}
})





module.exports =mongoose.model('users',userSchema);