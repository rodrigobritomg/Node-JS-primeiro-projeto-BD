import express, { request, response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express ()
app.use(express.json())

/*ROTA QUE ESTA LISTANDO OS USUÁRIOS (GET)*/

app.get('/usuarios', async (req, res) =>{

    const user = await prisma.user.findMany()
   
    res.status(200).json(user)
})

//ROTA QUE ESTA CRIANDO OS USUÁRIOS (POST)

app.post('/usuarios', async (req, res) => {
           
    const user = await prisma.user.create({
        
        data:{
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
   })

   console.log(user)

    res.status(201).json({ message: "Usuário criado com sucesso"})
})

app.listen(3000)

/* USUÁRIO DO MONGOBD (rodrigo) SENHA: (nalIZp7WjNUjECXY) */