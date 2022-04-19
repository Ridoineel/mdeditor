const router = require("express").Router();
const jwt = require("jsonwebtoken")
const fs = require("fs")
const {dirname, join} = require("path")

router.post("/", (req, res) => {

    let {fileContent, file} = req.body;
    let {truename, extension} = file;

    let filename = `${truename}_mdeditor_${Date.now()}.${extension}`;
    let filePath = join(dirname(__dirname), "files", filename);
    let token = jwt.sign({filename}, process.env.TOKEN_SECRET, {expiresIn: "1h"})

    if (fileContent) {
        fs.writeFile(filePath, fileContent, (err, data) => {
            if (!err) {
                // write in new file success,
                // now download this file

                //res.redirect("/file/" + filename);

                res.json({filename, token})
                /*
                res.json({
                    url: filePath
                    // url: process.env.DOMAIN + "/files/" + filename
                })
                */
            }else {
                console.log(err)
                res.status(504)
            }
        })
    }else {
        res.status(404).json({
            error_message: "missing fileContent field"
        })
    }
})

router.get("/:filename", (req, res) => {
    let filename = req.params.filename;
    let token = req.query.token;
    let tokenContent = jwt.verify(token, process.env.TOKEN_SECRET)
    
    
    if (filename && tokenContent.filename === filename) {
        try {
            res.download(join(dirname(__dirname), "files", filename))
        }catch (err) {
            console.log(err)

            res.status(404).json({
                error_message: "filename not found"
            })
        }
    }else {
        res.status(404).json({
            error_message: "filename parameter missing or invalid token"
        })
    }
    
})

module.exports = router