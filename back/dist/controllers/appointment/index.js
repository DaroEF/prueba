"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAppointmentController = exports.postAppointmentController = exports.getAppointmentByIdController = exports.getAllAppointmentsController = void 0;
function getAllAppointmentsController(req, res) {
    res.status(200).send("Get all Appointments");
}
exports.getAllAppointmentsController = getAllAppointmentsController;
function getAppointmentByIdController(req, res) {
    var id = req.params.id;
    res.status(200).send("Get Appointment by id, your id is: ".concat(id));
}
exports.getAppointmentByIdController = getAppointmentByIdController;
function postAppointmentController(req, res) {
    var appointment = req.body;
    res.send(201).json({ message: "Post Appointment", body: appointment });
}
exports.postAppointmentController = postAppointmentController;
function putAppointmentController(req, res) {
    var appointment = req.body;
    res.send(201).json({ message: "Put Appointment", body: appointment });
}
exports.putAppointmentController = putAppointmentController;
