import express from "express";
import { TarefasController } from "../controllers/TarefasController";

const routes = express.Router();

routes.get("/", TarefasController.obtemTodasTarefas);
routes.get("/:id", TarefasController.obtemUmaTarefa);
routes.put("/:id", TarefasController.atualizaTarefa);
routes.delete("/:id", TarefasController.removeTarefa);

export default routes;