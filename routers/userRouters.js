const express =require('express');
const router = express.Router();
module.exports = router; 

const userController = require('./../controller/userController');

router.get('/users',  userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

router.post('/users', userController.createNewUser);

router.put('/users/:id', userController.updateUser);

router.delete('/users/:id', userController.deleteUser);