import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

let Login = () => {

    const[name,setName] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    function checkLogin(){
        if(name === "Akash" && password === "Akash@123"){
            localStorage.setItem("name",true);
            localStorage.setItem("password",true);
            navigate("/secret");
        }
        else{
            alert("Invalid Username or Password")
        }
    }

    useEffect(()=>{
        let islogin = localStorage.getItem("name");
        if(islogin){
            navigate("/login");
        }
        else{
            navigate("/secret");
        }
    })

    return(
        <div>
            <h2 style={{margin:"20px"}}>Login Here</h2>
            <input onChange={(e)=>{setName(e.target.value)}} style={{margin:"5px",padding:"10px"}} type="text" placeholder="Enter Username" /> <br/>
            <input onChange={(e)=>{setPassword(e.target.value)}} style={{margin:"5px",padding:"10px"}} type="password" placeholder="Enter Password" /> <br/>
            <input onClick={checkLogin} style={{margin:"5px",padding:"10px",width:"195px",border:"1px solid",backgroundColor:"#a7f3a7"}} type="submit" />

        </div>
    )   
}

export default Login;