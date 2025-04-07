import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
  },
  flight_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Flight" 
  },
  passengers: [
    {
      name: String,
      age: Number,
      gender: String,
      food_type: String,
    }
  ],
  total_amount: {
    type: Number,
    required: true
  },
  booking_date : {
    type : Date
  },
  status: { 
    type: String, 
    enum: ["Pending", "Confirmed", "Cancelled"], 
    default: "Pending" 
  },
  paymentStatus: { 
    type: String, 
    enum: ["Pending", "Completed", "Failed"], 
    default: "Pending" 
  },
}, {timestamps: true});

export const Booking = mongoose.model("Booking", bookingSchema);
