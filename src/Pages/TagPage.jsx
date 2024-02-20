import React, { useContext } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Blogs from '../Components/Blogs'
import Footer from "../Components/Footer";
import { AppContext } from '../Context/AppContext.jsx'
import Spinner from '../Components/Spinner'
import './TagPage.css'

const TagPage = () => {
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replaceAll("%20", " ");
  let { isLoading } = useContext(AppContext)

  const navigate = useNavigate();
  return (
    <div className="tagpage-main-div">
      {
        isLoading ? <Spinner /> :
          (
            <>
              <Header />
              <div className="tagpage-top">
                <div className='btn'>
                  <img onClick={() => navigate(-1)} className='footer-img' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="" />
                </div>
                <h4 className="">
                  Blogs Tagged <span className="tag">{`#${tag}`}</span>
                </h4>
              </div>
              <Blogs />
              <Footer />
              </>
            )
      }
      </div>
  );
}; 

export default TagPage;