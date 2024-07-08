import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <h2 style={{margin:"20px"}}>Hay I'm Contact Us</h2>
      <div className="content" style={{margin:"10px"}}>
        <p>Hay welcome to the Contact Us page </p>
        <p>Here we learning about React Router Dom</p>
      </div>
      <Link to="/">Go to Home Page</Link><br />
      <Link to="/about">Go to About Page</Link><br />
      <Link to="/def">Random Link</Link> <br />

      <h3 style={{margin:"15px"}}>Here are some other Businesses</h3> {/* Learning Nested Routing here below */}

      <Link style={{margin:"5px"}} to="company">Company</Link>
      <Link style={{margin:"5px"}} to="youtube">Youtube</Link>{/* Remember no "/company" here only "company" */}
      <Link style={{margin:"5px"}} to="others">Others</Link>

      <Outlet/>
      
    </div>
  )
}
