import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import authRoutes from './routes/user.route.js'

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : ["http://localhost:3000"];

const router = express.Router();
app.use(cors({
    origin: "http://localhost:5173", 
    methods: "GET,POST,PUT,DELETE",
    credentials: true 
  }));

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

app.use("/api/v1/auth", authRoutes); //auth
// app.use("api/search")

export default app;
