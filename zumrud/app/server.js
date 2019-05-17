const sqlite3 = require('sqlite3').verbose()
const express = require('express')
const fs = require("fs");
const app = express()

const createDB = `
CREATE TABLE IF NOT EXISTS chirp (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp int,
  user varchar(30),
  text varchar(255)
);  
`

class Chirp {
  constructor(user, text) {
    this.user = user
    this.text = text
    this.timestamp = Date.now()
  }

  save() {
    db.run(
      "INSERT into chirp (timestamp, user, text) values (?, ?, ?)",
      [this.timestamp, this.user, this.text]
    )
  }

  static deleteAll() {
    db.run("DELETE FROM chirp")
  }
}

let db = new sqlite3.Database(__dirname + '/db.sqlite3', (err) => {
  if (err) {
    return console.error(err.message);
  }
  db.run(createDB)
})

db.serialize(() => {
  db.all("SELECT * FROM chirp", [], (err, rows) => {
    console.log(rows)
  })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/all', (req, res) => {
  //res.sendFile(__dirname + "/web/index.html")
  db.serialize(() => {
    db.all("SELECT * FROM chirp", [], (err, rows) => {
      res.status(200).send(JSON.stringify(rows))
    })
  })
})

app.get('/send', (req, res) => {
  let user = req.query.user || "Anonymous"
  let text = req.query.text || ""
  let chirp = new Chirp(user, text)
  chirp.save()
  res.status(200).send()
})

app.get('/clear', (req, res) => {
  Chirp.deleteAll()
  res.status(200).send()
})

app.listen(3000, () => {
  console.log('Started server on port 3000')
})