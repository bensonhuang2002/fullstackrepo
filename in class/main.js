const express = require('express');
const fs = require('fs');
const port = 3000;

const app = express();

let totalViews = 0;

app.get('/', (req, res) => {
  // read index.html
  totalViews++;
  let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  html = html.replace('{{views}}', totalViews);
  res.send(html);
  if (totalViews >= 100) {
    totalViews = 0;
  };
});

app.get('/js.js', (req, res) => {
  res.sendFile(__dirname + '/js.js');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});