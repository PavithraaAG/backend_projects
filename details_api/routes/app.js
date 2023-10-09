const express = require('express');
const router = express.Router();
const funcController= require('../controllers/funcController')

router.get('/cpu',funcController.cpu)
router.get('/cpu_load',funcController.cpu_load)
router.get('/ram',funcController.ram)
router.get('/throughput_data',funcController.throughput_data)
router.get('/io_operations_data',funcController.io_operations_data)
router.get('/disk_average_wait_data',funcController.disk_average_wait_data)
router.get('/no_of_thread',funcController.no_of_thread)
router.get('/lama_app_failureauth',funcController.lama_app_failureauth)
router.get('/lama_app_latency',funcController.lama_app_latency)
router.get('/lama_app_throughput',funcController.lama_app_throughput)
router.get('/tcp_connection',funcController.tcp_connection)
router.get('/up_time',funcController.up_time_connection)
router.get('/hhd',funcController.hhd)
router.get('/interface_connection',funcController.interface_connection)
router.get('/details',funcController.details)


module.exports=router