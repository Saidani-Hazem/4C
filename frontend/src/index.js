import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/home.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login.jsx';

import MuiDrawer from './MuiComponenets/MuiDrawer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/admin/login",
    element: <Login/>,
  },
  {
    path: "/admin/main",
    element: <MuiDrawer/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);