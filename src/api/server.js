import express from 'express';
import router from './routes.js';
import cors from 'cors';
import { appPort } from './config.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/light-it', router);
app.disable('x-powered-by');

app.listen(appPort, () => {
  console.info(`Server is running on port ${appPort}`);
});
