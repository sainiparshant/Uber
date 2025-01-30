const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required: true,
            minlength: [3 , 'First name atleast 3 char long']
        },
        lastname:{
            type: String,
            minlength: [3 , 'last name atleast 3 char long']
        }
    },
    email: {
        type: String,
        required : true,
        required: true,
        unique  :true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum:['active' , 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color:{
            type: String,
            required: true,
            minlength: [ 3 , 'Color must be atleat 3 char long'],
        },
        plate:{
            type: String,
            required: true,
            minlength: [ 3 , 'Plate must be atleat 3 char long'],
        },
        capacity:{
            type:Number,
            required: true,
            minlength: [1, "Capacity must be atleast 1 "],
        },
        vehicleType:{
            type:String,
            required: true,
            enum : ['Car', 'Auto','Bike'],
        },

    },
    location: {
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        }
    }

});


captainSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET, { expiresIn : '24h'})
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;