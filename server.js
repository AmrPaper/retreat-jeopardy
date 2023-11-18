const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const app = express();
const port = 3000;

app.use('/Data', express.static(path.join(__dirname, 'Data')));
app.use('/JS', express.static(path.join(__dirname, 'JS')));
app.use('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});