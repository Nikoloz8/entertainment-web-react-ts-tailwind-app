import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./pages/Login"
import SignUp from './pages/SignUp'
import Layout from './layouts/Layout'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <SignUp />,
        path: "/signUp"
      },
      {
        element: <Home />,
        path: "/"
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
