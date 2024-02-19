import React, { useContext } from 'react'
import './Spinner.css'
import { AppContext } from '../Context/AppContext'
const Spinner = () => {

  let {mode} = useContext(AppContext);

  return (
    <div className="spinner-main-div">
      <span className= {!mode ? 'loader' : 'loader-dark' }></span>
    </div>
  )
}
export default Spinner

