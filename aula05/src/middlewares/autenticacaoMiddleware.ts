import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";

export const autenticacaoMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // 'Bearer Token'

    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
        next(createHttpError(401, "Não autorizado"));
        return
    }

    try {
        // @ts-ignore
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        res.locals.id = payload.sub;
    } catch (err) {
        next(createHttpError(401, "Não autorizado"));
        return
    }    

    next();
}