/* eslint-disable keyword-spacing */
// const axios = require('axios');
// const url = 'http://challenge.dienekes.com.br/api/numbers?page=1';
// const dados = () => axios({
//   method: 'get',
//   url,
//   responseType: 'json',
// })
//   .then((response) => response.data.numbers)
//   .catch((error) => error);

// const list = async () => {
//   for (let i = 0; i <= 100; i++) {
//     const d = await dados();
//     console.log(i)
//     console.log(d);
//     console.log('-----------------------');
//   }
// };

// list();

// const axios = require('axios');

// const url = 'http://challenge.dienekes.com.br/api/numbers?page=';
// const dados = (i) => axios({
//   method: 'get',
//   url: url + i,
//   responseType: 'json',
// })
//   .then((response) => response.data.numbers)
//   .catch((error) => error);

// const list = async () => {
//   const isFinish = false;
//   let index = 1;
//   const myList = [];

//   while (!isFinish) {
//     console.log('Requisitando página:', index);
//     let done = await dados(index);

//     while (done === false) {
//       console.log(`A requisição da página ${index} apresentou erro`);
//       console.log('Refazendo requisição da página:', index);
//       done = await dados(index);
//     }

//     console.log(`Requisição da página ${index} com sucesso.`);

//     console.log(`Adicionando resposta da página ${index} na lista de páginas.`);
//     myList.push(done);

//     index += 1;
//   }
//   console.log(myList);
// };

// module.exports = {
//   list,
// };

// async function filizzola() {
//   const arr = [];
//   for (let i = 1; i < 1000; i += 4) {
//     const promises = await Promise.all([
//       axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${i}`),
//       axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${i + 1}`),
//       axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${i + 2}`),
//       axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${i + 3}`),
//     ])
//       .then((result) => result.map((value) => value.data.numbers))
//       .catch(() => null);
//     console.log(await promises);
//   }
//   return arr;
// }

// console.log(filizzola());

// const listArray = async (start, end) => {
//   const arr = [];
//   for (let i = start; i < end; i++) {
//     const result = await fakeEndPoint(i);
//     arr.push(result);
//   }
//   return arr;
// };

// const start = async () => {
//   const myArr = [];

//   const inter = 100;
//   for (let i = 1; i < 1000; i++) {
//     myArr.push(listArray(i, i + inter));
//     i += inter;
//   }

//   console.log(await Promise.all(myArr));
// };
// // list()
// start();

const axios = require('axios');

let stop = false;

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
  for(let i = start; i < end; i += 1) {
    const result = await list(i);
    if(result.length === 0) {
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
  for(let i = first; i < 10000; i += 1) {
    console.log(i);
    myArr.push(listArray(i, i + inter));
    i += inter;
  }
  const response = await Promise.all(myArr);
  const flat = response.reduce((acc, curr) => [...acc, ...curr], []);
  console.log(flat);
  console.log('quantidade', myArr.length);
};
start();
