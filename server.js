import express, { request, response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express ()
app.use(express.json())

const users = []

//ROTA QUE ESTA LISTANDO OS USUÁRIOS (GET)

app.get('/usuarios', (req, res) =>{
   
    res.status(200).json(users)
})

//ROTA QUE ESTA CRIANDO OS USUÁRIOS (POST)

app.post('/usuarios', async (req, res) => {
       
    await prisma.user.create({
        
        data:{
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
   })

    res.status(201).json({ message: "Usuário criado com sucesso"})
})

app.listen(3000)

/* USUÁRIO DO MONGOBD (rodrigo) SENHA: (nalIZp7WjNUjECXY) */