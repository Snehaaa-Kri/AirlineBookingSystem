import express from 'express'
import { addAirport, deleteAirport, updateAirport, getAllAirports } from '../controllers/index.js';

const airportRoutes = express.Router();

airportRoutes.post("/add-airport", addAirport)

export {airportRoutes}