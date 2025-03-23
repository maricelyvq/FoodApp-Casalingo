import express,{Request,Response} from 'express';
import cors from 'cors';
import "dotenv/config";
const port = process.env.PORT || 7000;


const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async  (req: Request, res:Response) => {
    res.json({message: "Hello World!"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
