require('dotenv').config()
const marchandiseRouter = require('./routes/marchandise-route')
const express = require('express') 

const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect(
   process.env.MONGO_URL,
   )
   
app.get('/', (req, res) => res.send('Hello, Express!'))
app
   .use("/api/v1", marchandiseRouter)
   .use(express.json())



app.listen(port, () => console.log(`Start listening on: http://localhost:${port}`))

module.exports = app;
