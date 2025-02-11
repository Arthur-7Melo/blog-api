import { registerUser, loginUser } from "../services/authService.js";
import logger from "../utils/logger.js";

export const register = async(req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await registerUser(username, email, password);
    res.status(201).json(user);
  } catch (error) {
    logger.error(`Erro ao registrar usuário: ${error.message}`);
    res.status(400).json({error: error.message});
  }
};

export const login = async(req, res) => {
  try {
    const {username, password} = req.body;
    const token = await loginUser(username, password);
    res.status(200).json(token);
  } catch (error) {
    logger.error(`Erro ao logar usuário: ${error.message}`);
    res.status(400).json({error: error.message});
  }
};