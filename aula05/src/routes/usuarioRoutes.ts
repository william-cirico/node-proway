import express from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const router = express.Router();

/*
GET - Obtem
POST - Cria
PUT - Atualiza
DELETE - Remove
*/

router.get("/", UsuarioController.obtemTodosUsuarios);
router.get("/:id", UsuarioController.obtemUmUsuario);
router.post("/", UsuarioController.criaUsuario);
router.put("/:id", UsuarioController.atualizaUsuario);
router.delete("/:id", UsuarioController.removeUsuario);

router.post("/:id/tarefas", UsuarioController.criaTarefaParaUsuario);

export default router;