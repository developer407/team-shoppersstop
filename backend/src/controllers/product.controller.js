const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const User = require("../models/user.model");


router.post("/", async(req, res) => {
    try {
        const userId = req.body.userId;
        const isUser = await User.findById(userId).lean().exec();
        if (!isUser)
            return res.status(400).send({ error: "user is not exist" });
        const product = await Product.create(req.body);
        return res.status(201).send(product);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});


router.get("/", async (req, res) => {
    try {
        const product = await Product.find().lean().exec();
        return res.status(201).send(product);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById({_id:req.params.id}).lean().exec();
        console.log(product)
        return res.status(200).send(product);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});


router.patch("/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const userId = req.body.userId;
        let product = await Product.findById(productId).lean().exec();
        const user = await User.findById(userId).lean().exec();
        if (!userId)
            return res.status(402).send({error:"userId is require for updating product"})
        if (!product)
            return res.status(400).send({ error: "product is not exist" });
        else if (!user)
            return res.status(401).send({ error: "user is not exist" })
        if (userId.toString() !== product.userId.toString())
            return res.status(403).send({error:"you can not update this product"})
        
         product = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        return res.status(201).send(product);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const userId = req.body.userId;
        let product = await Product.findById(productId).lean().exec();
        const user = await User.findById(userId).lean().exec();
        if (!userId)
            return res.status(402).send({error:"userId is require for updating product"})
        if (!product)
            return res.status(400).send({ error: "product is not exist" });
        else if (!user)
            return res.status(401).send({ error: "user is not exist" })
        if (userId.toString() !== product.userId.toString())
            return res.status(403).send({ error: "you can not update this product" })
        
        
         product = await Product.findByIdAndDelete(req.params.id);
        return res.status(201).send({ message: "product deleted successfuly", data: product });
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;