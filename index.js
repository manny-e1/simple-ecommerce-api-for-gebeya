import dotenv from 'dotenv'
import connectDatabase from './config/db.js'
import express from 'express'
import cors from 'cors'
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "./swagger.js" ;

import { notFound, errorHandler } from './middlewares/error.js'

import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import baseRoute from './routes/baseRoute.js'

dotenv.config()

connectDatabase()

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/carts', cartRoutes)
app.use('/', baseRoute)


app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT || 5000

app.listen(port, console.log(`server listening on port ${port}`))