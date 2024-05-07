"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchServiceController = exports.putServiceController = exports.postServiceController = exports.getServiceByIdController = exports.getAllServicesController = void 0;
function getAllServicesController(req, res) {
    res.status(200).send("Get all Services");
}
exports.getAllServicesController = getAllServicesController;
function getServiceByIdController(req, res) {
    var id = req.params.id;
    res.status(200).send("Get Service by id, your id is: ".concat(id));
}
exports.getServiceByIdController = getServiceByIdController;
function postServiceController(req, res) {
    var service = req.body;
    res.send(201).json({ message: "Post Service", body: service });
}
exports.postServiceController = postServiceController;
function putServiceController(req, res) {
    var service = req.body;
    res.send(201).json({ message: "Put Service", body: service });
}
exports.putServiceController = putServiceController;
function patchServiceController(req, res) {
    var service = req.body;
    res.send(201).json({ message: "Patch Service", body: service });
}
exports.patchServiceController = patchServiceController;
