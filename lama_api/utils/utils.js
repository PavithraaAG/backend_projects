const { default: axios } = require('axios');
const API_URL1 = process.env.API_URL1;
const API_URL2 = process.env.API_URL2;
const metricModel = require("../models/metricdataModel")

const login = async () => {
    try {
        return await axios.post(API_URL1, {
            "memberId": "06000",
            "loginId": "ApiUser06000",
            "password": "0CxUgThnqlK6gaKU2HnL2A=="
        })
    }
    catch (err) {
        return { error: err.message, token: "0CxUgThnqlK6gaKU2H" }
    }
}
const post_metricdata = async () => {
    let data = await metricModel.find({})
    try {
        return await axios.post(API_URL2, data);
    }
    catch (err) {
        return { error: err.message, data: data }
    }
}

module.exports = {
    login,
    post_metricdata
}