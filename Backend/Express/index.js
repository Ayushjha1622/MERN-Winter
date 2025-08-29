//  *****************express******************** 

// const express = require("express");

// const app = express()


// app.get('/', function (req, res) {
//     res.send('hello world')
    
// })


// app.get('/profile', function (req, res) {
//     res.send('mei hu')
    
// })



// app.listen(3000)


// ***************MIDDLEWARE******************

const express = require('express');
const app = express();

app.use(function (req,res, next) {
    console.log("pehle mei chalunga");
    next();
    
});
app.use(function (req,res, next) {
    console.log("firse pehle mei chalunga");
    next();
    
});

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.get('/about', (req, res) => {
  res.send('about page');
});


app.get('/profile', (req, res, next) => {
    return next(new Error("something went wrong"))
});

// ********error handling************

app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).send('something broke!')
    
})

app.listen(3000);