module.exports.global = function (req, res) {
	res.redirect('/hello');
};

module.exports.world = function (req, res) {
	res.json({
		message: "hello",
		world: true,
		random: Utils.Random.generateRandomString(8),
	});
};

module.exports.user = function (req, res) {
	var bob = new Models.User({ 'username': 'bobby' });
	
	res.render('user', {
		user: bob,
		title: 'Bobbys Blog'
	});
};
