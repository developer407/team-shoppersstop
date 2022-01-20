const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config();
const {body,validationResult} = require("express-validator");
const formatErrors = require("../utils/errors");


const newToken = (user)=>{
    return jwt.sign({user:user},process.env.JWT_SECRET_KEY,{expiresIn:60*5})
}


const register = async(req,res)=>{
    try{

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).send({message:formatErrors(errors.array())})
        }


        let user = await User.findOne({email:req.body.email}).lean().exec();

        let username = await User.findOne({username:req.body.username})

        if(user || username){
            return res.status(400).send({message:"user already exists"})
        }

        user = await User.create(req.body);
        
        const token = newToken(user)
        res.status(201).send({user,token})

    }catch(err){
        return res.status(500).send({message:"server error"})
    }
    
}

const login = async(req,res)=>{
    try{
        
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).send({message:formatErrors(errors.array())})
        }

        
        let user = await User.findOne({email:req.body.email});

        if(!user){
            return res.status(400).send({message:"user does not exists"})
        }

        const match =  user.checkPassword(req.body.password)

        if(!match){
            return res.status(400).send({message:"please enter the correct password"})
        }

        const token = newToken(user);
        return res.status(200).send({user,token})

    }catch(err){
        return res.status(500).send({message:"server error"})
    }
}


module.exports = {register,login,newToken}