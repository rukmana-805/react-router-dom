import {Link} from "react-router-dom";

const Others = () => {
    return (
        <div>
            <h2 style={{margin:"20px"}}>Here are some Other Details</h2>
            <div className="content" style={{margin:"10px"}}>
                <p>please read the details carefully</p>
            </div>
            <Link to="/">Go to Home page</Link>
        </div>
    )
}

export default Others;