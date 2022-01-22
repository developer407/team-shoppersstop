const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema(
    {
        username:{type:String,required:false},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        gender:{type:String,required:false},
        mobile:{type:Number,required:false},
        roles:[{type:String,required:true}],
        product_id:[{type:mongoose.Schema.Types.ObjectId,ref:"product",required:false}]
    },
    {
        versionKey:false,
        timestamps:true
    }
);


userSchema.pre("save",function(next){
    if(!this.isModified("password")){
        return next();
    }

    const hash = bcrypt.hashSync(this.password,8)
    this.password = hash;
    return next();
})


userSchema.methods.checkPassword = function(password){
   const match =  bcrypt.compareSync(password,this.password)
   return match
}

module.exports = mongoose.model("user",userSchema)