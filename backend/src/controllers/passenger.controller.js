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

export {addPassenger}