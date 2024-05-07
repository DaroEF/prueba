"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointment_1 = require("../../controllers/appointment");
var routerAppointment = (0, express_1.Router)();
routerAppointment.get("/", appointment_1.getAllAppointmentsController);
routerAppointment.get("/:id", appointment_1.getAppointmentByIdController);
routerAppointment.post("/schedule", appointment_1.postAppointmentController);
routerAppointment.put("/cancel", appointment_1.putAppointmentController);
exports.default = routerAppointment;
