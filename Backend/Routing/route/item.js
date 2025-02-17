const express = require('express')
const router = express.Router()



router.get('/',(req, res) =>{
    res.send('got a GET request')
    // res.sendFile('./dummy.html',{root:__dirname})
})

// get post
router.post('/items',(req, res) => {
    // res.send("Got a POST request")
    res.json({x:1, y:2, z:3})
})
// get Put 
router.put('/items/:id', (req, res) => {
    res.send("got a PUT request")
})

// get delete
router.delete('/items/:id', (req, res) => {
    res.send("got a DELETE request")
})


module.exports = router