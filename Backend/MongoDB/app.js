const express = require('express');
const app = express();


const userModel = require('./user_model')


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});


// -----------------CREATE-------------------------------
app.get('/create', async (req, res) => {
  let createdUser = await userModel.create({
    name: "harshita",
    email: "harsh@gmail.com",
    username: "harsh"
  })

  res.send(createdUser)
  
});


// ---------------------UPDATE---------------------------
app.get('/update', async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate({username: 'harsh'},{name: "Ayush jha"},{new: true})


  res.send(updatedUser)
  
});


// ----------------------READ----------------------------

app.get('/read', async (req, res) => {
  let users = await userModel.findOne({username: "harsh"})
  res.send(users)
  
});


// ----------------------Delete--------------------------

app.get('/delete', async (req, res) => {
  let users = await userModel.findOneAndDelete({username: "harsh"})
  res.send(users)
  
});


app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});