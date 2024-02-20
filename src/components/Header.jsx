import React, { useContext } from 'react'
import './Header.css'
import { AppContext } from '../Context/AppContext'
import { NavLink } from 'react-router-dom'

const Header = () => {

  let {modeClickHandler, mode} = useContext(AppContext)

  return (
    <div className='header-main-div'>
        <div className="title">
          <NavLink to='/' className={mode ? 'header-nav-light' : 'header-nav-dark'}><h2><span className='a'>Tech</span> Blogs</h2></NavLink>
        </div>
        <div className="mode-switch">
          <p>{mode ? 'Light' : 'Dark'} Mode</p>
          <input onClick={modeClickHandler} checked={mode} type="checkbox" class="theme-checkbox" />
        </div>
    </div>
  )
}

export default Header