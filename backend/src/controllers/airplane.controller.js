import { Airplane } from "../models/index.js";

const addAirplane = async (req, res) => {
    try{
        const {name, airline,airplane_number, capacity, status} = req.body;


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

const deleteAirplane = async (req, res) => {
    try{
        const airplane_id = req.params.id;

        const deletedAirplane = await Airplane.findByIdAndDelete(airplane_id);

        if(!deletedAirplane){
            return res.status(404).json({
                success: false,
                message: "No such airplane exits!"
            })
        }

        res.status(200).json({
            success: true,
            message: "Airplane deleted successfully"
        })
    }
    catch(err){
        console.log("Error in deleting airplane: ", err)
        return res.status(400).json({
            success: false,
            message: "Deleting airplane failed. Try again!"
        })
    }
}

const updateAirplane = async (req, res) => {
    try{
        const airplane_id = req.params.id;
        const updates = req.body;  //all update fields will be given by user
    
        const updated_details = await Airplane.findByIdAndUpdate(airplane_id, updates, {new: true});
    
        if(!updated_details){
            return res.status(404).json({
                success: false,
                message: "Airplane not found!"
            })
        }
        res.status(200).json({
            success: true,
            message: "Airplane updated successfully!",
            data: updated_details
        })
    }
    catch(err){
        console.log("Error in updating airplane details: ", err);
        return res.status(500).json({
            success: false,
            message: "Airplane updation failed. Try again!"
        })
    }
}

const getAllAirplanes = async (req, res) => {
    try{
        const airplanes = await Airplane.find()
        
        // if(!airplanes){    //.find function kbhi null return nhi krta --- it returns empty array, so the below condition is enough
        //     return res.status(404).json({
        //         success: false,
        //         message: "Airplanes doesn't exists!"
        //     })
        // }
        if(airplanes.length == 0){
            return res.status(202).json({
                success: true,
                message: "No airplanes found!",
                data : []
            })
        }

        res.status(200).json({
            success:true,
            message : "All Airplanes fetched successfully!",
            data: airplanes
        })
    }
    catch(err){
        console.log("Error fetching all airplanes!");
        return res.status(500).json({
            success : false,
            message: "Fetching all airplane failed. Try again!"
        })
    }
}

export {addAirplane, deleteAirplane, updateAirplane, getAllAirplanes}