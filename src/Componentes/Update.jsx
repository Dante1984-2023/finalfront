import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Label } from 'semantic-ui-react'  ;
import { useEffect, useState} from 'react';
//import { useForm } from 'react-hook-form';
import axios from 'axios';
//import {Swal} from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import PortalLayout from '../Layout/PortalLayout';

const Update = () =>{
    
    
    const navigate = useNavigate();


    const DATOS = import.meta.env.VITE_DATOS;
    console.log(DATOS);
    

    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [urlimagen, setUrlimagen] = useState('');
    const [precio, setPrecio] = useState('');
    
  
      

    useEffect (() => {
      setId(localStorage.getItem('ID'));
      setNombre(localStorage.getItem('Nombre'));
      setUrlimagen(localStorage.getItem('Urlimagen'));
      setPrecio(localStorage.getItem('Precio'));
     
            
    
    }, []);
    
    const updateApiData  = () =>{
        console.log(`${DATOS}/${id}`);

        axios.put(`${DATOS}/${id}`, {
            
            nombre,
            urlimagen,
            precio,
           
        }).then(()=>{
           navigate('/me')
       })
       
   }
    
   

    return (
        < PortalLayout>
          <div className="Contenedorupdate">
<img className="fondoupdate" src="https://cadena102.com.ar/ochapsoa/2021/09/los-panchos-dobles-choolf-un___qid7xTcxr_1256x620__1.jpg" alt="" />
         <div className='containerupdate mt-5' >
            
         <div className='tituloformulario text-center m-5'> 
            <h1>
                Formulario de Update
            </h1>             
            </div>              
           
            <Form className= 'create-form'>
                <Form.Field>
                    <Label>Nombre:</Label>
                    <input placeholder ='Nombre'
                    type='text'
                    name='nombre'
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    />
                </Form.Field>
                

                <Form.Field>
                    <Label>Url de Imagen</Label>
                    <input placeholder='Urlimagen'
                    type='text'
                    name='urlimagen'
                    value={urlimagen}
                    onChange={(e)=>setUrlimagen(e.target.value)}
                    />
                </Form.Field>
               

                <Form.Field>
                <Label>Precio</Label>
                    <input placeholder='Precio'
                    type='nomber'
                    name='precio'
                    value={precio}
                    onChange={(e)=>setPrecio(e.target.value)}
                    />
                </Form.Field>
        
                
                
                

                <div className='botonActualizar'>
                
                        <Button  type='submit'  onClick={updateApiData} color='orange'>Actualizar Datos</Button>
                
                </div>
            </Form>
                </div>
                </div>
                </ PortalLayout>
    )
}

export default Update;


