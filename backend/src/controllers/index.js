import {sendOtp,login,signUp, getUserInfo} from './auth.controller.js'
import { addAirplane, deleteAirplane, updateAirplane, getAllAirplanes } from './airplane.controller.js'
import { addAirport, deleteAirport, updateAirport, getAllAirports } from './airport.controller.js'
import {createBooking, cancelBooking, getAllBookings} from './booking.controller.js'
import { createFlight, searchFlight, updateFlight, cancelFlight, getAllFlights } from './flight.controller.js'
import { addPassenger, deletePassenger, updatePassenger, getAllPassengers } from './passenger.controller.js'

export {sendOtp,login,signUp, getUserInfo, addAirplane, deleteAirplane, updateAirplane, getAllAirplanes, addAirport, deleteAirport, updateAirport, getAllAirports, createBooking, cancelBooking, getAllBookings, createFlight, searchFlight, updateFlight, cancelFlight, getAllFlights, addPassenger, deletePassenger, updatePassenger, getAllPassengers}