import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Filters() {

  const [searchParams,setSearchParams] = useSearchParams();//because it is a hook 
  console.log(searchParams); // http://localhost:3000/filters?age=10&city=sambalpur from this url link it gives us
  // age and city-> useSearchParams() return a object(after ? mark, make a object and return) then we can access it
  // through get("key") method and use it according to our use.

  let age = searchParams.get("age");
  let city = searchParams.get("city");//it gives value

  return (
    <div>
      <h2 style={{margin:"20px"}}>Hay I'm Filter Page</h2>
      <div className="takevalue" style={{margin:"10px"}}>
        <input onChange={(e)=>{setSearchParams({age:e.target.value})}} className="inputs" style={{margin:"5px",padding:"10px"}} type="text" placeholder="Enter the Age" />
        <input onChange={(e)=>{setSearchParams({city:e.target.value})}} className="inputs" style={{margin:"5px",padding:"10px"}} type="text" placeholder="Enter the City" /><br />
        <button onClick={()=>{setSearchParams({age:40,city:"Sambalpur"})}} style={{margin:"5px",padding:"10px",backgroundColor:"#a7f3a7"}}>Submit</button>
      </div>
      <h4>Agr is : {age}</h4>
      <h4>Belong to the city : {city}</h4>
    </div>
  )
}
