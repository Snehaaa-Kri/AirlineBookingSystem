import express from 'express'
const bookingRoutes = express.Router();

router.get("/", authMiddleware, bookingController.createBooking);

module.exports = router;
