import { ErrorRequestHandler } from "express";

export const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500);
    res.json({ error: err.message });
}