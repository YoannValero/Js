const express = require("express");
const app = express();
const port = 3000

const APIs = [
    {
        route: '/', 
        files: '/index.html'
    },
    {
        route: '/contact',
        files:'/contact.html'
    }
    
]
app.use(express.static('mythique_files'))

APIs.forEach(api => { 
        app.get(api.route, function(req, res) { 
            res.sendFile(__dirname + api.files)    
        })   
    })

app.get(/.*/, function(req,res) {
    res.writeHead(404)
    res.end("<h1>La Fameuse erreur 404 des familles :</h1> URL <pre><h2>" + req.url + "</h2></pre> inconnue" )
})


app.listen(3000, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});