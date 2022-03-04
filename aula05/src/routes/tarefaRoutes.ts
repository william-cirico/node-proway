import express from "express";
import { TarefaController } from "../controllers/TarefaController";

const router = express.Router();

// Obter todas as tarefas
router.get("/", TarefaController.obtemTarefas);

// Obter uma tarefa
router.get("/:id", TarefaController.obtemUmaTarefa);

// Atualiza uma tarefa
router.put("/:id", TarefaController.atualizarTarefa);

// Remover uma tarefa
router.delete("/:id", TarefaController.removerUmaTarefa);

export default router;