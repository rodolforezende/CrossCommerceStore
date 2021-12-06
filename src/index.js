const express = require('express');
<<<<<<< Updated upstream
const router = require('./Router/router');
=======
>>>>>>> Stashed changes

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
<<<<<<< Updated upstream
  console.log(`Connecting in ${PORT}`);
});

app.use('/', router);
=======
  console.log(`Connecting in ${PORT}`)
});
>>>>>>> Stashed changes
