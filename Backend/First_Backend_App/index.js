// including express module and initialising an app 
const express = require('express')
const app = express()


// variable that stores te port number
const port = 3000


app.get('/', (req, res) => {
    res.send('get request receive hui h')
})
// start your app or server
app.listen(port, () => {
    console.log("Application start ho chuki h");
    
})