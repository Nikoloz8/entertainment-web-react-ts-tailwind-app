import { createContext, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const Context = createContext<TContext>({
  search: "",
  setSearch: () => { },
  startSearch: false,
  setStartSearch: () => { }

})

export default function Layout() {
  const [search, setSearch] = useState("")
  const [startSearch, setStartSearch] = useState(false)


  const navigate = useNavigate()
  useEffect(() => {
    navigate("/login")
  }, [])

  return (
    <div className="w-[100%] h-[100%] min-h-[100vh] bg-[#10141E]">
      <Context.Provider value={{ search, setSearch, startSearch, setStartSearch }}>
        <Outlet />
      </Context.Provider>
    </div>
  )
}
