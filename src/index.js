const express = require('express');
const router = require('./Router/router');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Connecting in ${PORT}`);
});

app.use('/', router);
