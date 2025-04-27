import {Booking, Flight, User} from '../models/index.js'

const createBooking = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { flight_id, passengers } = req.body;

    console.log("flight id = ", flight_id);
    console.log("passengers = ", passengers);

    if (!user_id) {
      return res.status(401).json({
        success: false,
        message: "User is not authenticated",
      });
    }

    if (!flight_id) {
      return res.status(400).json({
        success: false,
        message: "Flight id is missing.",
      });
    }

    if (!Array.isArray(passengers) || passengers.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Passengers should be present",
      });
    }

    const flight = await Flight.findById(flight_id);

    if (!flight) {
      return res.status(404).json({
        success: false,
        message: "Flight not found!",
      });
    }

    // Calculate total amount
    const total_amount = flight.price * passengers.length;

    // ✅ Generate seat numbers
    const seatNumbers = passengers.map((_, index) => {
      const row = String.fromCharCode(65 + Math.floor(index / 6)); // Row: A, B, C...
      const col = (index % 6) + 1; // Column: 1-6
      return `${row}${col}`; // Example: A1, A2, A3...
    });

    // ✅ Create a new booking
    const booking = await Booking.create({
      user: user_id,
      flight_id: flight_id,
      passengers: passengers,
      seatNumbers: seatNumbers, // 👈 added seatNumbers here
      total_amount: total_amount,
      booking_date: new Date(),
      status: "Confirmed",
      paymentStatus: "Pending",
    });

    // ✅ Add booking id to user's booked_flights array
    await User.findByIdAndUpdate(
      user_id,
      { $push: { booked_flights: booking._id } }, // 👈 yaha ._id dalna tha!
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Ticket booked successfully!",
      booking: booking,
    });
  } catch (err) {
    console.error("Error in creating booking: ", err);
    return res.status(500).json({
      success: false,
      message: "Booking failed. Try again!",
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

const getMyBookings = async (req, res) => {
  try {
      const user_id = req.user.id;
      console.log("User ID:", user_id);

      // Fetch user from database
      const user = await User.findById(user_id);
      
      if (!user) {
          return res.status(404).send('User not found');
      }

      console.log("User:", user);

      // Get booking IDs from the user's booked_flights array
      const bookingIds = user.booked_flights;

      if (!bookingIds || bookingIds.length === 0) {
          return res.status(404).send('No bookings found');
      }

      // Fetch bookings using the IDs
      const bookings = await Booking.find({ '_id': { $in: bookingIds } }).populate({
        path: 'flight_id',
        populate:  [
          { path: 'airplane_id' },
          { path: 'source_airport' },
          { path: 'destination_airport' }
        ]
      });

      if (bookings.length === 0) {
          return res.status(404).send('No booking details found');
      }

      // Send the booking details as a response
      res.json(bookings);
  } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).send('Error fetching bookings');
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

export {createBooking, cancelBooking, getAllBookings, getMyBookings}