const categoryRoute = require('express').Router();
const db = require('../config/conn');
const categoryController = require('../controllers/categoryController');
const upload = require('../utils/multer');
const expressValidator =  require("../validation/expressValidator")


// for create category
categoryRoute.post('/category' , categoryController.categoryCreate)

// get all category
categoryRoute.get('/categories' , categoryController.get)

exports.module =categoryRoute