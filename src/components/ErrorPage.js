import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return(
        <div className="error-page-view">
            <h1>404!</h1>
            <p>It seems that you've tried looking for a page that does not exist...</p>
            <div className="return-link">
                <p>Click <Link to={`/`}>here</Link> to return to Median...</p>
            </div>
        </div>
    )
}

export default ErrorPage;