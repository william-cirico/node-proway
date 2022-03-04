require("dotenv").config();
import express from "express";
import { createConnection } from "typeorm";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";
import usuarioRoutes from "./routes/usuarioRoutes";
import tarefaRoutes from "./routes/tarefaRoutes";
import autenticacaoRoutes from "./routes/autenticacaoRoutes";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"; 

const app = express();
const PORT = 8080;

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Todo API",
        version: "1.0.0",
        description: "Uma API de tarefas"
    },
    host: `localhost:${PORT}`
}

const swaggerOptions = {
    swaggerDefinition,
    apis: [`${__dirname}/routes/*.ts`]
}

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());
createConnection().then(connection => {
    app.use("/v1/usuarios", usuarioRoutes);
    app.use("/v1/tarefas", tarefaRoutes);
    app.use("/v1/autenticacao", autenticacaoRoutes);
    app.use(errorHandlerMiddleware);
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => console.log("O servidor está rodando na porta " + PORT));