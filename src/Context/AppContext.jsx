import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

export default function AppContextProvider({ children }) {
    const [mode, setMode] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();

    function modeClickHandler() {
        setMode(!mode)
    }

    async function getData(page = 1, tag = null, category) {
        setIsLoading(true)
        let url = `${import.meta.env.VITE_API_URL}?page=${page}`
        if (tag) {
            url += `&tag=${tag}`;
        }
        if (category) {
            url += `&category=${category}`;
        }
        try {
            let response = await fetch(url)
            let data = await response.json()
            setPosts(data.posts)
            setCurrentPage(data.page)
            setTotalPages(data.totalPages)

        } catch (error) {
            console.error(error)
        }
        setIsLoading(false)
    }

    function onclickHandler(page) {
        navigate({search : `?page=${page}`})
        setCurrentPage(page)
    }


    const value = {
        getData,
        isLoading,
        setIsLoading,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        onclickHandler,
        mode,
        setMode,
        modeClickHandler
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
