import express from 'express'
import usuarioController from '../controllers/usuarioController.js'
import authMiddleware from '../middleware/middle.js';
import protecaoController from '../controllers/protecaoController.js'


const router = express.Router();

router.get("/protected", authMiddleware, protecaoController.protecao);

router.post("/register", usuarioController.salvaConta);

router.post("/login", usuarioController.liberaLogin);

export default router