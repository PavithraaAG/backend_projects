const func_controller=require('../controllers/func_controller')
const express = require('express');
const router = express.Router();


router.get('/comment_details',func_controller.get_comments);
router.get('/user_details',func_controller.get_user_details)


module.exports =router