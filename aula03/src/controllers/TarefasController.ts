import createError from "http-errors";
import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tarefa } from "../entity/Tarefa";

export class TarefasController {
    static async obtemTodasTarefas(req: Request, res: Response, next: NextFunction) {        
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

            if (!tarefa) throw createError(404, "Usuário não foi encontrado");

            res.json(tarefa);
        } catch (error) {
            next(error);
        }
    } 


    static async atualizaTarefa(req: Request, res: Response, next: NextFunction) {
        try {
            const tarefa = await getRepository(Tarefa).findOne(req.params.id);
            
            if (!tarefa) throw createError(404, "Tarefa não foi encontrada");

            await getRepository(Tarefa).merge(tarefa, req.body);
            const resultado = await getRepository(Tarefa).save(tarefa);

            return res.json(resultado);
        } catch (error) {
            next(error);
        }
    }

    static async removeTarefa(req: Request, res: Response, next: NextFunction) {
        try {
            await getRepository(Tarefa).delete(req.params.id);            

            return res.status(204).end();
        } catch (error) {
            next(error);
        }
    }
}