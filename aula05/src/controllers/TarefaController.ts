import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tarefa } from "../entity/Tarefa";

export class TarefaController {
    static async obtemTarefas(req: Request, res: Response, next: NextFunction) {
        try {
            const tarefas = await getRepository(Tarefa).find();
            res.json(tarefas);
        } catch (error) {
            next(error);
        }
    }

    static async obtemUmaTarefa(req: Request, res: Response, next: NextFunction) {
        try {
            const tarefa = await getRepository(Tarefa).findOne(req.params.id);
            res.json(tarefa);
        } catch (error) {
            next(error);
        }
    }
}