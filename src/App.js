import { useState, useEffect } from "react";
import MarkdownPane from "./components/MarkdowPane";
import HtmlPane from "./components/HtmlPane";

// import {JSDOM} from "jsdom";
// import createDomPurify from "dompurify"
import {marked} from "marked";

// const dompurify = createDomPurify(new JSDOM().window);

function App() {
  let [markdown, setMarkdown] = useState(null);
  let [html, setHtml] = useState(null);

  useEffect(() => {
    // convert markdown to html
    if (markdown) {
      let htmlContent = marked(markdown) // dompurify.sanitize(marked(markdown))

      setHtml(htmlContent)
    }
    
  }, [markdown])

  return (
    <div className="App min-height-full container">

      <div className="ide-container">
        <MarkdownPane content={markdown} setMarkdown={setMarkdown}/>
        <HtmlPane content={html} />
      </div>
    </div>
  );
}

export default App;
