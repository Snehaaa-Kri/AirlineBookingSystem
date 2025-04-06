import {Flight} from '../models/flight.models.js'


const addFlight = async (req, res) => {
  try{
    const {
      airline,
      flightNumber,
      
    } = req.body;

  }
  catch(err){
    console.log("Error in adding flight. Try again!");
    res.status(400).json({
      success : false,
      message: "Adding flight failed!"
    })
  }
}


export {addFlight}