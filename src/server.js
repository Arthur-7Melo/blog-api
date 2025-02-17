import express from 'express'
import cors from 'cors'
import logger from './utils/logger.js'
import sequelize from './config/db.js'
import dotenv from 'dotenv'
import authRoutes from '../src/routes/authRoutes.js'
import userRoutes from '../src/routes/userRoutes.js'

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

const port = process.env.PORT || 3000;

sequelize.sync().then(()=> {
  app.listen(port, ()=> {
    logger.info(`Server running on port: ${port}`)
  });
}).catch(error =>{
  logger.error("Erro ao sincronizar o banco de dados: ", error)
});