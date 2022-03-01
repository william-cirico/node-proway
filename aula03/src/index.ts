import express from "express";
import { createConnection } from "typeorm";
import { errorHandler } from "./middlewares/errorHandler";
import usuariosRoutes from "./routes/usuariosRoutes";
import tarefasRoutes from "./routes/tarefasRoutes";

const app = express();
const PORT = 8080;

createConnection().then(connection => {    
    app.use(express.json());
    app.use("/usuarios", usuariosRoutes);  
    app.use("/tarefas", tarefasRoutes);
    app.use(errorHandler);   
});

app.listen(PORT, () => console.log("O servidor está rodando na porta " + PORT));