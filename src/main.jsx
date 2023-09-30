import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProvider from './components/provider/AuthProvider';
import Orders from './components/Orders/Orders';
import PrivetRouter from './components/Router/PrivetRouter';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registration",
        element: <Registration />
      },
      {
        path: "/orders",
        element: <PrivetRouter><Orders></Orders></PrivetRouter>
      },
      {
        path: "/profile",
        element: <PrivetRouter><Profile/></PrivetRouter>
      },
      {
        path: "/dashboard",
        element: <PrivetRouter><Dashboard/></PrivetRouter>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
