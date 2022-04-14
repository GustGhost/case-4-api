import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { HundredMetersRouter } from './Routes/HundredMetersRouter';
import { JavelinRouter } from './Routes/JavelinRouter';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', HundredMetersRouter);
app.use('/api', JavelinRouter);
dotenv.config();

const serverPort = process.env.PORT;

app.listen(serverPort || 3003, () => {
  console.log(`O servidor é http://localhost:${serverPort}`);
});
