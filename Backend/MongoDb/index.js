const express = require('express')
const app = express()
const connectDB = require('./db')
const users = require('./routes/users')

const port = 3000

//body parser
app.use(express.json())
//connect to database
connectDB()

app.use('./api',users)

app.get('/', (req, res) => {
    console.log('I m inside homepage route handler');
    res.send('Hello from homepage')
    res.send("hello everyone")
    
})


app.listen(port, ()=>{
    console.log("server is up");
    
})