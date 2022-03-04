import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { getRepository } from "typeorm";
import { Tarefa } from "../entity/Tarefa";
import { Usuario } from "../entity/Usuario";

export class UsuarioController {
    static async obtemTodosUsuarios(req: Request, res: Response, next: NextFunction) {
        try {
            const usuarios = await getRepository(Usuario).find();
            res.json(usuarios);
        } catch (error) {
            next(error);
        }
    }

    static async obtemUmUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const usuario = await getRepository(Usuario).findOne(req.params.id);

            if (!usuario) throw createHttpError(404, "Usuário não foi encontrado");

            res.json(usuario);
        } catch (error) {
            next(error);
        }        
    }

    static async criaUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const usuarioJaExiste = await getRepository(Usuario)
                .createQueryBuilder("usuario")
                .where("usuario.email = :email", { email: req.body.email })
                .getOne();

            if (usuarioJaExiste) throw createHttpError(404, "Já existe um usuário com esse e-mail cadastrado");

            const novoUsuario = getRepository(Usuario).create(req.body);
            const resultado = await getRepository(Usuario).save(novoUsuario);
            res.status(201).json(resultado);
        } catch (error) {
            next(error);
        }        
    }

    static async atualizaUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const usuario = await getRepository(Usuario).findOne(req.params.id);

            if (!usuario) throw createHttpError(404, "Usuário não foi encontrado");

            getRepository(Usuario).merge(usuario, req.body);
            const resultado = await getRepository(Usuario).save(usuario);

            res.json(resultado);
        } catch (error) {
            next(error);
        }        
    }


    static async removeUsuario(req: Request, res: Response, next: NextFunction) {    
        try {
            const usuario = await getRepository(Usuario).findOne(req.params.id);

            if (!usuario) throw createHttpError(404, "Usuário não foi encontrado");

            await getRepository(Usuario).delete(usuario);
            res.status(204).end();            
        } catch (error) {
            next(error);
        }        
    }

    static async criaTarefaParaUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const usuario = await getRepository(Usuario).findOne(req.params.id);
            
            if (!usuario) throw createHttpError(404, "Usuário não foi encontrado");

            const novaTarefa = new Tarefa();
            novaTarefa.descricao = req.body.descricao;
            novaTarefa.expiraEm = req.body.expiraEm;
            novaTarefa.usuario = usuario;            

            const resultado = await getRepository(Tarefa).save(novaTarefa);
                        
            res.status(201).json(resultado);
        } catch (error) {
            next(error);
        }        
    }

    static async obterTarefasDoUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const usuario = await getRepository(Usuario).findOne(req.params.id, { relations: ["tarefas"] });            
            
            if (!usuario) throw createHttpError(404, "Usuário não foi encontrado");

            res.json(usuario.tarefas);
        } catch (error) {
            next(error);
        }        
    }
}