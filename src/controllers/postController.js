import { createNewPost, updatePost, deletePostById } from "../services/postService.js";
import logger from "../utils/logger.js";

export const createPost = async(req, res) => {
  try {
    const { content, title } = req.body;
    const userId = req.user.id;
    const post = await createNewPost(title, content, userId);
    res.status(201).json(post);
  } catch (error) {
    logger.error(`Erro ao criar post: ${error.message}`);
    res.status(400).json({error: error.message || "Erro interno do servidor"});
  }
};

export const updatePostById = async(req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedPost = await updatePost(id, title, content);
    res.status(200).json(updatedPost);
  } catch (error) {
    logger.error(`Erro ao atualizar post ${error.message}`);
    res.status(400).json({error: error.message || "Erro interno do servidor"});
  }
};

export const deletePost = async(req, res) => {
  try {
    const { id } = req.params;
    await deletePostById(id);
    res.status(204).send();
  } catch (error) {
    logger.error(`Erro ao excluir o post ${error.message}`);
    res.status(400).json({error: error.message || "Erro interno do servidor"});
  }
};
