"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserLoginController = exports.postUserRegisterController = exports.getUserByIdController = exports.getAllUsersController = void 0;
function getAllUsersController(req, res) {
    res.status(200).send("Get all Users");
}
exports.getAllUsersController = getAllUsersController;
function getUserByIdController(req, res) {
    var id = req.params.id;
    res.status(200).send("Get User by id, your id is: ".concat(id));
}
exports.getUserByIdController = getUserByIdController;
function postUserRegisterController(req, res) {
    var user = req.body;
    res.send(201).json({ message: "Post register User", body: user });
}
exports.postUserRegisterController = postUserRegisterController;
function postUserLoginController(req, res) {
    var user = req.body;
    res.send(201).json({ message: "Post login User", body: user });
}
exports.postUserLoginController = postUserLoginController;
