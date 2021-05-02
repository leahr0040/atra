const mongoose = require('mongoose');
const userSchema=mongoose.Schema({ 
    userName:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate:[val=>/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{4,32}$/.test(val),
            'validation of `{PATH}` failed with value `{VALUE}`'
        ]
    },  
    email:{
        type:String,
        required:true,
        trim:true,
        validate:[val=>/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(val),
            'validation of `{PATH}` failed with value `{VALUE}`'
        ]    
    },
    weathers:[{type:mongoose.Schema.Types.ObjectId,ref:"weathers"}],
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"admins",
        required:true
    }
})

module.exports =mongoose.model('mainUsers',userSchema);