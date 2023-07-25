import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import { AuthProvider } from "./auth/AuthProvider";
import Dashboard from "./routes/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
//import Profile from "./routes/Profile.jsx";
import "./carrito.css";
import "./index.css";
//import Productos from "./routes/Pruductos.tsx";
import Formulario from './Componentes/Formulario.jsx';
import Error from "./Componentes/Error";
//import App from './App.tsx';
//import Tienda from "./Componentes/Tienda.tsx";
//import Navegacion from "./Componentes/Navegacion.tsx";
import TabladeProductos from "./Componentes/TabladeProductos";
import Home from './Componentes/Home';
//import Inicio from "./Componentes/Inicio.tsx";
import Productos from "./Componentes/Productos.jsx";
import Update from "./Componentes/Update.jsx"





const router  = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/me",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
       {
        path: "/productos",
        
        element: <Productos />,
      }, 
    
      {
        path: "/formulario",
        element: <Formulario />,
      },
      {
        path: "/TabladeProductos",
        element: <TabladeProductos />,
      },
      {
        path: "/Error",
        element: <Error />,
      },
      {
        path: "/update",
        element: <Update />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>

);

