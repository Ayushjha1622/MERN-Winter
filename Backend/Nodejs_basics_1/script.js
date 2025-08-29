// const fs =require('fs');

// fs.writeFile("hey.txt", "likh diya khuch", function(err) {
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.appendFile("hey.txt", " mai to accha hu",function (err) {
//     if(err) console.error(err);
//     else console.log("done");
    
// })


// fs.rename("hey.txt", "hello.txt",function (err) {
//     if(err) console.error(err);
//     else console.log("done");
    
// })



// fs.copyFile("hello.txt", "./Copy/new.txt",function (err) {
//     if(err) console.error(err);
//     else console.log("done");
    
// })



// fs.unlink("hello.txt", function(err) {
//     if(err) console.error(err);
//     else console.log("removed");
// })


// fs.rm("./New",{recursive: true}, function (err) {
//      if(err) console.error(err);
//     else console.log("removed");
// })



const http = require('http');

const server = http.createServer(function (req, res) {

    res.end("hello world");
})

server.listen(3000);