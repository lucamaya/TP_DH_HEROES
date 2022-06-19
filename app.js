const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

//console.log(__dirname);

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')))



app.listen(port, () => console.log('server renning in http://localhost:' + port))



app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))

app.get('/babbage',(req,res) => res.sendFile(path.join(__dirname, 'views', 'babbage.html')))
app.get('/barners-lee',(req,res) => res.sendFile(path.join(__dirname, 'views', 'berners.html')))
app.get('/clark',(req,res) => res.sendFile(path.join(__dirname, 'views', 'clark.html')))
app.get('/hamilton',(req,res) => res.sendFile(path.join(__dirname, 'views', 'hamilton.html')))
app.get('/hopper',(req,res) => res.sendFile(path.join(__dirname, 'views', 'hopper.htmll')))
app.get('/lovelace',(req,res) => res.sendFile(path.join(__dirname, 'views', 'lovelace.html')))
app.get('/turing',(req,res) => res.sendFile(path.join(__dirname, 'views', 'turing.html')))




