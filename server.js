const cookieParser = require("cookie-parser");
const express = require("express");

var app = express()
var COOKiE_PARSER = require("cookie-parser")
var cors = require("cors")
var body_parser = require("body-parser")
var pg = require("pg-promise")
var db = pg("postgres://postgress:bruno2310@host:5432/loginsignup")
var router = require('./router/router');
var port = 3000




app.use(body_parser.json())
app.use(cors())
app.use(
    body_parser.urlencoded({
        extended: false
    })
)
app.use('/router',router)


app.listen(port,function(){console.log("Server is running at port:"+port)})
