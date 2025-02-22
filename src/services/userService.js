import { findUserByid, deleteUserById } from "../repositories/userRepository.js";
import { findPostsByUserId } from "../repositories/postRepository.js";
import logger from "../utils/logger.js";

export const getUserWithPosts = async(userId) => {
  const user = await findUserByid(userId);
  if (!user) {
    throw new Error("Usuário não encontrado");
  };

  const posts = await findPostsByUserId(userId);
  logger.info(`Encontrado usuário com Posts: ${user.username}`);
  return {user, posts};
};

export const deleteUser = async(userId) => {
  const result = await deleteUserById(userId);
  if (!result) {
    throw new Error("Usuário não encontrado");
  };
  logger.info(`Usuário deletado: ${userId}`);
  return result;
};