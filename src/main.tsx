import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./pages/Login"
import SignUp from './pages/SignUp'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Movies from "./pages/Movies"
import Series from './pages/Series'
import Bookmarked from './pages/Bookmarked'

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
      }, {
        element: <Movies />,
        path: "/movies"
      }, {
        element: <Series />,
        path: "/series"
      }, {
        element: <Bookmarked />,
        path: "/bookmarked"
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
