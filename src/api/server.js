import express from 'express';
import router from './routes.js';
import { port } from './config.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/light-it', router);
app.disable('x-powered-by');

app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
