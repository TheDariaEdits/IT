import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
const app = express()
const authRoutes = require('../routes/auth')
const mainRoutes = require('../routes/main')

dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('Connected to mongoose'))

// app.get('/', (req,res) => {
//     res.send('Hello World')
// })

app.get('/test', (req,res) => {
    res.json('test ok')
})

app.use('/', mainRoutes)
app.use('/auth', authRoutes)

app.listen(4000, () => {
    console.log('Server started')
})
