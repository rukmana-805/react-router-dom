import {Link} from "react-router-dom";

const Youtube = () => {
    return (
        <div>
            <h2 style={{margin:"20px"}}>This is the Youtube Channel Details</h2>
            <div className="content" style={{margin:"10px"}}>
                <p>This Youtube channel made content related to Political</p>
                <p>issue that happening all over the world.</p>
            </div>
            <Link to="/">Go to Home page</Link>
        </div>
    )
}

export default Youtube;