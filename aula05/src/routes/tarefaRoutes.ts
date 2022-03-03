import express from "express";
import { TarefaController } from "../controllers/TarefaController";

const router = express.Router();

// Obter todas as tarefas
router.get("/", TarefaController.obtemTarefas);

// Obter uma tarefa
router.get("/:id", TarefaController.obtemUmaTarefa);

// Atualiza uma tarefa
// Remover uma tarefa

export default router;