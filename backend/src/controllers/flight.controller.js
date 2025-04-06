const Flight = require("../models/Flight");

exports.getFlights = async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
