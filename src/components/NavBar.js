import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav id="nav" class="navbar navbar-expand-md navbar-dark bg-dark mb-4" >
            <div class="container-fluid">
                <Link className='navbar-brand' to='/'>
                </Link>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar">
                        <li class="nav-item">
                            <Link className='nav-link' to="/characters">Characters</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/dialoguesubmit">Submit Dialogue</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/aboutus'>About this project</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}