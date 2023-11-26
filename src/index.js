const express = require('express');
const session = require('express-session');
const favicon = require('express-favicon');
const path = require('path');

//creating app instance and directory thingy for the static files
const app = express();
const port = 3000;
const backtrack = path.join(__dirname, '..');

app.use(express.json());

//serving static files
app.use('/Data', express.static(path.join(backtrack, 'Data')));
app.use('/JS', express.static(path.join(backtrack, 'JS')));
app.use('/CSS', express.static(path.join(backtrack, 'CSS')));
app.use(favicon(path.join(backtrack, 'public', 'favicon.ico')));
app.use(express.static(path.join(backtrack, 'public')));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.post("/bruh", (req, res) => {
    console.log(req.body);
    res.send(201);
});