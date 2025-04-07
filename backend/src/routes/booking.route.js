import express from 'express'
import {createBooking, cancelBooking, getAllBookings} from "../controllers/index.js"
const bookingRoutes = express.Router();
import {auth, isAdmin} from '../middlewares/index.js'

bookingRoutes.post("/create/:flight_id", auth, createBooking);
bookingRoutes.put("/cancel/:id", auth, cancelBooking);
bookingRoutes.get("/getAllBookings",auth, isAdmin, getAllBookings);

export {bookingRoutes}
