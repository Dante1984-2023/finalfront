import PortalLayout from "../Layout/PortalLayout";
  import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom'








const TabladeProductos = () =>{
  

    const DATOS = import.meta.env.VITE_DATOS;

    

    console.log(DATOS);

    const [apiData, setApiData] = useState([]);

    useEffect (() => {
        axios.get(DATOS)
        .then((res)=> {
         console.log(res.data)
         setApiData(res.data.productonuevo);
            
    })
    },[]);

    //Pasar los datos para update mediante el localstorage

    const setData = (data) =>{
        const { _id, nombre, urlimagen, precio } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('urlimagen', urlimagen);
        localStorage.setItem('precio', precio);
      
    }
    

    const getData = ()=>{
        axios.get(DATOS)
        .then((res)=>{
            console.log(res.data);
            setApiData(res.data.productonuevo)
        })
    } 
    const onDelete = (id)=>{
         axios.delete(`${DATOS}/${id}`)
        .then(()=>{
            getData()
        })
        console.log(`${id} - Eliminado`);
    }
    
    console.log(apiData);
    return(
                <PortalLayout>
                    <div className="ContenedorTabladeproductos">
<img className="fondoTabladeproductos" src="https://cadena102.com.ar/ochapsoa/2021/09/los-panchos-dobles-choolf-un___qid7xTcxr_1256x620__1.jpg" alt="" />
        <div className="containerTabla m-5">
            <div className="tituloProductos m-5">
            <h1>
                Tabla de Productos
            </h1>
           </div>
       <div className="tabladeproductos">
         <Table singleLine>
            <Table.Header>
                
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Url de Imagen</Table.HeaderCell>
                <Table.HeaderCell>Precio</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Header>
         
            <Table.Body>
                 
                {apiData.map ((data)=>{
                    return(
                        
                        <Table.Row key={data._id}>
                        <Table.Cell>{data.nombre}</Table.Cell>
                        <Table.Cell>{data.urlimagen}</Table.Cell>
                        <Table.Cell>{data.precio}</Table.Cell>
                        <Link to ='/update'>
                        <Table.Cell>
                            <Button onClick={()=>{
                                setData(data)
                                console.log('Dato actualizado')}}>Update</Button>
                        </Table.Cell>
                        </Link>
                        <Table.Cell>
                            <Button onClick={()=> {onDelete(data._id)
                            console.log('dato eliminado')}}>Delete</Button>
                        </Table.Cell>
                        </Table.Row>
                        
                        )
                    })}
                    
            </Table.Body>  
        </Table>
        </div>
        </div>
        </div>
        
        
                </PortalLayout>
    )
}

export default TabladeProductos;



