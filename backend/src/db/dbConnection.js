import mongoose from "mongoose"; 
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`\nMongoDB connected successfully! DB HOST: ${connectionInstance.connection.host}`);
        console.log(`\nConnection State: ${connectionInstance.connection.readyState}`);
    } catch (error) {
        console.error("(Mera errorrr....) MONGODB CONNECTION ERROR:", error);
        process.exit(1);
    }
};

export default connectDB;
