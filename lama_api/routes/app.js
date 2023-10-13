const func_controller = require('../controllers/funcController')
const express = require('express');
const router = express.Router();

router.post("/login", func_controller.login);
router.post("/metricdata", func_controller.post_metricdata);


module.exports = router