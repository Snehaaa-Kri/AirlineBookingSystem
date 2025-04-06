import express from 'express'
import { addAirplane } from '../controllers/index.js'

const airplaneRoutes = express.Router();

airplaneRoutes.post("/add-airplane", addAirplane)

export {airplaneRoutes}