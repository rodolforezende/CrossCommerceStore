const { consultFetch } = require('../model/index');

const callRegisters = async () => {
  const response = [];
  for (let i = 1; i < 10; i += 4) {
    const resolve = [];
    resolve.push(consultFetch(i));
    resolve.push(consultFetch(i + 1));
    resolve.push(consultFetch(i + 2));
    resolve.push(consultFetch(i + 3));
    response.push(Promise.all(resolve));
  }
  return response;
};

module.exports = {
  callRegisters,
};
