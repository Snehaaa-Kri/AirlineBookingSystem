import express from 'express'
import {createFlight, searchFlight, updateFlight, cancelFlight, getAllFlights} from '../controllers/index.js'
import { auth, isAdmin } from '../middlewares/index.js';
const fligthRoutes = express.Router();

fligthRoutes.post("/create", createFlight);
fligthRoutes.post("/search", searchFlight);
fligthRoutes.put("/update/:id", auth, isAdmin, updateFlight);
fligthRoutes.put("/cancel/:id", auth, isAdmin, cancelFlight);
fligthRoutes.get("/getAllFlights", auth, isAdmin, getAllFlights);


export {fligthRoutes}
