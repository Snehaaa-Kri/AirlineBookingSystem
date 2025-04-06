import {Airport, Flight} from '../models/index.js'


const createFlight = async (req, res) => {
  try{
    let {airplane_id, flightNumber, coach_type, source_airport, destination_airport, departure_date, arrival_date, duration, total_seats, availableSeats, price, priceperseat_E, priceperseat_B, priceperseat_F, baggageAllowance, facilities, trip_type} = req.body;
    
    trip_type = trip_type?.trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
    //validation
    if(!airplane_id|| !flightNumber|| !coach_type|| !source_airport|| !destination_airport|| !departure_date|| !arrival_date|| !duration|| !total_seats|| !availableSeats|| !price|| !priceperseat_E|| !priceperseat_B|| !priceperseat_F|| !baggageAllowance|| !facilities || !trip_type){
      return res.status(404).json({
        success: false,
        message: "All fields are required for flight creation"
      })
    }

    // create and save
    const flight = await Flight.create({
      airplane_id, flightNumber, coach_type, source_airport, destination_airport, departure_date, arrival_date, duration, total_seats, availableSeats, price, priceperseat_E, priceperseat_B, priceperseat_F, baggageAllowance, facilities, trip_type
    })
    console.log(flight)

    res.status(200).json({
      success: true,
      message: "Flight added successfully!"
    })
  }
  catch(err){
    console.log("Error in adding flight. Try again!", err);
    res.status(400).json({
      success : false,
      message: "Adding flight failed!"
    })
  }
}

const searchFlight = async (req, res) => {
  try {
    let {
      trip_type,
      source_city,
      destination_city,
      departure_date,
      arrival_date,
      total_passengers,
      coach_type
    } = req.body;

    // ✅ Normalize trip_type properly to match enum ["One Way", "Round Trip"]
    trip_type = trip_type?.trim().toLowerCase();
    if (trip_type === "one way") trip_type = "One Way";
    else if (trip_type === "round trip") trip_type = "Round Trip";

    // ✅ Required fields check
    if (
      !trip_type ||
      !source_city ||
      !destination_city ||
      !departure_date ||
      !total_passengers ||
      !coach_type
    ) {
      return res.status(402).json({
        success: false,
        message: "All fields are required"
      });
    }

    // ✅ Step 1: Find Airports for source & destination cities (case-insensitive)
    const source_airports = await Airport.find({
      city: { $regex: new RegExp(`^${source_city}$`, 'i') }
    });

    const dest_airports = await Airport.find({
      city: { $regex: new RegExp(`^${destination_city}$`, 'i') }
    });

    // console.log("Source airports = ",source_airports)
    // console.log("Dest airports = ", dest_airports)

    if (source_airports.length === 0 || dest_airports.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No airports found for the given cities"
      });
    }

    const source_ids = source_airports.map(e => e._id);
    const dest_ids = dest_airports.map(e => e._id);

    // ✅ Step 2: Build search query
    const searchQuery = {
      trip_type: trip_type,
      source_airport: { $in: source_ids },
      destination_airport: { $in: dest_ids },
      departure_date: new Date(departure_date),
      availableSeats: { $gte: total_passengers },
      coach_type: coach_type
    };

    if (trip_type === "Round Trip" && arrival_date) {
      searchQuery.arrival_date = new Date(arrival_date);
    }

    // ✅ Step 3: Perform query
    const flights = await Flight.find(searchQuery).populate(
      "airplane_id source_airport destination_airport"
    );

    if (flights.length === 0) {
      return res.status(202).json({
        success: true,
        message: "No flights available"
      });
    }

    res.status(200).json({
      success: true,
      message: "Searched flights are:",
      data: flights
    });

  } catch (err) {
    console.log("Error in searching flights:", err);
    return res.status(400).json({
      success: false,
      message: "Failed to search flight. Try again!"
    });
  }
};


// const searchFlight = async (req, res) =>{
//   try{
//     const {trip_type, source_city, destination_city, departure_date, arrival_date, total_passengers, coach_type} = req.body;

//     //validation
//     if(!trip_type|| !source_city|| !destination_city || !departure_date|| !total_passengers|| !coach_type){
//       return res.status(402).json({
//         success: false,
//         message: "All fields are required"
//       })
//     }


//     // src and dest city se airport ids nikalni h - what if ek city me multiple airports hue? yes - find all matching cities
//     //🔍 Step 1: Find Airports by City
//     const source_airports = await Airport.find({city: source_city});  //arr of airports
//     const dest_airports = await Airport.find({city : destination_city});

//     const source_ids = source_airports.map((e) => e._id);
//     const dest_ids = dest_airports.map((e) => e._id);

//     //🧠 Step 2: Build Query for Flight Search
//     const searchQuery = {
//       trip_type: trip_type,
//       source_airport : {$in : source_ids},
//       destination_airport : {$in : dest_ids},
//       departure_date : new Date(departure_date),
//       availableSeats : {$gte: total_passengers },
//       coach_type: coach_type 
//     };

//     // Optional: If it's round-trip, you may want to filter return flights too
//     if (trip_type === "Round-Trip" && arrival_date) {
//       searchQuery.arrival_date = new Date(arrival_date);
//     }

//     //coach specific - not done
//     // 🔍 Step 3: Search Flights 
//     const flights = await Flight.find(searchQuery)
//     .populate("airplane source_airport destination_airport");

//     if(flights.length == 0){
//       return res.status(202).json({
//         success : true,
//         message: "No flights available"
//       })
//     }

//     res.status(200).json({
//       success:true,
//       message: "Searched flights are: ",
//       data : flights
//     })
//   }
//   catch(err){
//     console.log("Error in searching flights : ", err);
//     return res.status(400).json({
//       success: false,
//       message: "Failed to search flight. Try again!"
//     })
//   }
// }


export {createFlight, searchFlight}