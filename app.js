const express = require('express');
const app = express();
const port = 3030;

app.use(express.static('public'));

app.get('/',(req.res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))



app.listen(port, () => console.log('server renning in http://localhost:' + port))



app.get('/',(req.res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))

app.get('/babbage',(req.res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))

app.get('/barners-lee',(req.res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))

app.get('/clark',(req.res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))

app.get('/hamilton',(req.res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))

app.get('/hopper',(req.res) => res.sendFile(path.join(__dirname, 'views', 'index.htmll')))


app.get('/lovelace',(req.res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))

app.get('/turing',(req.res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))




