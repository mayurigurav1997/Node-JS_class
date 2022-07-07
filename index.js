const express = require('express')  //importing 
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)