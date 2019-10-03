<<<<<<< 9d22b69b257848424c3befff5719ddf5d8c2525d

const { DB_CONNECTION = 'postgres://postgres:1234@localhost:5432/selfAppraisal' } = process.env;

=======
const { DB_CONNECTION = 'postgres://localhost:5433/users_ms' } = process.env;
>>>>>>> insert autoevaluacion[resolves # 10]
const MAX_CONNECTION_POOLSIZE = 5;

module.exports = {
  client: 'pg',
  connection: DB_CONNECTION,
  pool: { min: 1, max: MAX_CONNECTION_POOLSIZE },
  acquireConnectionTimeout: 5000,
};
