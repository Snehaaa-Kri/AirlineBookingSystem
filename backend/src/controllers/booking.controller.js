import {Booking, Flight, User} from '../models/index.js'

const createBooking = async (req, res) => {
  try {
    const user_id = req.user.id;
    const flight_id = req.params.flight_id;
    console.log("flight id = ", flight_id)
    const passengers = req.body;

    if(!user_id){
      return res.status(402).json({
        success: false,
        message: "User is not authenticated"
      })
    }

    if(!flight_id){
      return res.status(402).json({
        success: false,
        message: "Flight id is missing."
      })
    }

    if(!Array.isArray(passengers) || passengers.length == 0){
      return res.status(402).json({
        success: false,
        message: "passengers should be present"
      })
    }

    // ✅ total amount calculation
    const flight = await Flight.findById(flight_id);

    if(!flight){
      return res.status(404).json({
        success: false,
        message: "Flight not found!"
      })
    }

    const total_amount = flight.price * passengers.length;

    // ✅ Add booking to Booking model
    const booking = await Booking.create({
      user: user_id,
      flight_id: flight_id,
      passengers: passengers,
      total_amount: total_amount,
      booking_date: new Date(),
      status: "Confirmed",
      paymentStatus : "Pending",
    })
    // ✅ Add this flight to user's booked_flights array
    await User.findByIdAndUpdate(user_id, {$push: {booked_flights: booking.id}});

    res.status(200).json({
      success: true,
      message: "ticket booked successfully!"
    })
  } catch (err) {
    console.log("Error in creating booking: ", err)
    return res.status(400).json({ 
      success: false,
      message: "Booking failed. Try again!" 
    });
  }
};

const cancelBooking = async(req, res) => {
  try{
    const ticket_id = req.params.id;

    const cancelled_ticket = await Booking.findByIdAndUpdate(ticket_id, {status: "Cancelled"}, {new: true});

    if(!cancelled_ticket){
      return res.status(404).json({
        success: false,
        message: "Booking not found!"
      })
    }
    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully!"
    })

  }
  catch(err){
    console.log("Error in cancelling the booking: ", err);
    return res.status(400).json({
      success: false,
      message: "Ticket cancelling failed. Try again!",
      data: cancelled_ticket
    })
  }
}

const getAllBookings = async (req, res) => {
  try{
    const all_bookings = await Booking.find();

    if(all_bookings.length == 0){
      return res.status(202).json({
        success: true,
        message: "No bookings found",
        data: []
      })
    }
    res.status(200).json({
      success: true,
      message: "All bookings fetched successfully!",
      data: all_bookings
    })
  }
  catch(err){
    console.log("Error fetching all bookings: ", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch all bookings. Try again!"
    })
  }
}

export {createBooking, cancelBooking, getAllBookings}