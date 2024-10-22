
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import React from 'react'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: '/',

      },
      {
        path: '/new',

      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
