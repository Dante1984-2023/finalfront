//import PortalLayout from "../Layout/PortalLayout";
import { useState } from 'react';
import {  Header } from '../Componentes/Header.tsx'
import { ProductList } from '../Componentes/ProductList.tsx';
//import Navegacion from "../Componentes/Navegacion.tsx";





export default function Productos() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
  return (
       

    
		<div className="TiendaProductos">
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
      </div>
		

    


    

    
    );
  }
