import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
    name: {type:String, required:true},
    email: {type:String, unique:true, required:true},
    password: {type:String, required:true},
    role: {type:String, default: 'client', required: true},
    active: {type:Boolean, default: true, required: true}
})

const userModel = mongoose.model('User', UserSchema)

module.exports = userModel