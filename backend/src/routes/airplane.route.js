import express from 'express'
import { addAirplane, deleteAirplane, updateAirplane, getAllAirplanes  } from '../controllers/index.js'

const airplaneRoutes = express.Router();

airplaneRoutes.post("/add-airplane", addAirplane)
airplaneRoutes.delete("/delete/:id", deleteAirplane)
airplaneRoutes.put("/update/:id", updateAirplane)
airplaneRoutes.get('/getAllAirplanes', getAllAirplanes)

export {airplaneRoutes}