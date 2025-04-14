import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import myUserRoute from "./routes/MyUserRoute";
import myRestaurantRoute from "./routes/MyRestaurantRoute";
import {v2 as cloudinary} from "cloudinary";


const port = process.env.PORT;

//database connection
mongoose
    .connect(process.env.DATABASE_URL as string)
    .then(() => console.log("Database connected"));

cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });    


const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

