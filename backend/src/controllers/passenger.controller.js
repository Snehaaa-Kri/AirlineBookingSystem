import { Passenger } from "../models/index.js";

const addPassenger = async (req, res) => {
    try{
        const {name, age, gender, seat_preference} = req.body;

        //validation
        if(!name || !age || !gender || !seat_preference){
            return res.status(402).json({
                success : false,
                message: "All fields are required"
            })
        }

        //create and save into db
        const passenger = Passenger.create({
            name, age, gender, seat_preference
        })
        console.log(passenger);

        return res.status(200).json({
            success: true,
            message : "Passenger added successfully"
        })

    }
    catch(err){
        console.log("Error in adding passenger: ", err);
        return res.status(400).json({
            success: false, 
            message : "Failed to add passenger. Try again!"
        })
    }
}

const deletePassenger = async (req, res) => {
    try{
        const passenger_id = req.params.id;
        const deleted_passenger = await Passenger.findByIdAndDelete(deleted_passenger);

        if(!deleted_passenger){
            return res.status(404).json({
                success: false,
                message: "Passenger not found!"
            })
        }
        res.status(200).json({
            success: true,
            message: "Passenger deleted successfully!"
        })
    }
    catch(err){
        console.log("Error deleting passenger: ", err);
        return res.status(500).json({
            success: false,
            message: "Error in deleting passenger. Try again!"
        })
    }
}

const updatePassenger = async (req, res) => {
    try{
        const passenger_id = req.params.id;
        const updates = req.body;

        const updated_details = await Passenger.findByIdAndUpdate(passenger_id, updates, {new: true});

        if(!updated_details) {
            return res.status(404).json({
                success: false,
                message: "Passenger not found!"
            })
        }
        res.status(200).json({
            success: true,
            message: "Passenger details updated successfully!"
        })
    }
    catch(err){
        console.log("Error in updating passenger details: ", err);
        return res.status(500).json({
            success: false,
            message: "Passenger details updation failed. Try again!"
        })
    }
}

const getAllPassengers = async(req, res) => {
    try{
        const all_passengers = await Passenger.find();
    
        if(all_passengers.length === 0){
            return res.status(200).json({
                success: true,
                message: "No passengers found",
                data: []
            })
        }
        res.status(200).json({
            success: true,
            message: "All passengers fetched successfully!",
            data: all_passengers
        })
    }
    catch(err){
        console.log("Error in fetching all passengers: ", err);
        return res.status(400).json({
            success: false,
            message: "Failed to fetch all passengers. Try again!"
        })
    }
}

export {addPassenger, deletePassenger, updatePassenger, getAllPassengers}