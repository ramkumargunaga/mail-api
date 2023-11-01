const express = require('express')
require('dotenv').config();
const cors = require('cors');
const mailRoute = require('./routes/mail.routes');

let PORT = process.env.PORT
let app = express()
app.use(cors())

app.use(express.json())

// mail route
app.use("/api/mail",mailRoute)


//page not found middleware
app.use("*",(req, res, next)=>{
    res.status(404).json({error:true,message:"page not found"})
})


// error handling middleware
app.use((err, req,res,next )=>{
    res.status(400).json({error:true,message:err.message})
})

//server creation
app.listen(PORT, ()=>{
    console.log(`server runs in port ${PORT}`)
})