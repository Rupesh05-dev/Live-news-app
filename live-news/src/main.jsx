import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root  currentPath='general'  key='general' />
  },
  {
    path:"/general",
    element:<Root  currentPath='general'  key='general' />
  },
  {
    path:"/business",
    element:<Root   currentPath='business'   key='business'  />
  },
  {
    path:"/entertainment",
    element:<Root  currentPath='entertainment'  key='entertainment'  />
  },
  {
    path:"/science",
    element:<Root   currentPath='science'   key='science' />
  },
  {
    path:"/health",
    element:<Root  currentPath='health'  key='health' />
  },
  {
    path:"/sports",
    element:<Root  currentPath='sports' key='sports' />
  },
  {
    path:"/technology",
    element:<Root ker="7" currentPath='technology'  key='technology' />
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
