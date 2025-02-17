import { getUserWithPosts, deleteUser } from "../services/userService.js";
import logger from "../utils/logger.js";

export const getUser = async(req, res) => {
  try {
    const { id } = req.params;
    const userWithPosts = await getUserWithPosts(id);

    if (!userWithPosts || !userWithPosts.user) {
      res.status(404).json({error: "Usuário não encontrado"});
    }

    if (userWithPosts.user) {
      userWithPosts.user = userWithPosts.user.toJSON();
      delete userWithPosts.user.password;
    }
    
    res.status(200).json(userWithPosts)
  } catch (err) {
    logger.error(`Erro ao retornar usuário: ${err.message}`);
    res.status(500).json({error: "Erro interno do servidor"});
  }
};

export const deleteUserById = async(req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.status(204).send();
  } catch (error) {
    logger.error(`Erro ao deletar usuário ${error.message}`);
    res.status(400).json({error: error.message});
  }
};
