import express, { request, response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

/*ROTA QUE ESTA LISTANDO OS USUÁRIOS (GET)*/

app.get('/usuarios', async (req, res) => {

    const user = await prisma.user.findMany()

    res.status(200).json(user)
})

//ROTA QUE ESTA CRIANDO OS USUÁRIOS (POST)


app.post('/usuarios', async (req, res) => {

    const user = await prisma.user.create({

        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        },
    })

    console.log(user)

    res.status(201).json({ message: "Usuário criado com sucesso" })
})

//ROTA QUE ESTA ATUALIZANDO OU ALTERANDO OS USUÁRIOS (UPDADE)
app.put('/usuarios/:id', async (req, res) => {

    req.params.id

    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    console.log(user)

    res.status(201).json({ message: "Usuário atualizado com sucesso" })
})

//ROTA QUE ESTA DELETANDO DADOS DOS USUÁRIOS (DELETE)

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "Usuário deletado com sucesso!" })
})

app.listen(3000)

/* USUÁRIO DO MONGOBD (rodrigo) SENHA: (nalIZp7WjNUjECXY) */