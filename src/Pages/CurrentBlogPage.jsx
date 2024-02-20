import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import { AppContext } from "../Context/AppContext";
import Spinner from "../components/Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import BlogDetails from "../components/BlogDetails";
import './CurrentBlogPage.css'

const CurrentBlogPage = () => {
  const { isLoading, setIsLoading } = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [reletedBlogs, setReletedBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
  const blogId = location.pathname.split("/").at(-1);

  async function fetchReleatedBlogs() {
    setIsLoading(true);
    const url = `${baseUrl}?blogId=${blogId}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBlog(data.blog);
      setReletedBlogs(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setReletedBlogs([]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchReleatedBlogs();
  }, [location.pathname]);

  return (
    <div className="cbp-main-div">
      <div className="cbp-top">
        <div>
          {isLoading ? (
            <Spinner />
          ) : blog ? (
            <div className="all-posts" >
              <Header />
              <div className='btn'>
                <img onClick={() => navigate(-1)} className='footer-img' src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="" />
              </div>
              <BlogDetails post={blog} />
              <h2 className="">Releated Blogs</h2>
              <div className="all-posts">
                {reletedBlogs.map((post) => (
                  <div key={post.id} className="all-posts">
                    <BlogDetails post={post} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No Blog Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentBlogPage;
