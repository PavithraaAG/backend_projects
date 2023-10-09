const mongoose = require('mongoose');
require('dotenv').config();
const cpuSchema = new mongoose.Schema({
    details: String,
    percent_used: Number
});
const cpu_model = mongoose.model(`${process.env.DB_COLLECTION1}`, cpuSchema);


const cpu_loadSchema = new mongoose.Schema({
    time: String,
    time_str: String,
    total1: String,
    total5: String,
    total: String,
    warn: String,
    crit: String,
    cpuArr: String
});
const cpu_load_model = mongoose.model(`${process.env.DB_COLLECTION2}`, cpu_loadSchema);


const ramSchema = new mongoose.Schema({
    details: String,
    percent_used: Number,
    used: Number,
    used_unit: String,
    total: Number,
    total_unit: String
});
const ram_model = mongoose.model(`${process.env.DB_COLLECTION3}`, ramSchema);

const throughput_dataSchema = new mongoose.Schema({
    time: String,
    time_str: String,
    read_data: String,
    write_data: String
});
const throughput_data_model = mongoose.model(`${process.env.DB_COLLECTION4}`, throughput_dataSchema);

const io_operations_dataSchema = new mongoose.Schema({
    time: String,
    time_str: String,
    read_data: String,
    write_data: String
});
const io_operations_data_model = mongoose.model(`${process.env.DB_COLLECTION5}`, io_operations_dataSchema);

const disk_average_wait_dataSchema = new mongoose.Schema({
    time: String,
    time_str: String,
    read_data: String,
    write_data: String
});
const disk_average_wait_data_model = mongoose.model(`${process.env.DB_COLLECTION6}`, disk_average_wait_dataSchema);


const no_of_threadSchema = new mongoose.Schema({
    time: String,
    time_str: String,
    thread_data: String
});
const no_of_thread_model = mongoose.model(`${process.env.DB_COLLECTION7}`, no_of_threadSchema);

const lama_app_failureauthSchema = new mongoose.Schema({
    time: String,
    time_str: String,
    timekey: String,
    count: Number
});
const lama_app_failureauth_model = mongoose.model(`${process.env.DB_COLLECTION8}`, lama_app_failureauthSchema);

const lama_app_latencySchema = new mongoose.Schema({
    time: String,
    time_str: String,
    timekey: Number,
    max: Number,
    min: Number,
    avg: Number,
    med: Number
});
const lama_app_latency_model = mongoose.model(`${process.env.DB_COLLECTION9}`, lama_app_latencySchema);

const lama_app_throughputSchema = new mongoose.Schema({
    time: String,
    time_str: String,
    timekey: Number,
    max: Number,
    min: Number,
    avg: Number,
    med: Number
});
const lama_app_throughput_model = mongoose.model(`${process.env.DB_COLLECTION10}`, lama_app_throughputSchema);

const tcp_connectionSchema = new mongoose.Schema({
    time: String,
    time_str: String,
    established: String,
    time_wait: String,
    listen: String,
});
const tcp_connection_model = mongoose.model(`${process.env.DB_COLLECTION11}`, tcp_connectionSchema);

const up_time_connectionSchema = new mongoose.Schema({
    last_time: String,
    details: String
});
const up_time_connection_model = mongoose.model(`${process.env.DB_COLLECTION12}`, up_time_connectionSchema);

const hhdSchema = new mongoose.Schema({
    _id: String,
    path: String,
    details: String,
    percent_used: Number,
    used: Number,
    total: Number,
    used_unit: String,
    total_unit: String
});
const hhd_model = mongoose.model(`${process.env.DB_COLLECTION13}`, hhdSchema);

const interface_connectionSchema = new mongoose.Schema({
    in_bandwidth: String,
    out_bandwidth: String,
    inunicast: String,
    outunicast: String,
    inMulticast: String,
    outMulticast: String,
    inErr: String,
    outErr: String,
    _id: String,
    interfaceName: String,
    time: String,
    time_str: String
});
const interface_connection_model = mongoose.model(`${process.env.DB_COLLECTION14}`, interface_connectionSchema);

const details_connectionSchema = new mongoose.Schema({
    livestateId: String,
    host: String,
    ip: String,
    userId: String,
    ctime: String,
    createdAt: String,
    updatedAt: String,
});
const details_connection_model = mongoose.model(`${process.env.DB_COLLECTION15}`, details_connectionSchema);

module.exports = {
    cpu_model,
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
    details_connection_model
}