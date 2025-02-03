const blacklistTokenModel = require('../models/blacklistToken.models');
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
        password : hashedPassword,
        vehicle
    });

    const token = captain.generateAuthToken();

    res.status(200).json({ token , captain});
}

module.exports.loginCaptain = async (req,res,next) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(401).json({ errors : errors.array()});
    }

    const {email, password} = req.body;

    const captain = await captainModel.findOne({email}).select('+password');
    if(!captain){
        res.status(401).json({ message: "Invalid Email or Password"});
    }

    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        res.status(401).json({ message : "Invalid Email or Password"});
    }

    const token  = captain.generateAuthToken();
    res.cookie('token', token);

    res.status(200).json({ token , captain});

    
}

module.exports.getCaptainProfile = async(req,res,next) =>{
    res.status(200).json({captain : req.captain});
}

module.exports.logoutCaptain = async (req,res,next) =>{

    const token = req.cookies.token || req.headers.authorization?.split(" ")[ 1 ];

    await blacklistTokenModel.create({ token});

    res.clearCookie('token');

    res.status(200).json({ message: 'Logout Successfully'});
}

