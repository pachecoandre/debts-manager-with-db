const knex = require('knex')({
   client: 'mysql2',
   connection: {
       host: '127.0.0.1',
       port: 3306,
       user: 'root',
       password: 'root',
       database: 'debts-manager',
       timezone: '-03:00',
       dateStrings: true
   },
   pool: {
       min: 2,
       max: 10
   }
 })

module.exports = knex