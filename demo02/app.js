const express = require("express")
const cors = require("cors")
const logging = require("morgan")
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(logging('combined'))

app.get("/api/gretting/", (req,res) => {
    let name = req.query.name || "human"
    return res.json({ok: true, gretting: `Hello ${name}`})
})

app.listen(3000, (err) => {
    if(err) console.log("Server error");

    console.log("Server listing on port 3000");
})