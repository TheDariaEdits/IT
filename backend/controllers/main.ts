import jsonwebtoken, { JwtPayload } from 'jsonwebtoken'
const User = require('../models/User')
const download = require('image-downloader')


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
    res.json(req.files)
}

module.exports = {
    getMain,
    getProfile,
    postPhotos,
    postDevicePhotos
}