const mongoose = require("mongoose");

const str = {
    type: String,
    required: true,
    
}

const productSchema = new mongoose.Schema(
    {
        userId: str,
        title: str,
        brand: str,
        price: { type: Number, required: true },
        offPrice: { type: Number, required: true },
        discount: str,
        imgUrl: str,
        color: str,
        description: str,
    }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
