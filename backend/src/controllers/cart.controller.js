const router = require("express").Router();
const User = require("../models/user.model");
const Product = require("../models/product.model");


router.post("/",async(req,res)=>{
    try{
        const  = await Cart.create(req.body)
    }catch(err){
        return err
    }
})

// router.patch("/:id",async(req,res)=>{
//     try{
//         const user = await User.findById(req.params.id).lean().exec();

//     }catch(err){
//         return err
//     }
// })

// router.delete("/",async(req,res)=>{
//     try{

//     }catch(err){
//         return err
//     }
// })

module.exports = router;