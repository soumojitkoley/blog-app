import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext.jsx'
import Spinner from './Spinner.jsx'
import './Blogs.css'
import { NavLink, useLocation } from 'react-router-dom'

const Blogs = () => {

  let { isLoading, posts } = useContext(AppContext)

  const location = useLocation();
  const isTagPage = location.pathname.includes('tag-page')
  const isCategoryPage = location.pathname.includes('category-page')

  return (
    <div className={`blogs-main-div ${isTagPage ? 'no-margin-tag-page' : ''} ${isCategoryPage ? 'no-margin-category-page' : ''}`}>
      {
        isLoading ? <Spinner /> : (
          <div className='all-posts'>
            {
              posts.map(post => {
                return (
                  <div key={post.id} className='post'>
                    <NavLink to={`/current-blog/${post.id}`}>
                      <p className='p-title'><b>{post.title}</b></p>
                    </NavLink>
                    <p>By <span><i>{post.author}</i></span> On <NavLink to={`/category-page/${post.category.replaceAll("-"," ")}`}><span className='p-category'><b>{post.category}</b></span></NavLink></p>
                    <p>Posted On <span><b>{post.date}</b></span></p>
                    <p className='p-content'>{post.content}</p>
                    <p>
                      {post.tags.map((tag, index) => (
                        <NavLink key={index} to={`/tag-page/${tag.replaceAll("-", " ")}`}>
                          <span className="tag">{`#${tag}  `}</span>
                        </NavLink>
                      ))}
                    </p>
                  </div>
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