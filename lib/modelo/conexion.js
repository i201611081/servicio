
const {Pool, Client} = require('pg');

module.exports = new Pool({
	  user: 'aomzqgzfiyjrcy',
	  host: 'ec2-50-16-185-9.compute-1.amazonaws.com',
	  database: 'd5tqsh0pp3t950',
	  password: 'd535e0a7000e178aeeaa4fca4ef2c7ac9ecea752711606434e24eacc39610410',
	  port: 5432,
	  ssl:true
	});

