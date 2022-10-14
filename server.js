const express = require("express")
const app = express()
const port = 3002

app.get("/greeting", (req, res) => {
    res.send("Hello, stranger" )
  })
  app.get("/greeting/:name", (req, res) => {
    res.send(`Hi there! ${(req.params.name)}`)
  })
app.get("/tip/:total/:tipPercentage", (req,res)=> {
    res.send(`${parseInt(req.params.total) * parseInt(req.params.tipPercentage)/100}`)
})
app.listen(3002)