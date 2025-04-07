import express from 'express'
import { addPassenger, deletePassenger, updatePassenger, getAllPassengers } from '../controllers/index.js';

const passengerRoutes = express.Router();

passengerRoutes.post("/add", addPassenger)
passengerRoutes.delete("/delete/:id", deletePassenger);
passengerRoutes.put("/update/:id", updatePassenger);
passengerRoutes.get("/getAllPassengers", getAllPassengers);

export {passengerRoutes}