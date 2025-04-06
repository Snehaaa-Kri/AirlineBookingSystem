import mongoose from "mongoose";

const passengerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age : {
        type : Number,
        required: true,
    },
    gender : {
        type : String,
        enum: ["Male", "Female", "Other"],
        required : true
    },
    seat_preference:  {
        type : String,
        enum : ["Window", "Aisle", "Middle"]
    }
}, {timestamps : true})

export const Passenger = mongoose.model("Passenger", passengerSchema);