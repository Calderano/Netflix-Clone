import React from 'react'
import logo from "../../logo.png"
import {Link} from "react-router-dom"
import {ImSearch} from "react-icons/im"
const Header = () => {
  return (
    <nav className="header">
     <img src={logo} alt="NETFLIX" />
    <div>
      <Link to="/movies">Movies</Link>
      <Link to="/tvshows">TV  Shows</Link>
      <Link to="/series">Series</Link>
      <Link to="/recently">Recently  Added</Link>
    </div>
    <ImSearch/>
    </nav>
  )
}

export default Header