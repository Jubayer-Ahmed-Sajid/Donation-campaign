import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";






import './index.css'
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import CardDetails from './Components/CardDetails/CardDetails';
import Error from './Pages/ErrorPage/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[{
      path:'/',
      loader: ()=> fetch("/categories.json"),
      element:<Home></Home>,
      
    },
    {
      path:'/donation', 
      element:<Donation></Donation>
    },
    {
      path:'/statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'/cards/:id',
      element:<CardDetails></CardDetails>,
      loader:()=> fetch('../categories.json')
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);