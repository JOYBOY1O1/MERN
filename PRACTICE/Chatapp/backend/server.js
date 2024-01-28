const express = require("express");

const app = express();

app.get('/',(req,res)=> {
    res.send("APi is running")
});

app.listen(5000, console.log("Server Port on 5000"));
