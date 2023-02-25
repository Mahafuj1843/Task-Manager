const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    tokens: { 
        token: {type:String}, 
        createdAt: {type:Date},
        expiresAt: {type:Date}
    }
  },{timestamps: true, versionKey: false}
  );

  UserSchema.pre("save", async function(next){
    if (!this.isModified("password")) {
        return next();
    }
    const salt = bcrypt.genSaltSync(10);
    this.password = await bcrypt.hashSync(this.password, salt);
    next();
  })

  const User = mongoose.model("User", UserSchema)
  module.exports=User