const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log("You are in the middleware")
    next();
})
app.use((req,res,next)=>{
    console.log("You are in another middlreware")
    res.send('<h1>Hello My name is BokaChoda</h1>')
})

app.listen(3000);