const express = require("express")
const app = express()
const port = 3002
const responses = [
    "It is certain",
 "It is decidedly so", 
 "Without a doubt",
  "Yes definitely",
  "You may rely on it",
   "As I see it yes",
    "Most likely",
     "Outlook good",
     "Yes", 
     "Signs point to yes", 
     "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
       "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
         "My reply is no", 
         "My sources say no",
         "Outlook not so good",
          "Very doubtful"]

app.get("/greeting", (req, res) => {
    res.send("Hello, stranger" )
  })
  app.get("/greeting/:name", (req, res) => {
    res.send(`Hi there! ${(req.params.name)}`)
  })
app.get("/tip/:total/:tipPercentage", (req,res)=> {
    res.send(`${parseInt(req.params.total) * parseInt(req.params.tipPercentage)/100}`)
})
app.get("/magic/:question", (req,res) => {
    res.send(`<h1>${req.params.question} = ${responses[Math.floor(Math.random() *responses.length)]}</h1>`)
})







app.listen(3002)

