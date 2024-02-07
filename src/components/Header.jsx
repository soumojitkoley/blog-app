import React, { useContext } from 'react'
import './Header.css'
import { AppContext } from '../Context/AppContext'

const Header = () => {

  let {modeClickHandler, mode} = useContext(AppContext)

  return (
    <div className='header-main-div'>
        <div className="title">
          <h2><span className='a'>Tech</span> Blogs</h2>
        </div>
        <div className="mode-switch">
          <input onClick={modeClickHandler} checked={mode} type="checkbox" class="theme-checkbox" />
        </div>
    </div>
  )
}

export default Header