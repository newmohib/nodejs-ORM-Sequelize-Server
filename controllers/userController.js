var models = require('../models');


module.exports = {
	fetchAll(req, res){
		models.User.findAll()
		.then(function(users){
			res.status(200).json(users);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
    },
}