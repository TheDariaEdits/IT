import mongoose, { Schema } from "mongoose"

const companySchema = new Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    company: {type:String, required:true},
    address: {type:String, unique:true, required:true},
    about: {type:String, required:true},
    services: [{
        name: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String}
        }],
    businesshours: [{
        day: {type: Number, min:1, max:7, required: true}, //mon - sun
        start: {type: String, required:true},
        end: {type: String, required:true}
        }],
    extrainfo: {type:[String]},
    photos: {type:[String]},
    active: {type:Boolean, default: true ,required: true}
})

const CompanyModel = mongoose.model('Company', companySchema)

module.exports = CompanyModel