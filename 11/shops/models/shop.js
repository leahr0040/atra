const mongoose = require('mongoose');

const schema=mongoose.Schema({
    name:{type:String,required:true}, 
    description:{type:String,trim:true} ,
    num:{type:Number,min:1,max:1000} ,
    phone:{type:String,
        validate:[val=>/d{3}[-]?\d{3}[-]?\d{4}|\d{2}[-]?\d{3}[-]?\d{4}|\d{1}[-]?\d{3}[-]?\d{6}|\d{1}[-]?\d{3}[-]?\d{2}[-]?\d{2}[-]?\d{2}|\*{1}?\d{2,5}\b/.test(val),
            'validation of `{PATH}` failed with value `{VALUE}`'
        ]},
    address:{type:String}
})


module.exports =mongoose.model('shops',schema);