import { createNewPost } from "../services/postService.js";
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