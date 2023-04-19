
//@desc Main Page
//@route GET /
//@access Public
const getMain = (req:any, res:any ) => {
    res.send('Hello World')
}

const getProfile = (req:any, res:any ) => {
    res.json('user info')
}

//@desc Profile 
//@route GET /profile
//@access Private
module.exports = {
    getMain,
    getProfile
}