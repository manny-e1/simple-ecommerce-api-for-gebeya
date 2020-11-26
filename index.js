import dotenv from 'dotenv'
import connectDatabase from './config/db.js'
import express from 'express'

import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDatabase()
const app = express()


app.use(express.json())
app.use('/user', userRoutes)



const port = process.env.PORT || 5000

app.listen(port, console.log(`server listening on port ${port}`))