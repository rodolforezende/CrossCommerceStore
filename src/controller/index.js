const { callRegisters } = require('../service/index');

const getRegisters = async (req, res) => {
  try {
    const result = await callRegisters();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRegisters,
};
