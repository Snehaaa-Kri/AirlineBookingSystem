import mongoose from "mongoose";

const airportSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    code : {
        type: String,
        required : true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required : true
    },
    country : {
        type: String,
        required : true
    },
    pincode : {
        type : Number,
        required : true
    }
}, {timestamps : true});

export const Airport = mongoose.model("Airport", airportSchema)