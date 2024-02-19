import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='home-main-div'>
        <Header/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Home