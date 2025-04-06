const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
