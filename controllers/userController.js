var models = require('../models');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
	//http://localhost:4000/fetchAll

	fetchAll(req, res) {
		models.User.findAll()
			.then(function (users) {
				res.status(200).json(users);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	fetchOne(req, res) {
		models.User.findAll({
			where: {
				id: req.body.id
			}
		})
			.then(function (user) {
				res.status(200).json(user);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	create(req, res) {
		//req.sanitize('firstName').escape();
		let { firstName, lastName, email } = req.body
		models.User.create({
			firstName: firstName,
			lastName: lastName,
			email: email,
		})
			.then((user) => {
				//console.log("here",user.get())
				res.status(200).json(user);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	findAndCountAll(req, res) {
		let { offset, limit } = req.body;
		models.User.findAndCountAll({
			// where: {
			// 	title: {
			// 		[Op.like]: 'foo%'
			// 	}
			// },
			//where: { id: [1,2,3] },

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
	},
	findWithOr(req, res) {
		let { email } = req.body;
		models.User.findOne({
			where: {
				email: email,
				// [Op.or]: [
				// 	{ id: [1, 2, 3] }
				// ],
			}
		})
			.then(result => {
				console.log(result);
				res.status(200).json(result);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	findAllWithOrder(req, res) {
		let { orderBy } = req.body;
		//DESC
		models.User.findAll({
			order: [
				['id', orderBy],
			]
		})
			.then(function (users) {
				res.status(200).json(users);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	max(req, res) {
		let { maxFieldName } = req.body;
		//min
		//Op.gt
		models.User.max(
			maxFieldName,
			//{ where: { [maxFieldName]: { [Op.lt]: 4 } } }
		)
			.then(function (max) {
				res.status(200).json(max);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	countRecord(req, res) {
		models.User.count(
			{
				where: { 'id': { [Op.gt]: 2 } }
			}
		)
			.then((count) => {
				res.status(200).json(count);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});

	},
	sum(req, res) {
		let { maxFieldName } = req.body;
		//min
		//Op.gt
		models.User.sum(
			maxFieldName
			// ,{ where: { [ maxFieldName ]: { [Op.lt]: 4 } } }
		)
			.then(function (sum) {
				res.status(200).json(sum);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	multiModel(req, res) {
		let { maxFieldName } = req.body;
		models.User.findAll({
			// include: [{
			// 	model: Tool,
			// 	as: 'Customers',
			// 	where: { name: { [Op.like]: '%ooth%' } }
			// }]
		})
			.then(function (user) {
				res.status(200).json(user);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	}
}