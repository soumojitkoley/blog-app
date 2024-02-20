import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext.jsx'
import Spinner from './Spinner.jsx'
import './Blogs.css'
import { NavLink, useLocation } from 'react-router-dom'
import BlogDetails from './BlogDetails.jsx'

const Blogs = () => {

  const location = useLocation();
  const isTagPage = location.pathname.includes('tag-page')
  const isCategoryPage = location.pathname.includes('category-page')
  let { isLoading, posts} = useContext(AppContext)

  return (
    <div className={`blogs-main-div ${isTagPage ? 'no-margin-tag-page' : ''} ${isCategoryPage ? 'no-margin-category-page' : ''}`}>
      {
        isLoading ? <Spinner /> : (
          <div className='all-posts'>
            {
              posts.map((post) => {
                return (
                  <BlogDetails key={post.id} post={post} />
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default Blogs