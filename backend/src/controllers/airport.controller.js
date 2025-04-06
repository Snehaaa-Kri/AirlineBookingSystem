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

export {addAirport}