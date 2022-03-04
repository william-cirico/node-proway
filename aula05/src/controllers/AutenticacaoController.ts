import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { getRepository } from "typeorm";
import jwt from "jsonwebtoken";
import { Usuario } from "../entity/Usuario";

export class AutenticacaoController {
    static criaAccessToken(usuario: any) {
        // @ts-ignore
        return jwt.sign({ sub: usuario.id }, process.env.ACCESS_TOKEN_SECRET, { algorithm: "HS256", expiresIn: Date.now() + 5 * 60 * 1000 });
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, senha } = req.body;

            const usuario = await getRepository(Usuario)
                .createQueryBuilder("usuario")
                .where("usuario.email = :email AND usuario.senha = :senha", { email, senha })
                .getOne();                        

            if (!usuario) throw createHttpError(401, "E-mail ou senha inválidos");

            const token = AutenticacaoController.criaAccessToken(usuario);

            res.json({ token, type: "Bearer" });
        } catch (error) {
            next(error);
        }
    }
}