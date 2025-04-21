import mongoose from "mongoose";

const airplaneSchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    airline: {
        type: String,
        required: true
    },
    airplane_number: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    // airplane_type: {
    //     type: String
    // },
    status: {
        type: String,
        enum: ["Active", "Maintenance", "Inactive"],
        default: "active",
        required : true
    }
}, {timestamps : true})

export const Airplane = mongoose.model("Airplane", airplaneSchema)