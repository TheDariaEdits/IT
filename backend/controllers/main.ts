import jsonwebtoken, { JwtPayload } from 'jsonwebtoken'
const User = require('../models/User')

const jwt = jsonwebtoken

declare module "jsonwebtoken" {
    export interface JwtPayload {
        id: string;
    }
}

//@desc Main Page
//@route GET /
//@access Public
const getMain = (req:any, res:any ) => {
    res.send('Hello World')
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
    res.json({token})
    
} /*this sends more than one response and needs to be fixed*/

//@desc Profile 
//@route GET /profile
//@access Private
module.exports = {
    getMain,
    getProfile
}