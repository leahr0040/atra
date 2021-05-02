const mongoose = require('mongoose');

const weatherSchema=mongoose.Schema({
    temp:{
        type:Number,
        required:true,
    },
    weather:[{
        type:Object
    }] 
        // {
        //     id: Number,
        //     main: String,
        //     description: String,
        //     icon: String
        // }
    , 
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"mainUsers",
        required:true
    }
})

module.exports =mongoose.model('weathers',weatherSchema);