const express = require("express")
const cors = require("cors")
const fileRouter = require("./routes/fileRouter")
const md2htmlCtrl = require("./controlers/md2html")

require("dotenv").config()

app = express()

app.use(express.json())
app.use(cors())

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, UPDATE, DELETE, ");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    next();
})

app.use("/files", fileRouter)
app.post("/md2html", md2htmlCtrl)

app.listen(port=process.env.PORT || 8080, () => {
    console.log(`server listen on localhost:${port}`)
})