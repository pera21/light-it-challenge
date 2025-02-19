const express = require('express');
const { router } = require('./routes.js');
const { port } = require('./config.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/light-it', router);
app.disable('x-powered-by');

app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
