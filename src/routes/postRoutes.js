import express from 'express';
import { createPost, updatePostById, deletePost } from '../controllers/postController.js';
import authenticateToken from '../middlewares/auth.js';

const router = express.Router();

router.post("/",authenticateToken ,createPost);
router.put("/:id", authenticateToken, updatePostById);
router.delete("/:id", authenticateToken, deletePost);

export default router;