const express = require('express')
const connectDB = require('./config/db')
const app = express()
const dotenv = require('dotenv')
const productRoutes = require('./Routes/productRoutes')
const port = process.env.port



// load env
dotenv.config()
//connect to db
connectDB()



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', productRoutes)

app.listen(port, () => {
  console.log(`Product app listening on port ${port}`)
})