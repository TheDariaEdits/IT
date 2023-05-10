import jsonwebtoken, { JwtPayload } from 'jsonwebtoken'
import mongoose from 'mongoose'
const User = require('../models/User')
const Company = require('../models/Company')
const download = require('image-downloader')
const fs = require('fs')


//@desc Main Page
//@route GET /
//@access Public
const getMain = (req:any, res:any ) => {
    res.send('Hello World')
}

//@desc Profile 
//@route GET /profile
//@access Private
const jwt = jsonwebtoken

declare module "jsonwebtoken" {
    export interface JwtPayload {
        id: string;
    }
}

const getProfile = (req:any, res:any ) => {
    const {token} = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userData: JwtPayload) => {
            if(err) throw err
            const {name,email,_id} = await User.findById(userData.id)
            res.json({name,email,_id})
        })
    }else {
        res.json(null)
    }
}

//@desc Upload Photo by Link
//@route POST /upload-by-link
//@access Private
const postPhotos = async (req:any, res:any ) => {
    const {link} = req.body
    const newName = 'photo' + Date.now() + '.jpg'
    await download.image({
        url: link,
        dest: __dirname + '/../uploads/' + newName
    })
    res.json(newName)
}

//@desc Upload Photo from Device
//@route POST /upload
//@access Private
const postDevicePhotos = (req:any, res:any) => {
    const uploadedFiles = []
    for (let i = 0; i < req.files.length; i++){
        const {path, originalname} = req.files[i]
        const parts = originalname.split('.')
        const ext = parts[parts.length - 1]
        const newPath = path + '.' + ext
        fs.renameSync(path, newPath)
        uploadedFiles.push(newPath.replace('uploads/', ''))
    }
    res.json(uploadedFiles)
}

//@desc Add new company
//@route POST /companies
//@access Private
const postCompanies = (req:any, res:any ) => {
    const {token} = req.cookies
    const {details, addedPhotos, hours} = req.body
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, userData: JwtPayload) => {
        if (err) throw err
        const companyDoc = await Company.create({
          owner: userData.id,
          company: details.companies,
          address: details.address,
          about: details.about,
          services: details.services,
          businesshours: hours,
          extrainfo: details.extrainfo,
          photos: addedPhotos
        })
        res.json(companyDoc) 
      });
}



//     services: [{
//         service: {type: String, required: true},
//         price: {type: Number, required: true},
//         description: {type: String}
//         }],
//     businesshours: [{
//         day: {type: Number, min:1, max:7, required: true}, //mon - sun
//         start: {type: String, required:true},
//         end: {type: String, required:true}
//         }],

module.exports = {
    getMain,
    getProfile,
    postPhotos,
    postDevicePhotos,
    postCompanies
}