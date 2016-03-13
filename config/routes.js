/**
 * routes.js
 * 
 * Configure the http routes
 * Example values are commented out below
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/

module.exports = {

	/*
	 *  '/hello': 'SiteController.world',
	 *
	 *  'GET /multi': [
	 * 		'SiteController.foo',
	 * 		'SiteController.bar'
	 *  ]
	 */

	'/':         'SiteController.global',
	'/hello':    'SiteController.world',
	'GET /user': 'SiteController.user'
};
