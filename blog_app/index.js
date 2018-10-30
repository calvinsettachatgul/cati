var express = require("express")
var app = express()

articles = ['article1', 'article2', 'article3']

app.get('/', function (req, res){
    res.send('Hello World')
})

app.get('/articles', function (req, res){
    res.send(articles)
})

app.get('/articles/:articleId(\\d+)', function (req, res){
    let articleId = req.params["articleId"]
    res.send(articles[articleId])
})

///user/:userId(\d+)

app.listen(8080)

console.log("listening on port 8080")