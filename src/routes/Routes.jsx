import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from "../pages/Home";
import Statistics from './../pages/Statistics';
import Dashboard from './../pages/Dashboard';
import About from './../pages/About';
import ErrorPage from './../pages/ErrorPage';
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";


const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('../categories.json'),
          children:[
            {
              path: '/',
              element: <ProductCards></ProductCards>,
              loader: () => fetch('../products.json')
            },
            {
              path: '/category/:category',
              element: <ProductCards></ProductCards>,
              loader: () => fetch('../products.json')
            }
          ]
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
          loader: () => fetch('../products.json')
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/productDetails/:id',
          element: <ProductDetails></ProductDetails>,
          loader: () => fetch('../products.json')
        }
      ]
    },

  ]);

  export default routes;