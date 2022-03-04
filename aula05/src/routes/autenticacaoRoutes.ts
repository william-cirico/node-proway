import express from "express";
import { AutenticacaoController } from "../controllers/AutenticacaoController";

const router = express.Router();

router.post("/login", AutenticacaoController.login);

export default router;
