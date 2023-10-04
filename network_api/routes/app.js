const func_controller = require('../controllers/func_controller')
const express = require('express');
const router = express.Router();

router.get('/application',func_controller.application);
router.get("/exchange",func_controller.exchange);
router.get("/metricdata",func_controller.metricdata);

module.exports = router