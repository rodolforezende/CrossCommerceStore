const router = require('express').Router();
const { getRegisters } = require('../controller');

router.get('/', getRegisters);

module.exports = router;
