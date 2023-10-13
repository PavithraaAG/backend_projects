const utils = require('../utils/utils')
const loginModel = require('../models/loginModel')

exports.login = async (req, res) => {
    let response = await utils.login()
    res.send(response)
}
exports.post_metricdata = async (req, res) => {
    let response = await utils.post_metricdata()
    await loginModel.create({ error: response.error, data: response.data })
    res.send(response)
}