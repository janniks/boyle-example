/**
 * middleware.js
 * 
 * Configure the middleware
 * Example values are commented out below
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/

module.exports = {

	/*
	 *  'GET /': 'whatTimeIsIt.now',
	 */

	'GET /': 'whatTimeIsIt.now',
	'GET /user': 'whatTimeIsIt.lastYear',
};
