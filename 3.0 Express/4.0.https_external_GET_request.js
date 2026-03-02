// getting json (api) file from web
const express = require("express");
const app = express();
const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});


app.listen(3000, function () {
    console.log("Server is listening on: http://localhost:3000")
})