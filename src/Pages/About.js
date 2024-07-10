import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function About() {

  const location = useLocation();
  console.log(location); 

  return (
    <div>
      <h2 style={{margin:"20px"}}>Hay I'm ABOUT</h2>
      <div className="content" style={{margin:"10px"}}>
        <p>Hay welcome to the About page </p>
        <p>Here we learning about React Router Dom</p>
      </div>
      <Link to="/">Go to Home Page</Link><br />
      <Link to="/contact">Go to Contact Page</Link><br />
      <Link to="/abc">Random Link</Link><br />

      <div className="users" style={{margin:"5px"}}>
        <h3>Here are the Users</h3>
        <p>Check users details</p>
        <Link to="/users/Akash" state={{age:10}}>Akash</Link><br /> {/*in sate we pass soem data as object u can access that data by using the hook useLocation of react router dom */}
        <Link to="/users/Ritesh">Ritesh</Link><br /> {/*After clicked the link users/value pass as name(here Akash) */}
        <Link to="/users/Jeeban">Jeeban</Link><br />
      </div>
    </div>
  )
}
