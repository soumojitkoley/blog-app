import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext.jsx'
import Spinner from './Spinner.jsx'
import './BlogDetails.css'
import { NavLink, useLocation } from 'react-router-dom'

const BlogDetails = (props) => {



  return (
    <div key={props.post.id} className='post' >
                    <NavLink to={`/current-blog/${props.post.id}`}>
                      <p className='p-title'><b>{props.post.title}</b></p>
                    </NavLink>
                    <p>By <span><i>{props.post.author}</i></span> On <NavLink to={`/category-page/${props.post.category.replaceAll("-", " ")}`}><span className='p-category'><b>{props.post.category}</b></span></NavLink></p>
                    <p>Posted On <span><b>{props.post.date}</b></span></p>
                    <p className='p-content'>{props.post.content}</p>
                    <p>
                      {props.post.tags.map((tag, index) => (
                        <NavLink key={index} to={`/tag-page/${tag.replaceAll("-", " ")}`}>
                          <span className="tag">{`#${tag}  `}</span>
                        </NavLink>
                      ))}
                    </p>
                  </div>
  )
}

export default BlogDetails