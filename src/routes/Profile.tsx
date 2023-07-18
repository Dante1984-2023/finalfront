import PortalLayout from "../Layout/PortalLayout";
//import { Routes, Route } from 'react-router-dom';
//import Formulario from '../Componentes/Formulario';
//import  Navegacion  from '../Componentes/Navegacion';

//import TabladeProductos from '../Componentes/TabladeProductos';
//import Update from '../Componentes/Update';
//import Home from './componentes/Home';
//import Tienda from '../Componentes/Tienda'
//import Inicio from '../Componentes/Inicio';

  import { useState } from 'react';
import {  Header } from '../Componentes/Header.tsx'
import { ProductList } from '../Componentes/ProductList.tsx';

export default function Profile() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
  return (
    <PortalLayout>

		
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
		

    

    </PortalLayout>
    );
  }




















      {/* 
          <main className="main">
            <section className="contenedor-1">
            <div className="banner">
                <div className="banner_textos">
                    <h1>Obtener descuentos hasta 50%</h1>
                    <p>Somos PLATOS RAPIDOS
                    la empresa que se preocupa por tus necesidades alimentarias.
                    <br></br> 
                    Cuidamos tu salud con productos de calidad</p>
                    <a href="/productos">ORDENA YA</a>
                </div>
            </div>
        </section>
       {/*   {{!-- Inicio de seccion 2  --}}*/}
       
      {/*       
        <section className="contenedor-2">
            <div className="contenedor-2__text">
                <h2>Hamburguesa Gigante</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea quibusdam iure adipisci quia. Aspernatur vel, blanditiis corrupti cumque, unde eveniet dolore quam, exercitationem voluptas optio mollitia iste cum ducimus?</p>
                <a href="/productos">ORDENA YA!</a>
            </div>
            <div className="contenedor-2__img">
                <img src="/img/burger_2.png" alt=""></img>
            </div>




        </section>

   */} 

{/* {{!-- Inicio de seccion 3 --}} */}

{/*     
 <section className="contenedor-3">
    <div className="contenedor-3__text">
        <h2>ESTADISTICAS</h2>
        <p>Somos una empresa localizada en todo el pais. Tenemos una amplia variedad de Platos Rapidos. Hace tu pedido y en menos de 30 min te lo llevamos a tu casa.</p>
    </div>
    <div className="contenedor-3__data">
     <div className="data">
     <h3>7K</h3>
     <br></br>
     <p>CLIENTES</p>
</div>

     <div className="data">
     <h3>100</h3>
     <p>TIENDAS</p>
</div>

     <div className="data">
     <h3>10</h3>
     <p>CIUDADES</p>
</div>
    </div>
    
 </section>

 <section className="contenedor-4">
    <div className="contenedor-4__text">
        <h2>Nuestras mejores Sucursales</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt recusandae commodi molestiae suscipit maiores explicabo, quos assumenda obcaecati animi ducimus neque quasi perferendis numquam magnam voluptatibus, sunt vel. Porro, quaerat?</p>

    </div>
    <div className="contenedor-4__fotos">
        <div className="fotossucursales">
            <img src="/img/Sucursal1.jpg" alt=""></img>
            <h3>PUERTO MADRYN</h3>
            <p>28 de julio 445</p>
        </div>
        <div className="fotossucursales">
            <img src="/img/Sucursal2.jpg" alt=""></img>
            <h3>TRELEW</h3>
            <p>Patricio rey 1874</p>
        </div>
        <div className="fotossucursales">
            <img src="/img/Sucursal3.jpg" alt=""></img>
            <h3>BARILOCHE</h3>
            <p>AV. Libertad 154</p>
        </div>
    </div>
 </section>
        </main> 

      
*/}

