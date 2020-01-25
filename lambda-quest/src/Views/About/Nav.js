import React from 'react'
import {NavLink} from 'react-router-dom'
import "./nav.css"

const Nav = () => {
  return (
    <nav className="lquestNav">
      <NavLink to='/game' className="lquestNavLink">Game</NavLink>
      <NavLink to='/about' className="lquestNavLink">?</NavLink>
    </nav>
  )
}

export default Nav
