import express from 'express'
import { create, router as jsonRouter } from 'json-server'
import path from 'path'
import router from './routers/member_routes.js'

// Inicialización
const app = express()
const jsonServer = create()
const dbRouter = jsonRouter(path.join(__dirname, '../db.json'))

// Varaibles
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json())

// JSON Server Routes
app.use('/api',dbRouter)

// Rutas
app.get('/',(req,res)=>{
    res.send(`
        <h1>Landing page - Grupo #4</h1>
    `)
})

// Rutas para los integrantes
app.use('/integrantes',router)


export default app