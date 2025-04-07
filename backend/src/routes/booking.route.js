import express from 'express'
import {createBooking, cancelBooking, getAllBookings} from "../controllers/index.js"
const bookingRoutes = express.Router();

router.get("/", authMiddleware, bookingController.createBooking);

module.exports = router;
