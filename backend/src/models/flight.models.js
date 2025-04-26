import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  airplane_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airplane",
    required: true
  },
  flightNumber: {
    type: String,
    unique: true,
    required : true
  },
  coach_type : {
    type: String,
    enum : ["Economy","Business", "First"],
    required: true
  },
  source_airport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airport",
    required: true
  },
  destination_airport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airport",
    requied: true
  },
  departure_date: {
    type: Date,
    required: true
  },
  arrival_date: {
    type : Date  //only in round trip
  },
  duration: {
    type : String   //calculated in minutes (arrival - departure)
  },
  total_seats : {
    type : Number,
    required : true
  },
  availableSeats: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required : true
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
    type: String,
    default : 25  //kg
  },
  facilities : {
    type: [String],
    default:[]
  },
  trip_type: {
    type: String,
    enum: ["One Way", "Round Trip"],
    required: true
  },
  status: {
    type: String,
    enum : ["Running", "Cancelled"],
    default: "Running"
  }
}, {timestamps : true});

export const Flight = mongoose.model("Flight", flightSchema);
