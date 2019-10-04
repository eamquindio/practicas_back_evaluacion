const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const selfAppraisalRepository = require('../../app/repositories/selfAppraisalRepository');
const Helper = require('../Helper');

const API = '/api/practicas-ms/selfAppraisal';

chai.use(chaiHttp);

describe('self appraisal CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('find all self appraisal', async () => {
    await selfAppraisalRepository.create([
        {
            id: 1,
            fecha_realizacion: '2019-08-21',
            practica_estudiante_id: 1,
            vinculacion_laboral: 'si',
            recomienda_empresa: 'si',
            comentario_estudiante: 'ninguno',
            aplicacion_conceptos: 'claros',
            cumplimiento_laborales: 'siempre',
            iniciativa_creatividad: 'siempre',
            manejo_herramientas: 'todas',
            actitud_disposicion: 'excelente',
            aprovechamiento: 'siempre',
            evaluacion_empresa: 'no',
            satisfacion: 'si',
            por_que_satisfacion: 'aprendizaje',
            por_que_recomendacion: 'lo mismo',
          },
          {
            id: 2,
            fecha_realizacion: '2019-08-21',
            practica_estudiante_id: 1,
            vinculacion_laboral: 'si',
            recomienda_empresa: 'si',
            comentario_estudiante: 'ninguno',
            aplicacion_conceptos: 'claros',
            cumplimiento_laborales: 'siempre',
            iniciativa_creatividad: 'siempre',
            manejo_herramientas: 'todas',
            actitud_disposicion: 'excelente',
            aprovechamiento: 'siempre',
            evaluacion_empresa: 'no',
            satisfacion: 'si',
            por_que_satisfacion: 'aprendizaje',
            por_que_recomendacion: 'lo mismo',
          }]);

    return chai
      .request(app)
      .get(`${API}/all`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body.length, 2);
      });
  });

  it('find all self appraisal empty test', async () => chai
    .request(app)
    .get(`${API}/all`)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));
});