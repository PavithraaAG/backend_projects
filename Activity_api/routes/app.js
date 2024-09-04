const func_controller=require('../controllers/funcController')
const express = require('express');
const router = express.Router();

router.post('/userdetails',func_controller.userdetails);
router.get('/getuserdetails',func_controller.getuserdetails);
router.put("/update/:id",func_controller.update)
router.delete("/delete/:id",func_controller.delete)



module.exports = router