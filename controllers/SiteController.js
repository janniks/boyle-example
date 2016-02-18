module.exports.world = function (req, res) {
	res.json({
		message: "hello",
		world: true
	});
};

module.exports.user = function (req, res) {
	var bob = new Models.User({ 'username': 'bobby' });
	res.json(bob);
};
