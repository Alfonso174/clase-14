const express = require('express')
const app = express()
const port = 9000

app.get('/', function (req,res) {res.send('hola mundo')
})
app.post('/', function (req,res) {res.send('metodo post')
})
app.put('/', function (req,res) {res.send('metodo put')
})
app.delete('/', function (req,res) {res.send('metodo delete')
})

app.listen(port,function() {
    console.log(`Example app listening on port ${port}!`)
})