/**
 * Created by vw on 2017-08-06.
 */
const mongoose = require('mongoose');
const config = require('../config/database')

const MessageSchema=mongoose.Schema({
    content:{type:string},
    sender:{type:Schema.ObjectId,
            ref:'User'},
    receiver:{type:Schema.ObjectId,ref:'User'},
    time:{type:String}
})

