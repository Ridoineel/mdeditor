const router = require("express").Router();
const fs = require("fs")
const {dirname, join} = require("path")

router.get("/", (req, res) => {

    let {fileContent, file} = req.body;
    let {truename, extension} = file;
    let filePath = join(dirname(__dirname), "files", `${truename}_${Date.now()}.${extension}`);

    if (fileContent) {
        fs.writeFile(filePath, fileContent, (err, data) => {
            if (!err) {
                // write in new file success,
                // now download this file
                console.log("OK")

                res.download(filePath)
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

module.exports = router