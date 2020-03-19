const express = require('express');
const port = 3000;
const app = express();

app.use(express.static('mythique_files'))

app.get('/', function (req,res) {
    res.sendFile(__dirname + "/index.html");
})

app.get('/mythique', function (req,res) {
    res.sendFile(__dirname + "/mythique.html");
})

console.log(__dirname);

app.listen(3000, () => {
    console.log(`Serveur run on ${port}`);
})