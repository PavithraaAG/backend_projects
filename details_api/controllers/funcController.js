const { cpu_model,
    cpu_load_model,
    ram_model,
    throughput_data_model,
    io_operations_data_model,
    disk_average_wait_data_model,
    no_of_thread_model,
    lama_app_failureauth_model,
    lama_app_latency_model,
    lama_app_throughput_model,
    tcp_connection_model,
    up_time_connection_model,
    hhd_model,
    interface_connection_model,
    details_connection_model } = require('../models/model_collection')
const utils = require('../utils/utils')

exports.cpu = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await cpu_model.create({ details: response.data.data.cpu.details, percent_used: response.data.data.cpu.percent_used })
    console.log(response.data.data.cpu)
    res.send("cpu data saved successfully")
}

exports.cpu_load = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await cpu_load_model.create({
        time: response.data.data.cpu_load.time,
        time_str: response.data.data.cpu_load.time_str,
        total1: response.data.data.cpu_load.total1,
        total5: response.data.data.cpu_load.total5,
        total: response.data.data.cpu_load.total,
        warn: response.data.data.cpu_load.warn,
        crit: response.data.data.cpu_load.crit,
        cpuArr: response.data.data.cpu_load.cpuArr
    })
    console.log(response.data.data.cpu_load)
    res.send("cpu_load data saved successfully")
}

exports.ram = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await ram_model.create({
        details: response.data.data.ram.details,
        percent_used: response.data.data.ram.percent_used,
        used: response.data.data.ram.used,
        used_unit: response.data.data.ram.used_unit,
        total: response.data.data.ram.total,
        total_unit: response.data.data.ram.total_unit
    })
    console.log(response.data.data.ram)
    res.send("ram data saved successfully")
}

exports.throughput_data = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await throughput_data_model.create({
        time: response.data.data.disk_io_summary.throughput_data.time,
        time_str: response.data.data.disk_io_summary.throughput_data.time_str,
        read_data: response.data.data.disk_io_summary.throughput_data.read_data,
        write_data: response.data.data.disk_io_summary.throughput_data.write_data
    })
    console.log(response.data.data.disk_io_summary.disk_average_wait_data)
    res.send("throughput_data saved successfully")
}

exports.io_operations_data = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await io_operations_data_model.create({
        time: response.data.data.disk_io_summary.io_operations_data_model.time,
        time_str: response.data.data.disk_io_summary.io_operations_data.time_str,
        read_data: response.data.data.disk_io_summary.io_operations_data.read_data,
        write_data: response.data.data.disk_io_summary.io_operations_data.write_data
    })
    console.log(response.data.data.disk_io_summary.io_operations_data)
    res.send("io_operations_data saved successfully")
}

exports.disk_average_wait_data = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await disk_average_wait_data_model.create({
        time: response.data.data.disk_io_summary.disk_average_wait_data.time,
        time_str: response.data.data.disk_io_summary.disk_average_wait_data.time_str,
        read_data: response.data.data.disk_io_summary.disk_average_wait_data.read_data,
        write_data: response.data.data.disk_io_summary.disk_average_wait_data.write_data
    })
    console.log(response.data.data.disk_io_summary.disk_average_wait_data)
    res.send("disk_average_wait_data saved successfully")
}

exports.no_of_thread = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await no_of_thread_model.create({
        time: response.data.data.no_of_thread.time,
        time_str: response.data.data.no_of_thread.time_str,
        thread_data: response.data.data.no_of_thread.thread_data
    })
    console.log(response.data.data.no_of_thread)
    res.send("no_of_thread saved successfully")
}

exports.lama_app_failureauth = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await lama_app_failureauth_model.create({
        time: response.data.data.lama_app_failureauth.time,
        time_str: response.data.data.lama_app_failureauth.time_str,
        timekey: response.data.data.lama_app_failureauth.timekey,
        count: response.data.data.lama_app_failureauth.count
    })
    console.log(response.data.data.lama_app_failureauth)
    res.send("lama_app_failureauth saved successfully")
}

exports.lama_app_latency = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await lama_app_latency_model.create({
        time: response.data.data.lama_app_latency.time,
        time_str: response.data.data.lama_app_latency.time_str,
        timekey: response.data.data.lama_app_latency.timekey,
        max: response.data.data.lama_app_latency.max,
        min: response.data.data.lama_app_latency.min,
        avg: response.data.data.lama_app_latency.avg,
        med: response.data.data.lama_app_latency.med
    })
    console.log(response.data.data.lama_app_latency)
    res.send("lama_app_latency saved successfully")
}

exports.lama_app_throughput = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await lama_app_throughput_model.create({
        time: response.data.data.lama_app_throughput.time,
        time_str: response.data.data.lama_app_throughput.time_str,
        timekey: response.data.data.lama_app_throughput.timekey,
        max: response.data.data.lama_app_throughput.max,
        min: response.data.data.lama_app_throughput.min,
        avg: response.data.data.lama_app_throughput.avg,
        med: response.data.data.lama_app_throughput.med
    })
    console.log(response.data.data.lama_app_throughput)
    res.send("lama_app_throughput saved successfully")
}

exports.tcp_connection = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await tcp_connection_model.create(response.data.data.tcp_connection)
    console.log(response.data.data.tcp_connection)
    res.send("tcp_connection saved successfully")
}

exports.up_time_connection = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await up_time_connection_model.create(response.data.data.up_time)
    console.log(response.data.data.up_time_connection)
    res.send("up_time_connection saved successfully")
}

exports.hhd = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    console.log(response.data.data.hhd)
    for (var i = 0; i < response.data.data.hhd.length; i++) {

        await hhd_model.create(response.data.data.hhd[i])

    }
    res.send("hhd data saved successfully")
}
exports.interface_connection = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    console.log(response.data.data.interface)
    for (var i = 0; i < response.data.data.interface.length; i++) {

        await interface_connection_model.create(response.data.data.interface[i])

    }
    res.send("interface data saved successfully")
}

exports.details = async (req, res) => {
    let response = await utils.sendRequest("details")
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    await details_connection_model.create(response.data.data)
    console.log(response.data.data)
    res.send("details data saved successfully")
}