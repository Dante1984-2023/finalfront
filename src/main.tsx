import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login.tsx";
import Signup from "./routes/Signup.tsx";
import { AuthProvider } from "./auth/AuthProvider.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import Profile from "./routes/Profile.tsx";
import "./carrito.css";
import "./index.css";
//import Productos from "./routes/Pruductos.tsx";
import Formulario from './Componentes/Formulario.tsx';
import Error from "./Componentes/Error.tsx"
//import App from './App.tsx';
//import Tienda from "./Componentes/Tienda.tsx";
//import Navegacion from "./Componentes/Navegacion.tsx";
import TabladeProductos from "./Componentes/TabladeProductos.tsx";
import Home from './Componentes/Home.tsx';
//import Inicio from "./Componentes/Inicio.tsx";
import Productos from "./Componentes/Productos.tsx";
import Update from "./Componentes/Update.tsx"



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
        element: <Profile />,
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
