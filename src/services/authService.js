import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import validator from 'validator'
import { findUserByUsername, findUserByEmail, createUser } from '../repositories/userRepository.js'
import logger from '../utils/logger.js'

export const registerUser = async(username, email, password) =>{
  if (password.length < 6) {
    throw new Error("A senha deve conter pelo menos 6 dígitos");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Email inválido");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser({username, email, password: hashedPassword});
  return {id: user.id, username: user.username, email: user.email};
};

export const loginUser = async(username, password) => {
  const user = await findUserByUsername(username);
  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error("Senha incorreta");
  }

  const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
  logger.info(`Usuário: ${username} logado`)
  return token;
}