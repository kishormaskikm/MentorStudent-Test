const express = require('express');
const { UserController } = require('../../controllers');
const {AuthRequestMiddlewares} = require('../../middlewares');

const router = express.Router();

router.post('/signUp', AuthRequestMiddlewares.validateAuthRequest, UserController.create);
router.post('/signin' ,AuthRequestMiddlewares.validateAuthRequest, UserController.signin);
module.exports = router;