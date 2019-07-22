var express = require('express');
var cors = require('cors');
// var Sequelize = require('sequelize');
// var models = require("./models");
 
var router = express.Router();
router.use(cors())
var helloMiddlewares = require('./helpers/middlewares');
var loginController = require('./controllers/loginController');
var signupController = require('./controllers/signupController');
var campaignController = require('./controllers/campaignController');
var tokenController = require('./controllers/tokenController');
var userController = require('./controllers/userController');
var userDetailsController = require('./controllers/userDetailsController');

//Home
router.post('/campaign',helloMiddlewares.isAuthorize, campaignController.createCampaign);

//login
//router.post('/login', loginController.login);
router.post('/signup', signupController.signup);
router.get('/sllUsersWithMiddleware', helloMiddlewares.nextModels , userDetailsController.fetchAll);
router.get('/allUsers', userDetailsController.fetchAll);
router.get('/user-specific', userDetailsController.fetchOne);
router.post('/create', userDetailsController.create ,userController.create);
router.post('/login', userController.findOne);

router.get('/findAndCountAll', userDetailsController.findAndCountAll);
router.get('/findWithOr', userDetailsController.findWithOr);
router.get('/findAllWithOrder', userDetailsController.findAllWithOrder);
router.get('/max', userDetailsController.max);
router.get('/countRecord', userDetailsController.countRecord);
router.get('/sum', userDetailsController.sum);
router.get('/multiModel', userDetailsController.multiModel);
router.post('/token', helloMiddlewares.authorizeWithToken , tokenController.token);

module.exports = router;



