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
import BookAbout from './layouts/main/BookAbout';
import ReadGraph from './layouts/main/ReadGraph';
import Error from './layouts/error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
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
            element: <Read></Read>
          },
          {
            path: "/listed/wishlist",
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {
        path: "/readgraph",
        element: <ReadGraph></ReadGraph>
      },
       {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path: "/:bookId",
        loader: () => fetch('/book.json'),
        element: <BookAbout></BookAbout>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
