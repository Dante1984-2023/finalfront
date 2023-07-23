
import { Link } from "react-router-dom";

interface DefaultLayoutProps {
    children: React.ReactNode;
}



export default function DefaultLayout({children}:DefaultLayoutProps){
     return(
      <>
      
      <header className="Navegacion1">
        <nav>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/signup">Registrarse</Link>
                </li>
            </ul>
        </nav>
      </header>

<main className="main">{children}</main>

      </>

     )



}