var models = require('../models');
var tocken = require('../helpers/tocken');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
	//http://localhost:4000/fetchAll
	create(req, res) {
		//req.sanitize('firstName').escape();
		let { username,password ,id} = req.body.userDetail;
		console.log(req.body.userDetail);
		models.user.create({
			userDetailId: id,
			username: username,
			password: password,
			createdAt: new Date(),
            updatedAt: new Date()
		})
			.then((user) => {
				res.status(200).json({user,userDetail: req.body.userDetail});
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	findOne(req, res) {
		let { username,password } = req.body;
		models.user.findOne({
			where: {
				username: username,
			}
		})
		.then(result => {

		let	createToken=tocken.createToken({oauthData:result , header:req.header})
			console.log("createToken" ,createToken);
			res.status(200).json(result);
		})
		.catch(function (error) {
			res.status(500).json(error);
		});
	},
	fetchAll(req, res) {
		models.user.findAll()
			.then(function (users) {
				res.status(200).json(users);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	
	findAndCountAll(req, res) {
		let { offset, limit } = req.body;
		models.user.findAndCountAll({
			offset: offset,
			limit: limit
		})
			.then(result => {
				console.log(result.count);
				console.log(result.rows);
				res.status(200).json(result);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	}
}