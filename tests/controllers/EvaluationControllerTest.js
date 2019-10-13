const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const EvaluationRepository = require('../../app/repositories/EvaluationRepository');
const Helper = require('../Helper');

const API = '/api/evaluacion-ms/evaluation';
chai.use(chaiHttp);

describe('Evaluation CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('create evaluation test', () => chai
    .request(app)
    .post(API)
    .send({
      id: 3,
      id_practica_estudiante: 2,
      vinculacion_laboral: 'no',
      nombre_evaluador: 'Richard',
      comentario_empresa: 'No rinde',
      satisfaccion: '2',
      porque_satisfaccion: 'imputual',
      conocimientos: '1',
      capacidades: '1',
      comportamiento: '1',
      actitud_aptitud: '1',
      imagen: '1',
    })
    .then(async () => {
      const EvaluationToAssert = await EvaluationRepository.find(3);
      assert.equal(EvaluationToAssert.satisfaccion, '2');
    }));

  it('create evaluation already exists test', async () => {
    await EvaluationRepository.create({
      id: 4,
      id_practica_estudiante: 2,
      vinculacion_laboral: 'no',
      nombre_evaluador: 'Richard',
      comentario_empresa: 'No rinde',
      satisfaccion: '2',
      porque_satisfaccion: 'imputual',
      conocimientos: '1',
      capacidades: '1',
      comportamiento: '1',
      actitud_aptitud: '1',
      imagen: '1',
    });

    return chai
      .request(app)
      .post(API)
      .send({
        id: 4,
        id_practica_estudiante: 2,
        vinculacion_laboral: 'no',
        nombre_evaluador: 'Richard',
        comentario_empresa: 'No rinde',
        satisfaccion: '2',
        porque_satisfaccion: 'imputual',
        conocimientos: '1',
        capacidades: '1',
        comportamiento: '1',
        actitud_aptitud: '1',
        imagen: '1',
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });
  it('find all Evaluation', async () => {
    await EvaluationRepository.create([{
      id: 1,
      id_practica_estudiante: 1,
      vinculacion_laboral: 'no',
      nombre_evaluador: 'Richard',
      comentario_empresa: 'No rinde',
      satisfaccion: '2',
      porque_satisfaccion: 'imputual',
      conocimientos: '1',
      capacidades: '1',
      comportamiento: '1',
      actitud_aptitud: '1',
      imagen: '1',
    },
    {
      id: 2,
      id_practica_estudiante: 2,
      vinculacion_laboral: 'no',
      nombre_evaluador: 'Richard',
      comentario_empresa: 'No rinde',
      satisfaccion: '2',
      porque_satisfaccion: 'imputual',
      conocimientos: '1',
      capacidades: '1',
      comportamiento: '1',
      actitud_aptitud: '1',
      imagen: '1',
    }]);

    return chai
      .request(app)
      .get(`${API}/all`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body.length, 2);
      });
  });

  it('find all Evaluation empty test', async () => chai
    .request(app)
    .get(`${API}/all`)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));
  it('find evaluacion test', async () => {
    await EvaluationRepository.create({
      id: 1,
      id_practica_estudiante: 1,
      vinculacion_laboral: 'no',
      nombre_evaluador: 'Richard',
      comentario_empresa: 'No rinde',
      satisfaccion: '2',
      porque_satisfaccion: 'imputual',
      conocimientos: '1',
      capacidades: '1',
      comportamiento: '1',
      actitud_aptitud: '1',
      imagen: '1',
    });

    return chai
      .request(app)
      .get(`${API}/1`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body, {
          id: 1,
          id_practica_estudiante: 1,
          vinculacion_laboral: 'no',
          nombre_evaluador: 'Richard',
          comentario_empresa: 'No rinde',
          satisfaccion: '2',
          porque_satisfaccion: 'imputual',
          conocimientos: '1',
          capacidades: '1',
          comportamiento: '1',
          actitud_aptitud: '1',
          imagen: '1',
        });
      });
  });
  it('find evaluacion not found test', async () => chai
    .request(app)
    .get(`${API}/1`)
    .catch((error) => {
      assert.equal(error.status, 404);
    }));
});
