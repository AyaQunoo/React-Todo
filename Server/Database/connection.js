const { Pool } = require('pg')
require('dotenv').config()

const { DB_URL } = process.env;
const option = {
    connectionString: DB_URL,
    ssl: false,
};

const pool = new Pool(option);
module.exports = pool;