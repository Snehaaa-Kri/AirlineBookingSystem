import express from 'express'
import { addPassenger, deletePassenger, updatePassenger, getAllPassengers } from '../controllers/index.js';

const passengerRoutes = express.Router();

passengerRoutes.post("/add-passenger", addPassenger)

export {passengerRoutes}