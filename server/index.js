require('dotenv').config();
const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require('mysql2');
const db = require('./db.js')
const router = require('./routes.js')


//middlewares
app.use(cors())
app.use(express.json())

app.get('/',async(req,res)=> {
    res.json({success: "true", message: "Api is working"})
})

app.use('/api',router)

const port = process.env.PORT || 3306
app.listen(port,()=> {
    console.log("server is starting on port ",port)
})