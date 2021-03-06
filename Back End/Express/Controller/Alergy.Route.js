var express = require('express');
var router = express.Router();
var Controller = require('./AlergyController');

router.post('/', function (req, res) {
    //if (req.headers.authorization === "admin123") {
        Controller.insertAlergy(req.body).then(function (data) {
            res.status(data.status).send({ message: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    // } else {
    //     res.status("401").send({ message: "You are not authorized !" });
    // }
});
router.get('/', function (req, res) {
    // if (req.headers.authorization === "admin123") {
        Controller.getAll().then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: "Error" });
        })
    // } else {
    //     res.status("401").send({ message: "You are not authorized !" });
    // }
});
router.get('/:id', function (req, res) {
    // if (req.headers.authorization === "admin123") {
        Controller.getAlergy(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    // } else {
    //     res.status("401").send({ message: "You are not authorized !" });
    // }
});
router.put('/:id', function (req, res) {
    // if (req.headers.authorization === "admin123") {
        Controller.updateAlergy(req.params.id, req.body).then(function (data) {
            res.status(data.status).send({ data: data.data });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    // } else {
    //     res.status("401").send({ message: "You are not authorized !" });
    // }
});
router.delete('/:id', function (req, res) {
    // if (req.headers.authorization === "admin123") {
        Controller.deleteAlergy(req.params.id).then(function (data) {
            res.status(data.status).send({ data: data.message });
        }).catch(function (err) {
            res.status(err.status).send({ message: err.message });
        })
    // } else {
    //     res.status("401").send({ message: "You are not authorized !" });
    // }
});
module.exports = router;