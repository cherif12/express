const express = require("express");
const app = express();
const date = new Date();
const path = require('path');



app.get("/ourservices", (req, res) => {
    res.sendFile(path.join(__dirname+'/ourservices.html'))

});

app.get("/contactus", (req, res) => {
    res.sendFile(path.join(__dirname+'/contactus.html'))
});

app.get("/closed", (req, res) => {
    res.sendFile(path.join(__dirname+'/closed.html'))
});



{
  if (date.getDay() == 6 || date.getDay() == 7) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname+'/closed.html'))
    });
    
  } else{
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname+'/home.html'));
    });
  } 
  if (date.getHours() > 17 || date.getHours() < 9) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname+'/closed.html'))
    });
  } else{
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname+'/home.html'));
    });
  }
}

app.listen(3000, (e)=>{console.log(e)});
