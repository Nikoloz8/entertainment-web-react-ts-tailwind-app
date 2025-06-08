import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function Layout() {
  
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/login")
  }, [])

  return (
    <Outlet />
  )
}
