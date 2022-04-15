import {motion} from "framer-motion";

const DownloadButton = (props) => {
    let {handleClick, content} = props

    return (
        <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 1.05}}
        onClick={handleClick} 
        className="btn download-btn"
        >
            {content}
        </motion.button>
    )
}

export default DownloadButton;

