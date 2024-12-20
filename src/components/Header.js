import React from 'react'
import { Link } from 'react-bootstrap/lib/Navbar'

const Header = () => {
  return (
    <header className="header">
    <div className="header-content">
      <h1 className="header-title">My Media List</h1>
        <Link className="header-link"> View Media List</Link>
    </div>
  </header>
  )
}

export default Header