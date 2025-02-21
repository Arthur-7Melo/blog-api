import { User } from "../models/index.js"
import logger from "../utils/logger.js"

export const createUser = async(userData) => {
  try { 
    const user = await User.create(userData);
    logger.info(`Usuário criado: ${user.username}`);
    return user
  } catch(error) {
    logger.error(`Erro ao criar Usuário: ${error.message}`);
    throw error;
  }
};

export const findUserByUsername = async(username) => {
  try {
    const user = await User.findOne({where: {username}});
    return user
  } catch(error) {
    logger.error(`Erro ao encontrar usuário: ${error.message}`);
    throw error;
  }
};

export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    logger.error(`Erro ao encontrar usuário pelo email: ${error.message}`);
    throw error;
  }
};

export const findUserByid = async(userId) => {
  try {
    const user = await User.findByPk(userId);
    return user
  } catch(error) {
    logger.error(`Erro ao encontrar usuário pelo id: ${error.message}`);
    throw error;
  }
};

export const deleteUserById = async(userId) => {
  try {
    const user = await User.destroy({where: {id: userId}});
    logger.info("Usuário deletado com Sucesso")
    return user
  } catch (error) {
    logger.error(`Erro ao deletar usuário: ${error.message}`);
    throw error;
  }
}
