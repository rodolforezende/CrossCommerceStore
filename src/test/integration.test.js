const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
chai.use(chaiHttp);
const { expect } = chai;
const server = require('../index');

describe('GET', () => {
  let response;

  before(async () => {
    response = await chai.request(server).get('/');;
  });

  describe('Testando retorno da aplicação: ', () => {
    it('Testando o status da aplicação', (done) => {
      expect(response).to.have.status(200);
      done();
    });
    it('Testando se retorna uma Array', (done) => {
      expect(response.body).to.be.an('array');
      done();
    });
    it('Testando a ordenação do retorno', (done) => {
      expect(response.body).to.have.ordered.members(response.body);
      done();
    });
  })
});
