import createError from "http-errors";
import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Usuario } from "../entity/Usuario";
import { Tarefa } from "../entity/Tarefa";

export class UsuariosController {
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

            if (!usuario) throw createError(404, "Usuário não foi encontrado");

            res.json(usuario);
        } catch (error) {
            next(error);
        }
    } 

    static async criaUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const usuarioJaCriado = await getRepository(Usuario)
                .createQueryBuilder("usuario")
                .where("usuario.email = :email", { email: req.body.email })
                .getOne();

            if (usuarioJaCriado) throw createError(409, "Já existe um usuário com esse e-mail cadastrado");

            const novoUsuario = getRepository(Usuario).create(req.body);
            const resultado = await getRepository(Usuario).save(novoUsuario);

            return res.status(201).json(resultado);
        } catch (error) {
            next(error);
        }
    }

    static async atualizaUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const usuario = await getRepository(Usuario).findOne(req.params.id);
            
            if (!usuario) throw createError(404, "Usuário não foi encontrado");

            await getRepository(Usuario).merge(usuario, req.body);
            const resultado = await getRepository(Usuario).save(usuario);

            return res.json(resultado);
        } catch (error) {
            next(error);
        }
    }

    static async removeUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            await getRepository(Usuario).delete(req.params.id);            

            return res.status(204).end();
        } catch (error) {
            next(error);
        }
    }

    static async criaTarefaParaUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const usuario = await getRepository(Usuario).findOne(req.params.id);            

            if (!usuario) throw createError(404, "Usuário não foi encontrado");

            const novaTarefa = new Tarefa();
            await getRepository(Tarefa).merge(novaTarefa, req.body);
            novaTarefa.usuario = usuario;
            const resultado = await getRepository(Tarefa).save(novaTarefa);

            return res.status(201).json(resultado);
        } catch (error) {
            next(error);
        }
    }
}