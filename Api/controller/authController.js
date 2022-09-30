const bcryptjs = require("bcryptjs");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

//@desc POST register
//@route /api/v1/auth/register
//@access public
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all Fields");
  }
  const userAlready=await User.findOne({email})
  if(userAlready){
    res.status(400)
    throw new Error('User Already exist')
  }
});
module.exports = {
  register,
};
