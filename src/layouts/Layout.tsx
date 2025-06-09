import { createContext, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const Context = createContext<TContext>({
  search: "",
  setSearch: () => { },
  startSearch: false,
  setStartSearch: () => { },
  isTablet: false,
  setIsTablet: () => { }

})

export default function Layout() {
  const [search, setSearch] = useState("")
  const [startSearch, setStartSearch] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  const navigate = useNavigate()
  useEffect(() => {
    navigate("/login")
  }, [])

  return (
    <div className="w-[100%] h-[100%] max-sm:p-0! min-h-[100vh] bg-[#10141E] max-md:p-[24px]!">
      <Context.Provider value={{ search, setSearch, isTablet, setIsTablet, startSearch, setStartSearch }}>
        <Outlet />
      </Context.Provider>
    </div>
  )
}
