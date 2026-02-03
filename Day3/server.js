const express = require("express")

const app = express()

const {json} = require(express)

app.use(express.json())
const notes = []

app.post("/notes",(req,res)=>{
  console.log(req.body)
  notes.push(req.body)
  res.send("Note is created")
})
app.get("/notes",(req,res)=>{
  res.send(notes)
})

app.listen(3000,()=> {
  console.log("Port is running on 3000");
})
