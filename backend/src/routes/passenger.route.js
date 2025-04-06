import express from 'express'
import { addPassenger } from '../controllers/index.js';

const passengerRoutes = express.Router();

passengerRoutes.post("/add-passenger", addPassenger)

export {passengerRoutes}