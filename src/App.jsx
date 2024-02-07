import { useContext, useEffect} from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Blogs from './components/Blogs.jsx'
import Footer from './components/Footer.jsx'
import { AppContext } from './Context/AppContext.jsx'

function App() {

  let {mode,getData} = useContext(AppContext);
  console.log(mode)
  useEffect(()=>{
    getData();
  },[])

  return (
    <div className={mode ? 'app-main-div-light' : 'app-main-div-dark'}>
      <Header />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
