import express from 'express';
import { getUser, deleteUserById } from '../controllers/userController.js';
import authenticateToken from '../middlewares/auth.js';

const router = express.Router();

router.get("/:id", authenticateToken, getUser);
router.delete("/:id", authenticateToken, deleteUserById);

export default router;