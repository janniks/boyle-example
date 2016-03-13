module.exports.now = function (req, res, next) {
	log.info(Date.now());
	next();
};

module.exports.lastYear = function (req, res, next) {
	log.info(Date.now() - 22896000);
	next();
};

