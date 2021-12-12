const axios = require('axios');

const dados = (page) => {
  const url = `http://challenge.dienekes.com.br/api/numbers?page=${page}`;
  return axios({
    method: 'get',
    url,
    responseType: 'json',
  })
    .then((response) => {
      if (response.data.numbers.length === 0) {
        stop = true;
      } else {
        return response.data.numbers;
      }
    }).catch(() => false);
};

const list = async (index) => {
  const isFinish = false;
  while (!isFinish) {
    console.log('Requisitando página:', index);
    let done = await dados(index);
    while (!done) {
      console.log(`A requisição da página ${index} apresentou erro`);
      console.log('Refazendo requisição da página:', index);
      done = await dados(index);
    }
    return done;
  }
};

const listArray = async (start, end) => {
  let arr = [];
  for (let i = start; i < end; i += 1) {
    const result = await list(i);
    if (result.length === 0) {
      break;
    }
    arr = [...result, ...arr];
  }
  return arr;
};

const start = async () => {
  const myArr = [];
  const first = 1;
  const inter = 100;
  for (let i = first; i < 10000; i += 1) {
    console.log(i);
    myArr.push(listArray(i, i + inter));
    i += inter;
  }
  const response = await Promise.all(myArr);
  const flat = response.reduce((acc, curr) => [...acc, ...curr], []);
  console.log(flat);
  console.log('quantidade', myArr.length);
  return flat;
};

module.exports = {
  start,
};
