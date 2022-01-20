const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (token)=>{
    return new Promise ((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_SECRET_KEY,function(err,decode){
            if(err){
                return reject(err)
            }
            resolve(docode)
        })
    })
}


module.exports = (req,res,next)=>{
    try{
        if(!req.headers.authorization){
            return res.status(400).send({message:"please check the authorization"})
        }

        const bearerToken = req.headers.authorization;

        if(!bearerToken.startsWith("Bearer ")){
            return res.status(400).send({message:"it is not a berarer authorization"})
        }

        const token = bearerToken.split(" ")[1];
        const user = await verifyToken(token) 

    }catch(err){
        return res.status(500).send({message:"server error"})
    }
    next();
    
}