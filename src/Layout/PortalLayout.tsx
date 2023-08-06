import { NavLink } from "react-router-dom";
import React, { MouseEvent } from "react";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/AuthConstants";

interface PortalLayoutProps {
  children?: React.ReactNode;
}
export default function PortalLayout({ children }: PortalLayoutProps) {
  const auth = useAuth();

  async function handleSignOut(e: MouseEvent) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/signout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getRefreshToken()}`,
        },
      });
      if (response.ok) {
        auth.signout();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <header className="Navegacion1">
        <nav>
          <ul>
            <li>
            <img src="/img/Logo 93x79.png" alt="" />
            </li>
            <li>
              <NavLink to="/dashboard"></NavLink>
            </li>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
             
            <li>
              <NavLink to="/productos">Productos</NavLink>
            </li> 
            <li>
              <NavLink to="/formulario">Formulario</NavLink>
            </li>
            {/*  <li>
              <NavLink to="/TabladeProductos">Tabla de Productos</NavLink>
            </li>*/}
          

            <li>
              <NavLink to="/me">{auth.getUser()?.username ?? ""}</NavLink>
            </li>
            <li>
              <a href="#" onClick={handleSignOut}>
                Agenda productos con tu usuario  
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main1">{children}</main>
    </>
  );

}

