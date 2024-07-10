import React from 'react'
import {useNavigate, useLocation} from "react-router-dom"

export default function Home() {

  const navigate = useNavigate();
  console.log(navigate);
  const callNavitage = (location) => {
    navigate(location);
  }

  const location = useLocation();
  console.log(location); 

  // This gives a object which contains key, hash, pathname, search, state
  // key : it is a unique and every time it is new, if you refresh it it gives defatult as value 
  // hash : you can pass it throung url of browser like :- localhost:3000/#100 (using # sysmbol)
  // search : you can pass it throung url of browser like :- localhost:3000/?age = 10 (using ? sysmbol)
  // pathname : this is generally use when we use params for Routing : o/p:-> localhost:3000/contact/anil 
  // state : In searchParams we pass some valaue in url but using state we can pass a object trhroung it.
  //          this is used when a user click a link then a object pass through url

  return (
    <div>
      <h2 style={{margin:"20px"}}>Hay I'm HOME</h2>
      <div className="content" style={{margin:"10px"}}>
        <p>Hay welcome to the Home page </p>
        <p>Here we learning about React Router Dom</p>
        <button onClick={()=>{callNavitage("/about")}} style={{margin:"5px",padding:"10px",backgroundColor:"#a7f3a7"}}>Go to About</button>
        <button onClick={()=>{callNavitage("/filters")}} style={{margin:"5px",padding:"10px",backgroundColor:"#a7f3a7"}}>Go to Filter</button>
      </div>
    </div>
  )
}
