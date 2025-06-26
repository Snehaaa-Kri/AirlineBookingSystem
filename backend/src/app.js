import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { userRouter, airplaneRoutes, airportRoutes, passengerRoutes, fligthRoutes, bookingRoutes } from './routes/index.js';
import path from 'path'

const app = express();
const __dirname = path.resolve();
const allowedOrigins = [
    'http://localhost:5173', 
    'http://localhost:4000', 
    'https://airlinebookingandmanagementsystem.onrender.com', 
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


if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/", "dist", "index.html"));
  })


}


export default app;
