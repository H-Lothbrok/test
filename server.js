const express = require('express')
const {spawn} = require('child_process')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')

app.set("view engine", 'ejs')
app.set('views', __dirname + '/views')


app.use('/',indexRouter)

app.listen(process.env.PORT || 3000,()=>{console.log("app reading on port 3000")})