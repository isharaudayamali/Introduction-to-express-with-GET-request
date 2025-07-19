const express =require('express');
const router = express.Router();
module.exports = router; 

const userController = require('./../controller/userController');

router.get('/',  userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.post('/', userController.createNewUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser); 