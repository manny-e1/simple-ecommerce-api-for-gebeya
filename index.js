const express = require('express')

const app = express()


app.get('/', (_,res) => {
    res.json({message:"heynpm"})
})


const port = process.env.PORT || 5000

app.listen(port, console.log(`server listening on port ${port}`))