const express =require('express');
const router = express.Router();

const userController = require('./../controller/userController');

router.get('/users',  userController.getAllUsers);

router.get('/user/:id', userController.getUserById);

module.exports = router; 