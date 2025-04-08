import express from 'express'
import { addPassenger, deletePassenger, updatePassenger, getAllPassengers } from '../controllers/index.js';
import { auth,isAdmin } from '../middlewares/index.js';

const passengerRoutes = express.Router();

passengerRoutes.post("/add",auth, addPassenger)
passengerRoutes.delete("/delete/:id", auth, deletePassenger);
passengerRoutes.put("/update/:id", auth, updatePassenger);
passengerRoutes.get("/getAllPassengers", auth, getAllPassengers);

export {passengerRoutes}