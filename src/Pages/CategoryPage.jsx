import React, { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Header from "../Components/Header"
import Blogs from "../Components/Blogs"
import Footer from "../Components/Footer"
import Spinner from "../Components/Spinner"
import './CategoryPage.css'
import { AppContext } from "../Context/AppContext";

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("%20", " ")

  let {isLoading} = useContext(AppContext)

  const navigate = useNavigate();
  return (
    <div className="categorypage-main-div">
      {
        isLoading ? <Spinner /> :
          (
            <>
              <Header />
              <div className="categorypage-top">
                <div className='btn'>
                  <img onClick={() => navigate(-1)} className='footer-img' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="" />
                </div>
                <h4 className="">
                  Blogs Tagged <span className="tag">#{category}</span>
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

export default CategoryPage;



