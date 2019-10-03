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

  it('create seguimiento test', () => chai
    .request(app)
    .post(API)
    .send({
      id: 1,
      fechaHora: '2019-08-24',
      observaciones: 'buen trabajo',
      Practica_estudiante_id: 1,
    })
    .then(async () => {
      const seguimientoToAssert = await FollowUpRepository.find(1);
      assert.equal(seguimientoToAssert.id, 1);
    }));

  it('create seguimiento already exists test', async () => {
    await FollowUpRepository.create({
      id: 1,
      fechaHora: '2019-08-24',
      observaciones: 'buen trabajo',
      Practica_estudiante_id: 1,
    });

    return chai
      .request(app)
      .post(API)
      .send({
        id: 1,
        fechaHora: '2019-08-24',
        observaciones: 'buen trabajo',
        Practica_estudiante_id: 1,
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });

  it('find all followUp', async () => {
    await FollowUpRepository.create([{
      id: '6', fechaHora: '2018-10-10', observaciones: 'Si tengo observaciones', practica_estudiante_id: 4,
    }, {
      id: '9', fechaHora: '2019-10-10', observaciones: 'No tengo observaciones', practica_estudiante_id: 2,
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
