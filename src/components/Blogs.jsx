import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext.jsx'
import Spinner from './Spinner.jsx'
import './Blogs.css'

const Blogs = () => {

  let { isLoading, posts } = useContext(AppContext)

  const generateRandomString = () => {
    return Math.floor(Math.random() * 5000) + 1;
  };

  return (
    <div className='blogs-main-div'>
      {
        isLoading ? <Spinner /> : (
          <div className='all-posts'>
            {
              posts.map(post => {
                return (
                  <div key={post.id} className='post'>
                    <p className='p-title'><b>{post.title}</b></p>
                    <p>By <span><b>{post.author}</b></span> On <span><b>{post.category}</b></span></p>
                    <p>Posted On <span><b>{post.date}</b></span></p>
                    <p className='p-content'>{post.content}</p>
                    <p>
                      {post.tags.map((tag, index) => (
                        <span key={index} className="tag">{`#${tag}  `}</span>
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