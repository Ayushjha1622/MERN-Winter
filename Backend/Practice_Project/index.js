const express = require('express');
const app = express();
const path= require('path') 
const fs= require('fs');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  fs.readdir(`./Files`, function (err, Files) {
    // console.log(Files);
    res.render('index',{Files: Files});
    
  })
});


app.post('/create', function(req, res){
  // console.log(req.body);
  fs.writeFile(`./Files/${req.body.title.split('').join('')}.txt`,req.body.details, function(err){
    res.redirect("/")

  })
  
})


app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
















// ********************DYNAMIC ROUTING****************

// app.get('/profile/:username', (req, res) => {
//   res.send(`welcome, ${req.params.username}`);
// });

// app.get('/profile/:username/:age', (req, res) => {
//   res.send(`welcome, ${req.params.username}`);
// });




