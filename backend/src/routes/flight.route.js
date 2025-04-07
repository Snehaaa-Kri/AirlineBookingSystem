import express from 'express'
import {createFlight, searchFlight, updateFlight, cancelFlight, getAllFlights} from '../controllers/index.js'
const fligthRoutes = express.Router();

// fligthRouter.get("/addflight", flightController.getFlights);
fligthRoutes.post("/create-flight", createFlight);
fligthRoutes.get("/search-flight", searchFlight);


export {fligthRoutes}
