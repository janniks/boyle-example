var userSchema = new process.DB.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		match: /.{2,}/			// at least 2 characters
	},
	email: String,
	password: String,
	created_on: {
		type: Date,
		default: Date.now
	}
});

module.exports = process.DB.Model('user', userSchema);
