import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
});

import connectDB from './db/dbConnection.js';
import app from './app.js'

const PORT = process.env.PORT || 8000;

// Debugging: Ensure .env is loaded
console.log("MONGODB URI:", process.env.MONGODB_URI);

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log(`App not able to talk to database! ERROR: ${err}`);
            throw err;
        });
        app.listen(PORT, () => {
            console.log(`App is listening on PORT: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("RUKOOOOOOOOOO.........MongoDB connection failed  !!!!!!", err);
    });
