import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import rootLoader from "./component/ui/rootLoader";
import AppLayout from "./component/AppLayout";
import Home from "./component/ui/Home";
import About from "./pages/About";
// import Product from "./pages/Product/Product"
import Career from "./pages/Career";
import EnqueryForm from "./pages/EnqueryForm";
import Contact from "./pages/Contact";
import Automation from "./pages/Automation";
// import TestSolutionsTable from './pages/testSolutionsTable';
import ProductMain from "./pages/Product/productMain";
import AutomationPage from './pages/Product/AutomationPage';
import EMCPage from './pages/Product/EMCPage';
import TestMeasurePage from './pages/Product/TestMeasurePage';
import ErrorPage from "./component/ui/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      loader: rootLoader,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product",
          element: <ProductMain />,
          // children={}
        },
        {
          path: "/career",
          element: <Career />,
        },
        {
          path: "/enquery-form",
          element: <EnqueryForm />,
        },
        {
          path: "/automation",
          element: <Automation />,
        },
        {
          path: "/products/automation-industrial-engineering",
          element: <AutomationPage />,
        },
        {
          path: "/products/emc-emi-testing",
          element: <EMCPage />,
        },
        {
          path: "/products/test-measuring",
          element: <TestMeasurePage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
