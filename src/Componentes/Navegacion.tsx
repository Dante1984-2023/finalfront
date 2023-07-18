import { NavLink } from "react-router-dom";
//import { Input, Menu } from 'semantic-ui-react';


const Navegacion = () => {
    return (

      
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            Navbar
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >Name
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
               
               <li className="LI m-2">
                <NavLink to="/inicio">
                    Inicio
                </NavLink>
                </li>

                <li className="LI m-2">
                <NavLink to="/tienda">
                    Tienda
                </NavLink>
                </li>

                <li className="LI m-2">
                <NavLink to="/formulario">
                    Formulario
                </NavLink>
                </li>
                <li className="LI m-2">
                <NavLink to="/TabladeProductos">
                    Tabla de Productos
                </NavLink>
                </li>
             
            </ul>
            </div>
        </div>
        </nav>
         
    )
};

export default Navegacion;