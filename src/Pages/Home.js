import React from 'react'
import {useNavigate} from "react-router-dom"

export default function Home() {

  const navigate = useNavigate();
  console.log(navigate);
  const callNavitage = (location) => {
    navigate(location);
  }

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
