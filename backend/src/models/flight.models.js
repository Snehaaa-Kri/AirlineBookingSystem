import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    requred: true
  },
  flightNumber: {
    type: String,
    required : true
  },
  coach_type : {
    type: String,
    enum : ["Economy","Bussiness", "First"],
    required: true
  },
  source_city: {
    type: String,
    requied: true
  },
  destination_city: {
    type: String,
    required: true
  },
  arrivalTime: Date,
  departureTime: Date,
  duration: {
    type : Number   // diff :  arrival -departure (in minutes)
  },
  total_seats : {
    type : Number,
    required : true
  },
  availableSeats: {
    type: Number,
    required: true
  },
  priceperseat_E: {
    type: Number,
    required: true
  },
  priceperseat_B: {
    type: Number,
    required: true
  },
  priceperseat_F: {
    type: Number,
    required: true
  },
  baggageAllowance: {
    type: Number,
    default : 25  //kg
  },
  facilities : {
    type: String,
    required : true
  }
}, {timestamps : true});

export const Flight = mongoose.model("Flight", flightSchema);
