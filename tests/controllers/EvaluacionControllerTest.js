const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const EvaluacionRepository = require('../../app/repositories/EvaluacionRepository');
const Helper = require('../Helper');

const API = '/api/practicas-ms/evaluaciones';
chai.use(chaiHttp);

describe('Evaluacion CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('find evaluacion test', async () => {
    await EvaluacionRepository.create({
      id: 1,
      Practica_estudiante_id: 1,
      FechaRealizacion: '2019-08-12T05:00:00.000Z',
      VinculacionLaboral: 'si',
      NombreEvaluador: 'Andres Torres',
      ComentarioEmpresa: 'Excelente',
      satisfaccion: '2',
      porqueSatisfaccion: 'porque si',
      conocimientos: 'bastantes',
      capacidades: 'Muchas',
      comportamiento: 'Bueno',
      actitudes_aptitudes: 'muy buenas',
      imagen: 'imagen',
    });

    return chai
      .request(app)
      .get(`${API}/1`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body, {
          id: 1,
          Practica_estudiante_id: 1,
          FechaRealizacion: '2019-08-12T05:00:00.000Z',
          VinculacionLaboral: 'si',
          NombreEvaluador: 'Andres Torres',
          ComentarioEmpresa: 'Excelente',
          satisfaccion: '2',
          porqueSatisfaccion: 'porque si',
          conocimientos: 'bastantes',
          capacidades: 'Muchas',
          comportamiento: 'Bueno',
          actitudes_aptitudes: 'muy buenas',
          imagen: 'imagen',
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
