import mongoose, { Schema } from "mongoose"

const companySchema = new Schema({
    company: {type:String, required:true},
    address: {type:String, unique:true, required:true},
    photos: {type:[String]},
    about: {type:String, required:true},
    services: [{
        service: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String}
        }],
    businesshours: [{
        day: {type: Date, required: true}, //mon - sun
        periods: [{
          start: {type: Date, required: true},
          end: {type: Date, required: true}
          }]
        }],
        extrainfo: {type:[String]},
})

const CompanyModel = mongoose.model('Company', companySchema)

module.exports = CompanyModel