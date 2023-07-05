import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Config from "../config";
import cors from "cors"

dotenv.config();

const app: Express = express();
const port = Config.PORT;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});