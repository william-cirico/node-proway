import express from "express";
import { UsuariosController } from "../controllers/UsuariosController";


const routes = express.Router();

routes.get("/", UsuariosController.obtemTodosUsuarios);
routes.get("/:id", UsuariosController.obtemUmUsuario);
routes.post("/", UsuariosController.criaUsuario);
routes.put("/:id", UsuariosController.atualizaUsuario);
routes.delete("/:id", UsuariosController.removeUsuario);

routes.post("/:id/tarefas", UsuariosController.criaTarefaParaUsuario);

export default routes;