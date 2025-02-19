import express from 'express';
import router from './routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/light-it', router);
app.disable('x-powered-by');

app.listen(process.env.APP_PORT, () => {
  console.info(`Server is running on port ${process.env.APP_PORT}`);
});
