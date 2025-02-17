const express = require('express')
const app = express()
const port = 3000

// import item router file
const item = require('./route/item')
const birds = require('./birds')

// load into application
app.use('./api',item)
app.use('/filler',birds)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})