const express =require("express");
const app = express();
var mongoose = require("mongoose");
var bodyParser= require("body-parser");
var authRoute = require("./routes/authentication");
var notesRoute = require('./routes/notesRoute')
const path =require('path')
// var cors= require("cors");
//const authRoute = require("./routes/auth");
var dotenv=require("dotenv");       ///save to environment variable
dotenv.config();                    ////config env var
// app.options('*',cors());            ///preflight request
app.set("veiw engine","ejs");
// app.use(cors());                   ///using cors
app.use(express.static(path.join(__dirname, 'build')))

 mongoose.connect("mongodb://localhost/notebook",{useNewUrlParser:true});
     console.log("db connected")

 app.use(express.json());
 app.use(bodyParser.urlencoded({extended:true}));
 //
app.use("/auth",authRoute);
app.use('/notes',notesRoute);
//app.use("/api/posts",post);
app.get('*',(req,res)=>{
    console.log('serving static files')
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(5000,()=>{
    console.log("running at 5000:")
})