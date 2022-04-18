const {JSDOM} = require("jsdom");
const DOMPurify = require("dompurify");
const marked = require("marked")

const dompurify = DOMPurify(new JSDOM().window)

module.exports = (req, res) => {
    let {markdown} = req.body;
    let html;

    if (markdown) {
        html = dompurify.sanitize(marked(markdown));

        res.json({
            html: html
        })
    }else {
        res.status(404).json({
            erro_messages: "missing markdown parameter"
        })
    }
}