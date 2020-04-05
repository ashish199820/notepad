const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({

    title:{
        type:String,
    },
    content:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    }
})
module.exports = mongoose.model('Note',noteSchema);