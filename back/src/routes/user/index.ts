import { Router, Request, Response } from "express";
import { getAllUsersController, getUserByIdController, postUserRegisterController, postUserLoginController } from "../../controllers/user";
const routerUser : Router = Router();

routerUser.get("/", (req: Request, res: Response) => { 
  res.send("get all users")
});
routerUser.get("/:id", getAllUsersController);
routerUser.post("/register", getUserByIdController);
routerUser.post("/login", postUserLoginController);
routerUser.post("/REGISTER", postUserRegisterController);

export default routerUser