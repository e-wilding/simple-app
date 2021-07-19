// const { User } = require('../models/userModel');
// const bcrypt = require('bcrypt');
const testController1 = {};

testController1.test = (req, res, next) => {
  console.log('DEBUG :: test/ controller working');
  // next({ err: "Error" });
  res.locals.fasdf = 1234
  next()
}

module.exports = testController1;