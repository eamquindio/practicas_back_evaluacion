const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const SelfAppraisalRepository = require('../../app/repositories/SelfAppraisalRepository');
const Helper = require('../Helper');

const API = '/api/practicas-ms/selfAppraisal';
chai.use(chaiHttp);

describe('SelfAppraisal CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('find SelfAppraisal test', async () => {
    await SelfAppraisalRepository.create({
      code: '1',
      date: '1',
      labor_link: '1',
      recommend: '1',
      student_comment: '1',
      aspects_code: '1',
      practice_id: 1,
    });

    return chai
      .request(app)
      .get(`${API}/1`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body, {
          code: '1',
          date: '1',
          labor_link: '1',
          recommend: '1',
          student_comment: '1',
          aspects_code: '1',
          practice_id: 1,
        });
      });
  });

  it('find SelfAppraisal not found test', async () => chai
    .request(app)
    .get(`${API}/1`)
    .catch((error) => {
      assert.equal(error.status, 404);
    }));
});
