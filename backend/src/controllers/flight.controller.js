import {Airport, Flight} from '../models/index.js'


// const createFlight = async (req, res) => {
//   try{
//     const user_id = req.user;
//     const {}
    

//   }
//   catch(err){
//     console.log("Error in adding flight. Try again!");
//     res.status(400).json({
//       success : false,
//       message: "Adding flight failed!"
//     })
//   }
// }


const searchFlight = async (req, res) =>{
  try{
    const {trip_type, source_city, destination_city, departure_date, arrival_date, total_passengers, coach_type} = req.body;

    //validation
    if(!trip_type|| !source_city|| !destination_city || !departure_date || !arrival_date|| !total_passengers|| !coach_type){
      return res.status(402).json({
        success: false,
        message: "All fields are required"
      })
    }

    // src and dest city se airport ids nikalni h - what if ek city me multiple airports hue? yes - find all matching cities
    //🔍 Step 1: Find Airports by City
    const source_airports = await Airport.find({city: source_city});  //arr of airports
    const dest_airports = await Airport.find({city : destination_city});

    const source_ids = source_airports.map((e) => e._id);
    const dest_ids = dest_airports.map((e) => e._id);

    //🧠 Step 2: Build Query for Flight Search
    const searchQuery = {
      source_airport : {$in : source_ids},
      destination_airport : {$in : dest_ids},
      departure_date : new Date(departure_date),
      availableSeats : {$gte: total_passengers },
      coach_type: coach_type  // ✅ optional filter added
    };

    //coach specific - not done
    // 🔍 Step 3: Search Flights 
    const flights = await Flight.find(searchQuery)
    .populate("airplane source_airport destination_airport");

    if(flights.length == 0){
      return res.status(202).json({
        success : true,
        message: "No flights found"
      })
    }

    res.status(200).json({
      success:true,
      message: "Searched flights are: ",
      data : flights
    })
  }
  catch(err){
    console.log("Error in searching flights : ", err);
    return res.status(400).json({
      success: false,
      message: "Failed to search flight. Try again!"
    })
  }
}


export {searchFlight}