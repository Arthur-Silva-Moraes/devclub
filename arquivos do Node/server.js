import express from "express"
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())


app.get('/usuarios', async (req, res) =>{
    
    const users = await prisma.user.findMany()
    
    res.status(200).json(users)
    
})

app.post('/usuarios', async (req, res) =>{

    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email         
        }
    })
    
    console.log(user)
    res.status(201).json({message: "Usuário criado com sucesso"})


})

app.put('/usuarios/:id', async (req, res) =>{
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email         
        }
    })
    console.log(user)
    
    res.status(200).json({message: "Usuário editado com sucesso"})


})

app.delete('/usuarios/:id', async (req, res) =>{

    await prisma.user.delete({
        where:{
            id: req.params.id
        }
    })
    res.status(200).json({message: "Usuário deletado com sucesso"})
})

// ocmIqk7ew1jqyzh4
// arthursilva201312



app.listen(5000)

