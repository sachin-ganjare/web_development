var pug = require("pug"); // aka Jade
var express = require("express");
var app = express();

// npm install pug --save

app.set('view-engine', pug); // Jade as template engine

// folder "views" > "index.pug"

app.get('/', (req, res) => {
    res.render('index.pug');
})

// we can modify variables even from here
/*
app.get('/', (req, res) => {
        res.render('index',{
            title: 'hello world!',     // -- then use this variable in pug file as h1 #{title}
            showTitle: false;
        }; someList:[data1,data2]);
    })


*/
app.listen(5000, function(){
    console.log("visit http://localhost:5000/.")
});