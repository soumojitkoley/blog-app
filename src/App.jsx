import { useContext, useEffect} from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Blogs from './components/Blogs.jsx'
import Footer from './components/Footer.jsx'
import { AppContext } from './Context/AppContext.jsx'
import { Outlet, Route, Routes } from 'react-router-dom'
import CategoryPage from './Pages/CategoryPage.jsx'
import CurrentBlogPage from './Pages/CurrentBlogPage.jsx'
import TagPage from './Pages/TagPage.jsx'
import Home from './Pages/Home.jsx'

function App() {

  let {mode,getData} = useContext(AppContext);
  console.log(mode)
  useEffect(()=>{
    getData();
  },[])

  return (
    <div className={mode ? 'app-main-div-light' : 'app-main-div-dark'}>
      <Routes>
        <Route path='/' element={<Outlet/>}>
          <Route index element={<Home/>} />
          <Route path="/category-page" element={<CategoryPage />} />
          <Route path="/current-blog" element={<CurrentBlogPage />} />
          <Route path="/tag-page" element={<TagPage />} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
