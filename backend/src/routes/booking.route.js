import express from 'express'
import {createBooking, cancelBooking, getAllBookings, getMyBookings} from "../controllers/index.js"
import { Flight } from '../models/flight.models.js';
const bookingRoutes = express.Router();
import {auth, isAdmin} from '../middlewares/index.js'

bookingRoutes.post("/create", auth, createBooking);
bookingRoutes.get('/my-bookings',auth, getMyBookings);
bookingRoutes.put("/cancel/:id", auth, cancelBooking);
bookingRoutes.get("/getAllBookings",auth, isAdmin, getAllBookings);

export {bookingRoutes}
