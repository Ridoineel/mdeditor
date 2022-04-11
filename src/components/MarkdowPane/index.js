

const MarkdownPane = (props) => {
    let contentMarkdown = props.content
    let setMarkdown = props.setMarkdown

    function handleChange(event) {
        let markD = event.target.value;
        
        setMarkdown(markD);
    }

    return (
        <div className="markdown-pane pane-container">
            <textarea className="pane-text" onChange={handleChange}>
                {contentMarkdown}
            </textarea>
        </div>
    )
}

export default MarkdownPane;