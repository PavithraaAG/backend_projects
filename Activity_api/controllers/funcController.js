const userModel = require('../models/userModel');
const activityModel = require('../models/activityModel');

exports.userdetails = (req, res) => {
    userModel.create({
        username: req.body.username,
        Uname: req.body.uname,
        DOB: req.body.dob,
        Address: req.body.address
    }).then((data) => {
        console.log(data);
        activityModel.create({title: "Data Created", action: "created", data: data })
            .then((data1) => { res.send(data1) })
    })
    
};

exports.getuserdetails = (req, res) => {
    userModel.find({})
        .then((data) => {
            console.log(data);
            res.send(data);
        })
}

exports.update = (req, res) => {
    userModel.findByIdAndUpdate(req.params.id, { username: req.body.username, Uname: req.body.uname, DOB: req.body.dob, Address: req.body.address })
        .then((data) => {
            if (data !== null) {
                console.log(data)
                activityModel.create({ uid:req.params.id,title: "Data Updated", action: "update", data: data })
                    .then((data1) => { res.send(data1) });
            } else {
                res.send("data not found")
            }
        });
};



exports.delete = (req, res) => {
    userModel.findByIdAndDelete(req.params.id)
        .then((data) => {
            if (data !== null) {
                console.log(data)
                activityModel.create({ uid:req.params.id, title: "Data Deleted", action: "delete", data: data })
                    .then((data) => {
                        res.send(data);
                    })
            } else {
                res.send("data not found may have been deleted already")
            }
        });
};