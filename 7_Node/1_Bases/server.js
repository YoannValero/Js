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
    },
    {
        route: '/mythique',
        files:'/mythique.html'
    },
]
app.use(express.static('mythique_files'))

APIs.forEach(api => { 
        app.get(api.route, function(req, res) { 
            res.sendFile(__dirname + api.files)    
        })   
    })

app.get(/.*/, function(req,res) {
    res.writeHead(404)
    res.end("erreur 404: URL " + req.url + " inconnue" )
})



app.listen(3000, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});