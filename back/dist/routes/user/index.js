"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = require("../../controllers/user");
var routerUser = (0, express_1.Router)();
routerUser.get("/", function (req, res) {
    res.send("get all users");
});
routerUser.get("/:id", user_1.getAllUsersController);
routerUser.post("/register", user_1.getUserByIdController);
routerUser.post("/login", user_1.postUserLoginController);
routerUser.post("/REGISTER", user_1.postUserRegisterController);
exports.default = routerUser;
