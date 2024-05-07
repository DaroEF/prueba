import { Request, Response } from "express";
import { getAllAppointmentsService, getAppointmentByIdService, postAppointmentService, putAppointmentService } from "../../services/appointment";

function getAllAppointmentsController( req: Request, res: Response) {
  res.status(200).send("Get all Appointments");
}

function getAppointmentByIdController(req: Request, res: Response) {
  const { id } = req.params;
  res.status(200).send(`Get Appointment by id, your id is: ${id}`);
}

function postAppointmentController(req: Request, res: Response) {
  const appointment = req.body
  res.send(201).json({message: "Post Appointment", body: appointment});
}

function putAppointmentController(req: Request, res: Response) {
  const appointment = req.body;
  res.send(201).json({message: "Put Appointment", body: appointment});
}

export {
  getAllAppointmentsController,
  getAppointmentByIdController,
  postAppointmentController,
  putAppointmentController
}