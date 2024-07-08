import {Link} from "react-router-dom";

const Company = () => {
    return (
        <div>
            <h2 style={{margin:"20px"}}>This is the Company Details</h2>
            <div className="content" style={{margin:"10px"}}>
                <p>Our Company is best in the World in Helth Sector</p>
                <p>We have all facilities that you are looking for</p>
            </div>
            <Link to="/">Go to Home page</Link>
        </div>
    )
}

export default Company;