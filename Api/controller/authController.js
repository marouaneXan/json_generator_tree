const bcryptjs=require('bcryptjs')
const User = require("../Model/userModel");

//@desc POST register
//@route /api/v1/auth/register
//@access public
const register=async(req,res)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
        res.status(400).json('Please add all fields')
    }
}
module.exports={
    register
}