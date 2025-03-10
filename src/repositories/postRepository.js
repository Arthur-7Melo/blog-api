import { Post } from '../models/index.js'
import logger from '../utils/logger.js'

export const createPost = async(postData) => {
  try {
    const post = await Post.create(postData);
    logger.info(`Post ${post.title} criado com sucesso`);
    return post;
  } catch (error) {
    logger.error(`Erro ao criar post: ${error.message}`)
    throw error;
  }
};

export const findPostsByUserId = async(userId) => {
  try {
    const posts = await Post.findAll({where: {userId}});
    return posts;
  } catch (error) {
    logger.error(`Erro ao retornar posts do usuário: ${error.message}`);
    throw error;
  }
};

export const updatePostById = async(postData, id) => {
  try {
    const [updatedRows] = await Post.update(postData, {where: {id}});
    if (updatedRows === 0) {
      throw new Error(`Post com id: ${id} não encontrado`)
    }

    logger.info(`Post atualizado: ${id}`);
    const updatedPost = await Post.findByPk(id);
    return updatedPost;
  } catch (error) {
    logger.error(`Erro ao atualizar post: ${error.message}`);
    throw error;
  }
};

export const deletePost = async(id) => {
  try {
    const post = await Post.destroy({where: {id}});
    logger.info(`Post ${post.tittle} excluído com Sucesso`);
    return post;
  } catch (error) {
    logger.error(`Erro ao excluir o Post: ${error.message}`);
    throw error;
  }
};