const userModel = require('../models/user.models');


module.exports.userCreate = async({
    firstname, lastname, email, password
}) =>{ 
    if(!firstname || !email || !password){
        throw new Error("All fields are required");
    }
    const user = userModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password
    });

    return user;
};
