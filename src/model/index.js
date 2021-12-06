const axios = require('axios');

const consultFetch = async (index) => axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${index}`)
  .then((response) => response.data);

module.exports = { consultFetch };
