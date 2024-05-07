import express from "express";
import morgan from "morgan";
import router from "../routes";
import cors from "cors";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(router);
server.use(cors());

export default server;