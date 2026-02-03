// Server ko config karna
//  Create kya hai app.js mai and run karna hai server.js
const express = require("express")

const app = express()

app.use(express.json()) //aagr me eh nah liku then express isko padh he nhi sakta hain

const notes = []

app.get("/",(req,res)=>{
  console.log("hellow");
})
// API ki method hai post

//  And api ka name hai /notes

app.post("/notes",(req,res)=> {
  console.log(req.body);
  console.log(notes);
  notes.push(req.body)
  res.send("note created")
})
// idr server se clint ke pass data jayega jo alredy store kar ke rakha hai
app.get("/notes",(req,res)=> {
  res.send(notes)
})

// app.delete("/notes")
app.delete("/notes/:index",(req,res) => {
  delete notes [req.params.index]

  res.send("note deleted succesfully")
})
// Patch =  Co9lum laga na compulsary hian while updating it 
app.patch("/notes/:index",(req,res) => {
  const index = req.params.index
  notes[index] = req.body
  res.send("Note updated sucessfully")
})

module.exports = app