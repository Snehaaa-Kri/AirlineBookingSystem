import express from 'express'
import { addAirplane, deleteAirplane, updateAirplane, getAllAirplanes  } from '../controllers/index.js'
import {auth, isAdmin} from '../middlewares/index.js'

const airplaneRoutes = express.Router();

airplaneRoutes.post("/add", auth, isAdmin, addAirplane)
airplaneRoutes.delete("/delete/:id", auth, isAdmin, deleteAirplane)
airplaneRoutes.put("/update/:id", auth, isAdmin, updateAirplane)
airplaneRoutes.get('/getAllAirplanes', auth, isAdmin, getAllAirplanes)

export {airplaneRoutes}