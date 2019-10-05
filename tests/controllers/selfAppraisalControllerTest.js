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
      date: 'q',
      labor_link: 'q',
      recommend: 'q',
      student_comment: 'q',
      aspects_code: 'q',
      concepts: 'q',
      work_compliance: 'q',
      initiative: 'q',
      handling_tools: 'q',
      attitude: 'q',
      exploitation: 'q',
      evaluation: 'q',
      satisfaction: 'q',
      b_satisfaction: 'q',
      b_recommendation: 'q',
      practice_id: 1,
    });

    return chai
      .request(app)
      .get(`${API}/1`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body, {
          code: '1',
          date: 'q',
          labor_link: 'q',
          recommend: 'q',
          student_comment: 'q',
          aspects_code: 'q',
          concepts: 'q',
          work_compliance: 'q',
          initiative: 'q',
          handling_tools: 'q',
          attitude: 'q',
          exploitation: 'q',
          evaluation: 'q',
          satisfaction: 'q',
          b_satisfaction: 'q',
          b_recommendation: 'q',
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
