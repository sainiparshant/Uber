const bcrypt = require('bcrypt');
const jwt   = require('jsonwebtoken');
const blackListedModel = require('../models/blacklistToken.models');  
const captainModel = require('../models/captain.models');

module.exports.authUser = async (req,res,next) =>{
    const token  = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    if(!token){
        return res.status(401).json({message : "Unauthorized user"});
    }

    const isBlackListed = await blackListedModel.findOne({ token : token });

    if(isBlackListed){
        return res.status(401).json({ message: "Unauthorized "});
    }

    try {

        const decoded = jwt.verify( token, process.env.JWT_SECRET );
        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();

    } catch (error) {
        res.status(401).json({ message : "Unauthorized access"});
    }
}


module.exports.authCaptain = async (req,res,next) =>{
    const token  = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    if(!token){
        return res.status(401).json({message : "Unauthorized user"});
    }

    const isBlackListed = await blackListedModel.findOne({ token : token });

    if(isBlackListed){
        return res.status(401).json({ message: "Unauthorized "});
    }

    try {

        const decoded = jwt.verify( token, process.env.JWT_SECRET );
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;
        return next();

    } catch (error) {
        res.status(401).json({ message : "Unauthorized access"});
    }
}