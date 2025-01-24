import React from 'react'
import Navbar from './NavBar'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div id="header">
      <Link id="headlinelink" to="/">
      <h1 id="headline">Our beautiful community page</h1>
      </Link>
      <Navbar/>
    </div>
    
  )
}