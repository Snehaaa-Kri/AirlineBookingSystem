// models/User.js
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum : ["admin", "user"],
    required: true
  },
  isAdmin: {
    type: Boolean,
    default : false
  },
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true
  },
  phone_number: {
    type: String,
    required : true
  },
  password: { 
    type: String, 
    required: true 
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required : true
  },
  food_type: {
    type: String,
    enum : ["Vegetarian", "Non-vegetarian"],
    required : true
  },
  booked_flights : [{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Booking'
  }],
  address : {
    street : String,
    city :String,
    state : String,
    pin_code : String
  },
  image:{
    type:String,
  },

}, {timestamps: true});

// // Hash password before saving
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

export const User = mongoose.model("User", userSchema);
