 import 'semantic-ui-css/semantic.min.css';
import  'semantic-ui-react';
import { Form, Button, Label } from 'semantic-ui-react'  ;
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import PortalLayout from '../Layout/PortalLayout';
// eslint-disable-next-line @typescript-eslint/no-var-requires




const Formulario = () =>{


    const URL  = import.meta.env.VITE_URL;

     console.log(URL);
     

    const {register, handleSubmit, reset, formState: { errors } } =  useForm({
        defaultValues: {
            id: '',
            nombre: '',
            urlimagen: '',
            precio: ''
        }
    });

    const onSubmit = (datos, e) =>{
        e.preventDefault();
        try {
            console.log(datos);
            axios.post(URL, datos);
            e.target.reset();
            console.log(URL);
            Swal.fire({
                title: "Muy Bien!",
                text: "Tu producto fue creado con exito!",
                icon: "success",
                confirmButtonText: 'Genial'
            })

        } catch (error) {
            console.log(error);
        }
        
    }


    /*const (nombre, setNombre) = useState('');
    const (apellido, setApellido) = useState('');
    const (email, setEmail) = useState('');
    const (password, setPassword) = useState('');
    */
   
    return (
        
< PortalLayout>
         <div className='containerFormulario mt-5'>
            
            <div className='text-center m-5'> 
            <h1>
                Formulario de Carrito
            </h1>             
            </div>              
           
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <Label>id:</Label>
                    <input placeholder ='Id'
                    type='Nomber'
                    //name='id'
                    {...register('id',
                        {
                            required: true,
                            maxLength: 50

                        })
                    }
                    />
                </Form.Field>
                {errors.nombre && <p className='errores'>El Id es obligatorio con un maximo de 50 caracteres</p>}

                <Form.Field>
                    <Label>Nombre</Label>
                    <input placeholder='Nombre'
                    type='text'
                    //name='nombre'
                    {...register('nombre',
                        {
                            required: true,
                            maxLength: 50
                        })
                  }
                    />
                </Form.Field>
                <Form.Field>
                    <Label>Url de Imagen</Label>
                    <input placeholder='Urlimagen'
                    type='text'
                    //name='urlimagen'
                    {...register('urlimagen',
                        {
                            required: true,
                             /*  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/*/
                       
                        })
                  }

                    />

                     
                </Form.Field>
                {errors.urlimagen && <p className='errores'>La urlimagen es obligatorio con un maximo de 50 caracteres</p>}

                <Form.Field>
                    <Label>Precio</Label>
                    <input placeholder='Precio'
                    type='Nomber'
                    //name='precio'
                    {...register('precio',
                        {
                            required: true,
                            maxLength: 50
                        })
                  }
                    />
                </Form.Field>
                {errors.precio && <p className='errores'>El precio es obligatorio con un maximo de 50 caracteres</p>}
               
                <div className='centrar'>
                    <Button.Group>
                        <Button type='button' onClick={() => reset()} color='orange'>Limpiar Formulario</Button>
                        <Button.Or />
                        <Button type='submit' positive>Enviar Datos</Button>
                    </Button.Group>

                    
                       
                     
                </div>
            </Form>
                </div>
        </PortalLayout>
    )
}
export default Formulario;