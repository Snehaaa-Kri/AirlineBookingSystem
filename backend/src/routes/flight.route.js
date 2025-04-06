import express from 'express'
import {createFlight, searchFlight} from '../controllers/index.js'
const fligthRoutes = express.Router();

// fligthRouter.get("/addflight", flightController.getFlights);
fligthRoutes.post("/create-flight", createFlight);
fligthRoutes.get("/search-flight", searchFlight);


export {fligthRoutes}
