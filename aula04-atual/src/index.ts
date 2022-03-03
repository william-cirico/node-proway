import express, { Request, Response } from "express";
import { createConnection, getRepository } from "typeorm";
import { Usuario } from "./entity/Usuario";

const app = express();
const PORT = 8080;

createConnection().then(connection => {
    app.get("/usuarios", async (req: Request, res: Response) => {
        const usuarios = await getRepository(Usuario).find();

        res.json(usuarios);
    });

    app.get("/usuarios/:id", async (req: Request, res: Response) => {
        try {
            const usuario = await getRepository(Usuario).findOneOrFail(req.params.id);

            res.json(usuario);
        } catch (error) {
            res.status(404).json({ error: "Usuário não foi encontrado" });
        }        
    });
});

app.listen(PORT, () => console.log("O servidor está rodando na porta " + PORT));