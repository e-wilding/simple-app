const express = require('express');
const testController1 = require('../controllers/testController1')
const router = express.Router();

router.post('/post',
  testController1.test,
  testController1.test,
  testController1.test,
  testController1.test,
  (req, res) => {
    console.log('DEBUG :: test/post working');
    res.status(200).json({ 'vars': res.locals });
  }
);

router.get('/get',
  testController1.test,
  (req, res) => {
    console.log('DEBUG :: test/get working');
    res.status(200).json({ 'vars': res.locals });
  }
);

module.exports = router;