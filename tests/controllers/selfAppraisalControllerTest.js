const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const SelfAppraisalRepository = require('../../app/repositories/selfAppraisalRepository');
const Helper = require('../Helper');

const API = '/api/practicas-ms/selfAppraisal';
chai.use(chaiHttp);

describe('selfAppraisal CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it.only('create selfAppraisal test', () => chai
    .request(app)
    .post(API)
    .send({
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
    })
    .then(async () => {
      const personToAssert = await SelfAppraisalRepository.find(1);
      assert.equal(personToAssert.satisfacion, 'si');
    }));

  it.only('create selfAppraisal already exists test', async () => {
    await SelfAppraisalRepository.create({
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
    });

    return chai
      .request(app)
      .post(API)
      .send({
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
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });
});
