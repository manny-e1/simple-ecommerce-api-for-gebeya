import dotenv from 'dotenv'
import connectDatabase from './config/db.js'
import express from 'express'

dotenv.config()

connectDatabase()
const app = express()


app.get('/', (_,res) => {
    res.json({message:"heynpm"})
})


const port = process.env.PORT || 5000

app.listen(port, console.log(`server listening on port ${port}`))