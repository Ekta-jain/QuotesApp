/* eslint-disable no-unused-vars */
const {hash, compare} = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const userModel = require('../models/user');
const SECRET_KEY = 'NOTESAPI';

const signup = async (req, res) => {
  const {inputUsername, inputEmail, inputPassword} = req.body;
  try {
    // Existing user check
    const existingUser = await userModel.findOne({email: inputEmail});
    if (existingUser) {
      return res.status(400).json({message: 'User already exists'});
    }

    // Hashed password
    const HashedPassword = await hash(inputPassword, 10);

    // user creation
    const result = await userModel.create({
      email: inputEmail,
      password: HashedPassword,
      username: inputUsername,
    });

    // Token Generate
    const token = jsonwebtoken.sign({
      email: result.email,
      id: result._id,
    }, SECRET_KEY );

    res.status(201).json({user: result, token: token});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'something went wrong'});
  }
};

const signin = async (req, res) => {
  const {inputEmail, inputPassword} = req.body;
  try {
    // Existing user check
    const existingUser = await userModel.findOne({email: inputEmail});
    if (!existingUser) {
      return res.status(400).json({message: 'User not found'});
    }
    // eslint-disable-next-line max-len
    const mathchPassword = await compare(inputPassword, existingUser.password);
    if (!mathchPassword) {
      res.status(400).json({message: 'Invalid credentails'});
    }
    // Token Generate
    const token = jsonwebtoken.sign({
      inputEmail: existingUser.email,
      id: existingUser._id,
    }, SECRET_KEY );

    res.status(201).json({user: existingUser, token: token});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'something went wrong'});
  }
};

module.exports = {signup, signin};
