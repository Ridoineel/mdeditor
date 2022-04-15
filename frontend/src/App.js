import { useState, useEffect } from "react";
import MarkdownPane from "./components/MarkdowPane";
import HtmlPane from "./components/HtmlPane";

// import {JSDOM} from "jsdom";
// import createDomPurify from "dompurify"
import {marked} from "marked";

// const dompurify = createDomPurify(new JSDOM().window);

function App() {
  let [markdown, setMarkdown] = useState("");
  let [html, setHtml] = useState("");

  useEffect(() => {
    let markD = localStorage.getItem("contentMarkdown");

    setMarkdown(markD || "")
  }, [])

  useEffect(() => {
    // convert markdown to html
    let htmlContent

    if (markdown) {
      htmlContent = marked(markdown) // dompurify.sanitize(marked(markdown))
    }else { 
      htmlContent = "Html output..."
    }

    // save markdown in local storage
    localStorage.setItem("contentMarkdown", markdown);
    
    // update html text
    setHtml(htmlContent)
  }, [markdown])

  return (
    <div className="App min-height-full">

      <div className="ide-container">
        <MarkdownPane content={markdown} setMarkdown={setMarkdown}/>
        <HtmlPane content={html} />
      </div>
    </div>
  );
}

export default App;
