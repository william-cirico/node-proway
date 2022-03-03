import express from "express";
import { createConnection } from "typeorm";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";
import usuarioRoutes from "./routes/usuarioRoutes";
import tarefaRoutes from "./routes/tarefaRoutes";

const app = express();
const PORT = 8080;

// POST comentar essa linha aqui
app.use(express.json());

createConnection().then(connection => {
    app.use("/v1/usuarios", usuarioRoutes);
    app.use("/v1/tarefas", tarefaRoutes);
    app.use(errorHandlerMiddleware);
});

app.listen(PORT, () => console.log("O servidor está rodando na porta " + PORT));