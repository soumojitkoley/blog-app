import { createContext, useState } from "react"

export const AppContext = createContext()

export default function AppContextProvider({ children }) {
    const [mode, setMode] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [posts, setPosts] = useState([])


    function modeClickHandler() {
        setMode(!mode)
        console.log('white mode activated')
    }
    
    
    async function getData(page = 1) {
        setIsLoading(true)
        try {
            let response = await fetch(`${import.meta.env.VITE_API_URL}?page=${page}`)
            let data = await response.json()
            setPosts(data.posts)
            setCurrentPage(data.page)
            setTotalPages(data.totalPages)

        } catch (error) {
            console.error(error)
        }
        setIsLoading(false)
    }

    function onclickHandler(page){
        getData(page);
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
