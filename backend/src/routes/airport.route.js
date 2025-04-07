import express from 'express'
import { addAirport, deleteAirport, updateAirport, getAllAirports } from '../controllers/index.js';

const airportRoutes = express.Router();

airportRoutes.post("/add", auth, isAdmin, addAirport)
airportRoutes.delete("/delete/:id", auth, isAdmin, deleteAirport);
airportRoutes.put("/update/:id", auth, isAdmin, updateAirport);
airportRoutes.get("/getAllAirports", auth, isAdmin, getAllAirports);

export {airportRoutes}