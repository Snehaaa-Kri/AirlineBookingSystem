import { Airplane } from "../models/index.js";

const addAirplane = async (req, res) => {
    try{
        const {name, airline,airplane_number, capacity, type, status} = req.body;


        //✅ validation
        if(!name || !airline ||!airplane_number ||!capacity ||!status){
            return res.status(402).json({
                success: false,
                message: "All mandatory fields are required"
            })
        }
        
        // ✅ Create and Save Airplane (automatically saved to DB)
        const airplane = await Airplane.create({
            name,
            airline,
            airplane_number,
            capacity,
            type,
            status
        });

        res.status(200).json({
            success: true,
            message: "Airplane added successfully",
            data : airplane
        })
    }
    catch(error) {
        console.log("Error in adding airplane", error)
        return res.status(400).json({
            success: false,
            message : "Airplane add operation failed! Try again."
        })
    }
}

export {addAirplane}