const express = require('express');
const fs = require('fs');
const port = 3000;

const app = express();

let totalViews = 0;


app.get('/', (req, res) => {
    totalViews++;
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    html = html.replace('{{views}}', totalViews);
    res.send(html);
});

app.get('/me.css', (req, res) => {
    res.sendFile(__dirname + '/me.css');
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js');
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/sm.html', (req, res) => {
    res.sendFile(__dirname + '/sm.html');
});
app.get('/si.html', (req, res) => {
    res.sendFile(__dirname + '/si.html');
});
app.get('/vg.html', (req, res) => {
    res.sendFile(__dirname + '/vg.html');
});
app.get('/lnw.html', (req, res) => {
    res.sendFile(__dirname + '/lnw.html');
});

app.get('/download.jpg', (req, res) => {
    res.sendFile(__dirname + '/download.jpg');
});

app.get('/giphy.gif', (req, res) => {
    res.sendFile(__dirname + '/giphy.gif');
});

app.get('/isso.jpg', (req, res) => {
    res.sendFile(__dirname + '/isso.jpg');
});

app.get('/sleep.jpg', (req, res) => {
    res.sendFile(__dirname + '/sleep.jpg');
});

app.get('/stubouk-subway-surfers.gif', (req, res) => {
    res.sendFile(__dirname + '/stubouk-subway-surfers.gif');
});

app.get('/team.jpg', (req, res) => {
    res.sendFile(__dirname + '/team.jpg');
});

app.get('/tt.png', (req, res) => {
    res.sendFile(__dirname + '/tt.png');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });