const mongoose = require('mongoose');

const schema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    }, 
    users:[{type:mongoose.Schema.Types.ObjectId,ref:"mainUsers"}]
})

module.exports =mongoose.model('admins',schema);