import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
const port = process.env.PORT || 7000;

//database connection
mongoose.connect(process.env.DATABASE_URL as string)
    .then(() => console.log("Database connected"));
const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello World!" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
