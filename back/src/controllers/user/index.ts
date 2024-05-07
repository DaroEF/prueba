import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService, postUserLoginService, postUserRegisterService } from "../../services/user";

async function getAllUsersController( req: Request, res: Response) {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
}

async function getUserByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(Number(id));
    if(user) res.status(200).json(user);
    else res.status(404).json({message: "Usuario no encontrado"})
    res.status(200).send(`Get User by id, your id is: ${id}`);
  } catch (error : any) {
    res.status(500).json({ message: error.message});
  }
}

async function postUserRegisterController(req: Request, res: Response) {
  try {
    const user = req.body;
    const newUser = await postUserRegisterService(user);
    res.status(201).json({ message: "Usuario registrado", newUser });
  } catch (error : any) {
    res.status(500).json({ message: error.message});
  }
}

async function postUserLoginController(req: Request, res: Response) {
try {
  const credentials = req.body;
  const id = await postUserLoginService(credentials);
  res.status(201).json({ message: "Usuario logeado", id});
} catch (error : any) {
  res.status(500).json({message : error.message});
}
}

export {
  getAllUsersController,
  getUserByIdController,
  postUserRegisterController,
  postUserLoginController
}