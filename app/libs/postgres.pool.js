
const { Pool } = require('pg');
const config = require('../config/config');

let URI = '';

if(config.isProd){
  URI = config.dbUrl;  // URI = 'postgres://user:pass@localhost:5432/dbname';
}else{
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
}

  const pool = new Pool({
    connectionString: URI,
  });


module.exports = pool;
