import { createPost, updatePostById, deletePost } from "../repositories/postRepository.js";
import logger from "../utils/logger.js";

export const createNewPost = async(title, content, userId) => {
  if (!title || title.length < 3) {
    throw new Error("Título deve conter pelo menos 3 caracteres");
  }

  if (!content || content.length < 3) {
    throw new Error("Conteúdo deve conter pelo menos 3 caracteres");
  }

  if (!userId) {
    throw new Error("Não autorizado:token de acesso inválido ou faltando userId")
  }

  const post = await createPost({title, content, userId});
  logger.info(`Post criado pelo usuário: ${userId}`);
  return post;
};

