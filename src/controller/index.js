const { callRegisters } = require('../service/index');

const getRegisters = async (req, res) => {
  try {
    const result = await callRegisters();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
};

module.exports = {
  getRegisters,
};
