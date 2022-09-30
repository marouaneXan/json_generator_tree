const bcryptjs=require('bcryptjs')
const User = require("../Model/userModel");o_

//@desc POST register
//@route /api/v1/auth/register
//@access public
const register=async(req,res)=>{
    const {name,email,password}=req.body
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please add all Fields");
      }
}
module.exports={
    register
}