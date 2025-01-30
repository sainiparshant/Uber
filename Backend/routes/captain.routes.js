const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controllers');
const {body} = require('express-validator');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name atleast 3 char long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 char long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be atleast 3 char long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be atleast 3 char long'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['Car', 'Auto', 'Bike']).withMessage('Invalid Vehicle Type')

 ],
 captainController.registerCaptain
);
 
module.exports = router;