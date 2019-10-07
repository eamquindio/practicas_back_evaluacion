const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const AssesmentRepository = require('../../app/repositories/AssesmentRepository');
const Helper = require('../Helper');

const API = '/api/practicas-ms/evaluaciones';
chai.use(chaiHttp);

describe('Evaluacion CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it.only('find all Assesment', async () => {
    await AssesmentRepository.create([{ id: 1,
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
         }, 
         { id: 2,
            Practica_estudiante_id: 2,
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
        }]);

    return chai
      .request(app)
      .get(`${API}/all`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body.length, 2);
      });
  });

  it.only('find all Assesment empty test', async () => chai
    .request(app)
    .get(`${API}/all`)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));

});