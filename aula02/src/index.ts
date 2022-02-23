import { Request, Response } from "express";

const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req: Request, res: Response) => {
    res.send("Olá mundo!");
});

app.put("/", (req: Request, res: Response) => {
    res.send("E agora?");
});

app.listen(PORT, () => {
    console.log("O servidor está funcionado na porta " + PORT);
});