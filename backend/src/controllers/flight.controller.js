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
      return res.status(400).json({
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

const updateFlight = async (req, res) => {
  try{
    const flight_id = req.params.id;
    const updates = req.body;

    const updated_details = await Flight.findByIdAndUpdate(flight_id, updates, {new: true});

    if(!updated_details){
      return res.status(404).json({
        success: false,
        message: "Flight not found!"
      })
    }
    res.status(200).json({
      success: true,
      message: "Flight details updated successfully!",
      data: updated_details
    })
  }
  catch(err){
    console.log("Error updating flight details: ", err);
    return res.status(500).json({
      success: false,
      message: "Failed to update flight details. Try again!"
    })
  }
}

const cancelFlight = async (req, res) => {
  try{
    const flight_id = req.params.id;

    const cancelled_flight = await Flight.findByIdAndUpdate(flight_id, {status: "Cancelled"}, {new: true});

    if(!cancelled_flight) {
      return res.status(404).json({
        success: false,
        message: "Flight not found!"
      })
    }
    res.status(200).json({
      success: true,
      message: "Flight cancelled successfully!",
      flight: cancelled_flight   //better for frontend confirmation
    })
  }
  catch(err){
    console.log("Error cancelling flight: ", err);
    return res.status(400).json({
      success : false,
      message: "Error cancelling flight.Try again!"
    })
  }
}

const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find().populate("airplane_id source_airport destination_airport");
    res.status(200).json({
      success: true,
      message: "All flights fetched successfully",
      data: flights
    });
  } catch (err) {
    console.log("Error fetching all flights:", err);
    res.status(500).json({
      success: false,
      message: "Error fetching flights"
    });
  }
};

export {createFlight, searchFlight, updateFlight, cancelFlight, getAllFlights}