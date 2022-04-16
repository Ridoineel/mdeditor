import axios from "axios";
import DownloadButton from "../DownloadButton"
import {BACKEND_DOMAIN} from "../../env"

function createHtmlFileContent(body) {
    body = body.replaceAll("\n", "\n\t\t")

    return `<!DOCTYPE html>
<html>
\t<head>
\t\t<meta charset="utf-8" />
\t\t<title>Html from markdown | mdeditor </title>
\t</head>
\t<body>
\t\t${body}
\t</body>
</html>
`
}

const HtmlPane = (props) => {
    let contentHtml = props.content;

    async function handleClick(e) {
        if (contentHtml) {
            let body = {
                fileContent: createHtmlFileContent(contentHtml),
                file: {
                    truename: "index",
                    extension: "html"
                }
            }
            let res;
            
            try {
                res = await axios.post(BACKEND_DOMAIN + "/files", body);
    
                if (res.status === 200) {
                    let {filename, token} = res.data;
                    window.location = `${BACKEND_DOMAIN}/files/${filename}?token=${token}`;
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className="html-pane pane-container">
            <div className="pane-text markdown-body" dangerouslySetInnerHTML={{__html: contentHtml}}>
                
            </div>

            <DownloadButton onClick={handleClick} />
        </div>
    )
}

export default HtmlPane