const User = require('../models/User')
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

const jwt = jsonwebtoken
const hashedPwd = bcrypt.genSaltSync(10)

//@desc Register a new user
//@route POST /auth/register
//@access Public
const postRegister = async (req:any, res:any ) => {
    const {name, email, password} = req.body
    try {
        const userDoc = await User.create({
          name,
          email,
          password:bcrypt.hashSync(password, hashedPwd),
        });
        res.json(userDoc);
      } catch (e) {
        res.status(422).json(e);
      }

}

//@desc Login user
//@route POST /auth/login
//@access Public
const postLogin = async (req:any, res:any) => {
    const {email, password} = req.body
    const userDoc = await User.findOne({email})
    if (userDoc) {
        const matchedPwd = bcrypt.compareSync(password, userDoc.password)
        if(matchedPwd) {
            jwt.sign({
                email: userDoc.email, 
                id: userDoc._id, 
                name: userDoc.name
            }, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err
                res.cookie('token', token).json(userDoc)
            })
        }else{
            res.status(422).json('Incorrect Password')
        }
    } else {
        res.json('not found')
    }
}

//@desc Logout user
//@route POST /auth/logout
//@access Public
const postLogout = async (req:any, res:any) => {
    res.cookie('token', '').json(true)
}

module.exports = {
    postRegister,
    postLogin,
    postLogout
}