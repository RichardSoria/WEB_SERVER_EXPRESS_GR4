import express from 'express'
import router from './routers/member_routes.js'

// Inicialización
const app = express()

// Varaibles
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json())

// Rutas
app.get('/',(req,res)=>{
    res.send(`
        <h1>Landing page - Grupo #4</h1>
    `)
})

// Rutas para los integrantes
app.use('/integrantes',router)


export default app