import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ children }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <main>{children}</main>
    </div>
  )
}

export default NavBar
