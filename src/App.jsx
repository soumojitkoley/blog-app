import { useContext, useEffect} from 'react'
import './App.css'
import { AppContext } from './Context/AppContext.jsx'
import { Outlet, Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import CategoryPage from './Pages/CategoryPage.jsx'
import CurrentBlogPage from './Pages/CurrentBlogPage.jsx'
import TagPage from './Pages/TagPage.jsx'
import Home from './Pages/Home.jsx'

function App() {

  let {mode,getData,currentPage} = useContext(AppContext);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    window.scrollTo(0, 0);
  })

  useEffect(() => {
    window.scrollTo(0, 0);
    const page = searchParams.get("page") ?? 1;

    const tag = location.pathname.split("/").at(-1).replaceAll("%20", " ");
    const category = location.pathname.split("/").at(-1).replaceAll("%20", " ");

    if (location.pathname.includes("tag-page")) {
      getData(Number(page), tag);
    }
    else if (location.pathname.includes("category-page")) {
      getData(Number(page), category);
    }
    else {
      getData(Number(page));
    }

  }, [location.pathname, location.search]);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[currentPage])

  useEffect(() => {
    document.body.className = mode ? 'app-main-div-light' : 'app-main-div-dark';
  }, [mode]);


  return (
    <div className={mode ? 'app-main-div-light' : 'app-main-div-dark'}>
      <Routes>
        <Route path='/' element={<Outlet/>}>
          <Route index element={<Home/>} />
          <Route path="/category-page/:category" element={<CategoryPage />} />
          <Route path="/current-blog/:blogId" element={<CurrentBlogPage />} />
          <Route path="/tag-page/:tag" element={<TagPage />} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
