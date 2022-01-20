const mongoose = require("mongoose");
const addToCartSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    products_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    }]
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("addToCart", addToCartSchema);