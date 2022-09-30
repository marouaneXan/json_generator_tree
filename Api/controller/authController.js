const bcrypt = require("bcryptjs");
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
  const userAlready = await User.findOne({ email });
  if (userAlready) {
    res.status(400);
    throw new Error("User Already exist");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(200).json(user)
  }else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc POST login
//@route /api/v1/auth/login
//@access public
const login = asyncHandler(async (req, res) => {
  const {email,password}=req.body
  if(!email || !password){
    res.status(400)
    throw new Error('Please add all fields')
  }
  const user=await User.findOne({email})
  const verifyPassword=await bcrypt.compare(password,user.password)
  if(user && verifyPassword){
    res.status(201).json({
      message:"Create new account successfully",
      id:user._id
    })
  }else{
    res.status(400)
    throw new Error("Invalid user data");
  }
});
module.exports = {
  register,
  login
};
