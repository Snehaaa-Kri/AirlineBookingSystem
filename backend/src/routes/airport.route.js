import express from 'express'
import { addAirport } from '../controllers/index.js';

const airportRoutes = express.Router();

airportRoutes.post("/add-airport", addAirport)

export {airportRoutes}