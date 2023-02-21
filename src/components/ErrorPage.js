import { Link } from 'react-router-dom';
import { motion as m } from "framer-motion"


const ErrorPage = () => {
    return(
        <m.div 
            className="error-page-view container"
            transition={{ duration: 1.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>404!</h1>
            <p>It seems that you've tried looking for a page that does not exist...</p>
            <div className="return-link">
                <p>Click <Link to={`/`}>here</Link> to return to Median...</p>
            </div>
        </m.div>
    )
}

export default ErrorPage;