var express = require('express')
var app = express()
var path = require('path')
var student = require("./routers/student")
app.get('/student', student)

app.get('/', function (req, res) {
    res.send("Hello from Server")
})

/* 
app.get('/',function(req,res){
    
    res.sendFile('register.html',{root:path.join(__dirname,'./assets')});
    })
    */

app.post('/', function (req, res) {
    res.send("from post api")
})

app.listen(3005, function (error) {
    if (error) {
        console.log(error)
    }
    console.log("Server is at 3005")
})
