/**
 * routes.js
 * 
 * Configure the http routes
 * Default values are commented out below
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/

module.exports = [
	{
		'http': 'GET',
		'path': '/hello',
		'ctrl': 'SiteController.world'
	},
	{
		'http': 'GET',
		'path': '/user',
		'ctrl': 'SiteController.user'
	}
];
