const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controllers');


router.post('/register',
    [body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name should be atleast 3 char long'),
    body('password').isLength({min: 6}).withMessage('Password should be atleast 6 char long')
],
    userController.registerUser
)


module.exports = router;