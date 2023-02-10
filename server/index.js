const express=require('express');
const mongoose=require('mongoose');
const bcryptjs=require("bcryptjs")
// const dotenv=require("dotenv")
// dotenv.config({path:'./config.env'})
const app=express()
app.use(express.json())
const port=5000
const DB=`mongodb+srv://sanyam:sanyamMahajan@cluster0.yubvk8v.mongodb.net/bankingsystem?retryWrites=true&w=majority`
mongoose.set('strictQuery', true);
mongoose.connect(DB).then(()=>{
    console.log("connection is successful")
}).catch((err)=>{
    console.log((err))
})


// app.use(require('./router/auth'))

app.listen(port,()=>{
    console.log(`App is running at port:${port}`)
})