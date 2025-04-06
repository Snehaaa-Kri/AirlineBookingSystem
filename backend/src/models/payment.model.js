import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
  amount: Number,
  method: {
    type: String,
    default : "Stripe",
    required : true
  },
  status: { type: String, enum: ["Success", "Failed", "Pending"], default: "Pending" },
}, {timestamps: true});

export const Payment = mongoose.model("Payment", paymentSchema);
