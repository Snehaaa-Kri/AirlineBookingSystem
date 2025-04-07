import express from 'express'
import { addAirport, deleteAirport, updateAirport, getAllAirports } from '../controllers/index.js';

const airportRoutes = express.Router();

airportRoutes.post("/add", addAirport)
airportRoutes.delete("/delete/:id", deleteAirport);
airportRoutes.put("/update/:id", updateAirport);
airportRoutes.get("/getAllAirports", getAllAirports);

export {airportRoutes}