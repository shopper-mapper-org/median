import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return(
        <div>
            <h1>404!</h1>
            <p>It seems that you've tried looking for a page that does not exist...</p>
            <div>
                <p>Click <Link to={`/`}><p>here</p></Link> to return to Median...</p>
            </div>
        </div>
    )
}

export default ErrorPage;