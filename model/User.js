var mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        min:3
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
});
module.exports= mongoose.model('User',userSchema);