import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function Layout() {

  const navigate = useNavigate()
  useEffect(() => {
    navigate("/login")
  }, [])

  return (
    <div className="w-[100%] h-[100%] min-h-[100vh] bg-[#10141E]">
      <Outlet />
    </div>
  )
}
