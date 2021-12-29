//import express
const express = require("express");
//object
const app = express();

//definisikan port
app.listen(3000,function(){
    console.log("Server berjalan di: http://localhost:3000");
});


// pake router
const router = require("./routes/api");
//use = untuk menggunakan middleware
app.use(express.json());
app.use(router);
