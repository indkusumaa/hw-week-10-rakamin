const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hw10",
  password: "050799",
  port: 5432,
});

module.exports = pool;
