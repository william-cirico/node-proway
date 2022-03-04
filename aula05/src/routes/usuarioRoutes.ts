import express from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { autenticacaoMiddleware } from "../middlewares/autenticacaoMiddleware";

const router = express.Router();

/**
 *  @swagger
 *  /v1/usuarios:
 *      get:
 *          summary: Retorna todos os usuários do sistema
 *          tags:
 *              - Usuários
 *          responses:
 *              200:
 *                  description: Os usuários do sistema
 */
router.get("/", UsuarioController.obtemTodosUsuarios);

router.get("/:id", UsuarioController.obtemUmUsuario);

/**
 *  @swagger
 *  /v1/usuarios:
 *      post:
 *          summary: Cadastra um usuário
 *          tags:
 *              - Usuários
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              nome:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              senha:
 *                                  type: string
 *          responses:
 *              201:
 *                  description: Usuário criado
 *              409:
 *                  description: Já existe um usuário com esse e-mail
 *              "5XX":
 *                  description: Erro inesperado   
 */
router.post("/", UsuarioController.criaUsuario);
router.put("/:id", UsuarioController.atualizaUsuario);
router.delete("/:id", autenticacaoMiddleware, UsuarioController.removeUsuario);

// Obtém todas as tarefas de um usuário
// GET /:id/tarefas
router.get("/:id/tarefas", UsuarioController.obterTarefasDoUsuario);

router.post("/:id/tarefas", UsuarioController.criaTarefaParaUsuario);

export default router;