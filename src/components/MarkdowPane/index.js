import { useRef } from "react";
import axios from "axios";
import {BACKEND_DOMAIN} from "../../env"


const MarkdownPane = (props) => {
    let textarea = useRef(null)
    let contentMarkdown = props.content
    let [markdown, setMarkdown] = props.markdownState

    function handleChange(event) {
        let markD = event.target.value;
        
        setMarkdown(markD);
    }

    async function handleClick(e) {
        let body = {
            fileContent: markdown,
            file: {
                truename: "README",
                extension: "md"
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

    return (
        <div className="markdown-pane pane-container">
            
            {/* Use dangerously set html */}
            <textarea ref={textarea} className="pane-text" onChange={handleChange}>
                {contentMarkdown}
            </textarea>

            <button onClick={handleClick}>
                Download markdown
            </button>
        </div>
    )
}

export default MarkdownPane;