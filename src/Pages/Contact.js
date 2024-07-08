import React from 'react'
import { Link } from 'react-router-dom'

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
      <Link to="/def">Random Link</Link>
    </div>
  )
}
