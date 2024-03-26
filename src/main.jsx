import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import Home from './layouts/main/Home';
import Listed from './layouts/main/Listed';
import Read from './layouts/main/Read';
import Contact from './layouts/main/Contact';
import About from './layouts/main/About';
import Wishlist from './layouts/main/Wishlist';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed",
        element: <Listed></Listed>,
        children: [
          {
            path: "/listed/read",
            loader: () => fetch('/book.json'),
            element: <Read></Read>
          },
          {
            path: "/listed/wishlist",
            element: <Wishlist></Wishlist>
          }
        ]
      },
       {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path:"/about",
        element: <About></About>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
