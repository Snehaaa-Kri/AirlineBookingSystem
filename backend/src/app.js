import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { userRouter, airplaneRoutes, airportRoutes, passengerRoutes, fligthRoutes, bookingRoutes } from './routes/index.js';

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://airline-booking-system.vercel.app',
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (e.g., curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));
// app.use(cors());

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

app.use("/api/v1/auth", userRouter); //auth
app.use("/api/v1/airplane", airplaneRoutes)
app.use("/api/v1/airport", airportRoutes)
app.use("/api/v1/passenger", passengerRoutes)
app.use("/api/v1/flight", fligthRoutes)
app.use("/api/v1/booking", bookingRoutes)

export default app;
