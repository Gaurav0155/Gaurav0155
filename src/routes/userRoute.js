const userRoute = require('express').Router();
const db = require('../config/conn');
const userController = require('../controllers/userController')
const productController = require('../controllers/productController');
const upload = require('../utils/multer');
const expressValidator =  require("../validation/expressValidator")



// for registeration 
userRoute.post('/member', expressValidator.UserRegister , userController.create);

// for  get all users
userRoute.get('/users',userController.read);

// update query
userRoute.post('/users/:id',expressValidator.UserRegister ,userController.update);

// delete
userRoute.delete('/user/delete/:id' ,userController.delete);

// find specific user by id 
userRoute.get('/user/:id' ,userController.getUser);


userRoute.post('/login',userController.login);

userRoute.get('/', userController.home)

userRoute.get('/member', userController.member);


userRoute.get('/sidebar', userController.findSidebar);


userRoute.post('/product',upload.single('img') , productController.productCreate, productController.productCreate)


// query for auth
// SELECT mm.module_link , mm.user_module , u.user_id FROM master_modules as mm JOIN member_module AS mu ON mm.id = mu.module_id JOIN users AS u ON u.user_id = mu.user_id;
module.exports = userRoute;
