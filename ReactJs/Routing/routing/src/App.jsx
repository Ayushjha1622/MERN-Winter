
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import NavBar from './components/NavBar'
import ParaComp from './components/ParaComp'
import Courses from './components/Courses'
import MockTests from './components/MockTests'
import Reports from './components/Reports'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <NavBar />
        <Home/>
      </div>  
    },

    {
      path:"/about",
      element: 
      <div>
        <NavBar />
        <About/>
    </div>
    },

    {
      path:"/dashboard",
      element: 
      <div>
        <NavBar />
        <Dashboard/>
    </div>,
    children:[
      {
        path:'courses',
        element: <Courses/>
      },
      {
        path:'mock-tests',
        element: <MockTests/>
      },
      {
        path:'reports',
        element: <Reports/>
      }
    ]
    },

    {
      path:"/student/:id",
      element:
      <div>
        <NavBar/>
        <ParaComp/>
      </div>
    },
    {
      path:'*',
      element: <NotFound/>
    }
    
  ]
)

function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
      {/* <NavBar/> */}
  
    </div>
    )
}

export default App
