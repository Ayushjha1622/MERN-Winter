

const express = require('express')
const app = express()
const port = 3000

// loading middleware into the app
// inbuilt middleware  
app.use(express.json())


// middleware -logging, auth, validation

// creation of Middleware
const loggingMiddleware = function(req,res,next){
    console.log('logging kar rha hu');
    next()
}

// loading middleware into application
app.use(loggingMiddleWare)


const authMiddleWare = function(req, res, next){
    console.log("auth kar rha hu");
    next()
}

app.use(authMiddleWare)

const validationMiddleWare = function(req, res, next){
    console.log("validation krra rha hu");
    next()
}

app.use(validationMiddleWare)



const route = require('./Route/route')
// mounting the routes

app.use('/api',route)

app.get('/', (req, res) => {
   console.log("main route handler hu");
   
    console.log(req.body); 
    res.send('Hello World!')
})


app.listen(port, () =>{
    console.log(`example app listening on port ${port}`);
    
})