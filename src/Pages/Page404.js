import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <h2 style={{margin:"20px"}}>Page not found 404</h2>
            <div className="content" style={{margin:"10px"}}>
                <p>This page has triggered because</p>
                <p>The link you are clicked recently doesn't have a proper path or wrong path to nevigate</p>
            </div>
            <Link to="/">Go to Home page</Link>
        </div>
    )
}

export default Page404;