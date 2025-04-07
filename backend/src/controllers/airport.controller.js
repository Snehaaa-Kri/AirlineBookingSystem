import { Airport } from "../models/index.js";

const addAirport = async (req, res) => {
    try{
        const {name, code, city,state, country, pincode} = req.body;

        // validation
        if(!name || !code || !city || !state || !country || !pincode){
            return res.status(402).json({
                success : false,
                message: "All fields are required!"
            })
        }

        // create instance and save it to db
        const airport = Airport.create({
            name, code, city, state, country : "India", pincode
        })

        console.log(airport);

        res.status(200).json({
            success: true,
            message: "Airport added in the db successfully",
        })

    }
    catch(err){
        return res.status(400).json({
            success: false,
            message : "Failed to add Airport in db. Try again!"
        })
    }
}

const deleteAirport = async (req, res) => {
    try{
        const airport_id = req.params.id;
    
        const deletedAirport = await Airport.findByIdAndDelete(airport_id);
    
        if(!deletedAirport){
            return res.status(404).json({
                success: false,
                message: "No such airport exits!"
            })
        }
    
        res.status(200).json({
            success: true,
            message: "Airport deleted successfully!"
        })
    }
    catch(err){
        console.log("Error in deleting airport: ", err);
        return res.status(400).json({
            success: false,
            message: "Failed deleting airport. Try again!"
        })
    }
}

const updateAirport = async(req, res) => {
    try{
        const airport_id = req.params.id;
        const updates = req.body;

        const updated_details = await Airport.findByIdAndUpdate(airport_id, updates, {new: true})

        if(!updated_details){
            return res.status(404).json({
                success: false,
                message: "Airport not found!"
            })
        }
        res.status(200).json({
            success: true,
            message: "Airport updated successfully!",
            data: updated_details
        })
    }
    catch(err){
        console.log("Error in updating airport details : ", err);
        return res.status(500).json({
            success: false,
            message : "Failed in updating airports. Try again!"
        })
    }
    
}

const getAllAirports = async (req, res) => {
    try{
        const all_airports = await Airport.find().populate("_id");
        if(all_airports.length == 0){
            return res.status(202).json({
                success: true,
                message: "No airports is present"
            })
        }
        res.status(200).json({
            success: true,
            message: "All Airports fetched successfully!",
            data: all_airports
        })
    }
    catch(err){
        console.log("Error in fetching all airports", err);
        return res.status(500).json({
            success: false,
            message: "Airports fetching failed. Try again!"
        })
    }
    const all_airports = await Airport.find().populate("_id");

    if(all_airports.length == 0){
        return res.status(202).json({
            success: true,
            message: "No airports found!"
        })
    }

}

export {addAirport, deleteAirport, updateAirport, getAllAirports}