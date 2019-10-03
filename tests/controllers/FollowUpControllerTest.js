const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const FollowUpRepository = require('../../app/repositories/FollowUpRepository');
const Helper = require('../Helper');

const API = '/api/practicas-ms/seguimiento';
chai.use(chaiHttp);

describe('FollowUp CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('find all followUp', async () => {
    await FollowUpRepository.create([{
      id: '6', fecha: '2018-10-10', observaciones: 'Si tengo observaciones', hora: '2:30pm', practica_estudiante_id: 4,
    }, {
      id: '9', fecha: '2019-10-10', observaciones: 'No tengo observaciones', hora: '4:30pm', practica_estudiante_id: 2,
    }]);

    return chai
      .request(app)
      .get(`${API}/all`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body.length, 2);
      });
  });

  it('find all followUp empty test', async () => chai
    .request(app)
    .get(`${API}/all`)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));
});
