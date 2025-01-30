const captainModel = require('../models/captain.models');
const captainServices = require('../services/captain.services');
const { validationResult } = require('express-validator');


module.exports.registerCaptain = async (req,res,next) =>{   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(401).json({ errors: errors.array()});
    }

    const {fullname, email, password, vehicle} = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if(isCaptainAlreadyExist){
        res.status(401).json({ message: "Email Already Registered!"});
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainServices.captainCreate({
        fullname,
        email,
        password,
        vehicle
    });

    const token = captain.generateAuthToken();

    res.status(200).json({ token , captain});
}


