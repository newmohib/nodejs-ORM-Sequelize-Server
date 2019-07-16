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
	fetchOne(req, res){
		models.User.findAll({
			where: {
			  id: req.body.id
			}
		  })
		.then(function(user){
			res.status(200).json(user);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},
}