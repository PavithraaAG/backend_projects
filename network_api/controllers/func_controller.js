const application_model = require("../models/application_model")
const exchange_model = require("../models/exchange_model");
const metricdata_model = require("../models/metricdata_model")
const axios = require('axios');
const utils = require('../utils/utils')

exports.application = async (req, res) => {
    let response = await utils.sendRequest("network")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    
    for (var i = 0; i < response.data.data.payload.length; i++) {
        let data = await application_model.find({ applicationId: response.data.data.payload[i].applicationId })
        if(data.length === 0){
            await application_model.create({ applicationId: response.data.data.payload[i].applicationId })
        }
    }
    res.send("Application data saved successfully")
}

exports.exchange = async (req, res) => {
    let response = await utils.sendRequest("network")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    let _id = response.data.data._id
    let user_id = response.data.data.user_id
    let member_id = response.data.data.memberId
    let ip = response.data.data.ip
    let exchangeId = response.data.data.exchangeId
    let timestamp = response.data.data.timestamp
    let groupId = response.data.data.groupId
    let sequenceId = response.data.data.sequenceId
    let data = await exchange_model.find({ exchangeId: exchangeId })
    if(data.length === 0) {
        await exchange_model.create({ _id: _id, user_id: user_id, member_id: member_id, ip: ip, exchangeId: exchangeId, sequenceId: sequenceId, timestamp: timestamp, groupId: groupId, sequenceId: sequenceId, groupId: groupId })
    }
    res.send("Exchange created successfully")
}

exports.metricdata = async (req, res) => {
    let response = await utils.sendRequest("network")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    for(let i=0;i<response.data.data.payload.length;i++){
        for(let j=0;j<response.data.data.payload[i].metricData.length;j++){
            metricdata_model.create({metricdata:response.data.data.payload[i].metricData[j]})
        }
    }
    res.send("Metric data created successfully")
}