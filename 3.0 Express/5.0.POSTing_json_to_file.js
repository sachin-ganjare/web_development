// posting.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/receive', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'data.txt');
    const content = `Username: ${req.body.username}, Password: ${req.body.password}\n`;

    fs.appendFile(filePath, content, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).send("Error saving data.");
        }
        res.send("Data saved successfully!");
    });
});

//for put-> fs.writeFile()
//for delete-> fs.unlink()


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
