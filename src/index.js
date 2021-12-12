const express = require('express');
const router = require('./Router/router');

const app = express();

const PORT = 3001;

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Connecting in ${PORT}`);
  });
}


app.use('/', router);

module.exports = app;
