import { useParams } from "react-router-dom";

const Users = () => {
    const params = useParams();// after users/: the name that clicked by the link in About page that name display.
    console.log(params);// gives objects of name 
    return(
        <div>
            <h2 style={{margin:"20px"}}>Hay This is Users Page</h2>
            <h3>Here is the details of {params.name}</h3>
        </div>
    )
}

export default Users;