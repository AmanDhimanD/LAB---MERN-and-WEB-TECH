var express = require('express')
var app = express()
var path = require('path')

//Create API
// '/' (Root)
// app.get('/',function(req,res){
//     res.send("<h1>Hello From server, I am Alien </h1>")
// })

// Request With HTML Pages

// app.get('/',function(req,res){
//     res.sendFile('register.html',{root:path.join(__dirname,'./assets')});
// })


// post request 
app.post('/',function(req,res){
    res.send("Thankyouuu")
})

app.listen(3005,function(error){
    if(error){
        console.log(error);
    }
    console.log('Start The server at 3005');
})


