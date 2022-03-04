import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
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

            if (!tarefa) throw createHttpError(404, "A tarefa não foi encontrada");

            res.json(tarefa);
        } catch (error) {
            next(error);
        }
    }

    static async atualizarTarefa(req: Request, res: Response, next: NextFunction) {
        try {
            const tarefa = await getRepository(Tarefa).findOne(req.params.id);
            if (!tarefa) throw createHttpError(404, "A tarefa não foi encontrada");
            getRepository(Tarefa).merge(tarefa, req.body);           
            const resultado = await getRepository(Tarefa).save(tarefa);

            res.json(resultado);
        } catch (error) {
            next(error);
        }
    }

    static async removerUmaTarefa(req: Request, res: Response, next: NextFunction) {
        try {
            const tarefa = await getRepository(Tarefa).findOne(req.params.id);
            if (!tarefa) throw createHttpError(404, "A tarefa não foi encontrada");
            const resultado = await getRepository(Tarefa).delete(tarefa.id);

            res.status(204).end();
        } catch (error) {
            next(error);
        }
    }
}