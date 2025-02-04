import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=> {
  res.send("Api rodando!")
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
  console.log(`Server running on port: ${port}`)
})