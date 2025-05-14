import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import rootLoader  from "./component/ui/rootLoader";
import AppLayout from './component/AppLayout'
import Home from './component/ui/Home'
import About from './pages/About'
// import Product from "./pages/Product/Product"
import Career from "./pages/Career"
import EnqueryForm from './pages/EnqueryForm'
import Contact from './pages/Contact'
import Automation from './pages/Automation';
import TestSolutionsTable from './pages/testSolutionsTable';


const App = () => {
   const router = createBrowserRouter([
    {
      path : '/',
      element: <AppLayout/>,
      loader:rootLoader,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/product",
          element:<TestSolutionsTable/>
        },
        {
          path:"/career",
          element:<Career/>
        },
        {
          path:"/enquery-form",
          element:<EnqueryForm/>
        },
        {
          path:"/automation",
          element:<Automation/>
        },
        
        
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
