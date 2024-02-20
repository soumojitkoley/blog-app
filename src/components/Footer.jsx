import React, { useContext } from 'react'
import './Footer.css'
import { AppContext } from '../Context/AppContext'
const Footer = () => {

  let { currentPage, totalPages, onclickHandler } = useContext(AppContext)

  return (
    <div className='footer-main-div'>
      <div className="nav-btns">
        <>
          {
            currentPage !== 1 && (
              <div className='btn'>
                <img onClick={() => onclickHandler(currentPage - 1)} className='footer-img' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="" />
              </div>
            )
          }
        </>
        <>
          {
            currentPage !== totalPages && (
              <div className='btn'>
                <img onClick={() => onclickHandler(currentPage + 1)} className='footer-img' src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" />
              </div>
            )
          }
        </>
      </div>
      <div className="show-curr-page">
        <p className="scp">Page <span>{currentPage}</span> of <span>{totalPages}</span></p>
      </div>
    </div>
  )
}

export default Footer