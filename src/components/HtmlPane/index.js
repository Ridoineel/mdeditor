
const HtmlPane = (props) => {
    let contentHtml = props.content;

    return (
        <div className="html-pane pane-container">
            <div className="pane-text" dangerouslySetInnerHTML={{__html: contentHtml}}>
                
            </div>
        </div>
    )
}

export default HtmlPane