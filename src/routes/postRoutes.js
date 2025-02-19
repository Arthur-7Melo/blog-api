import express from 'express';
import { createPost, updatePostById } from '../controllers/postController.js';
import authenticateToken from '../middlewares/auth.js';

const router = express.Router();

router.post("/",authenticateToken ,createPost);
router.put("/:id", authenticateToken, updatePostById);

export default router;