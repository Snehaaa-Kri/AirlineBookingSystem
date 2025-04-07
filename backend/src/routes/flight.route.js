import express from 'express'
import {createFlight, searchFlight, updateFlight, cancelFlight, getAllFlights} from '../controllers/index.js'
const fligthRoutes = express.Router();

fligthRoutes.post("/create", createFlight);
fligthRoutes.get("/search", searchFlight);
fligthRoutes.put("/update/:id", updateFlight);
fligthRoutes.put("/cancel/:id", cancelFlight);
fligthRoutes.get("/getAllFlights", getAllFlights);


export {fligthRoutes}
