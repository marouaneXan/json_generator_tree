const bcryptjs=require('bcryptjs')
const User = require("../Model/userModel");

//@desc POST register
//@route /api/v1/auth/register
//@access public
const register=async(req,res)=>{
    const {fName,lName,email,password}=req.body
    res.send(req.body)
}
module.exports={
    register
}