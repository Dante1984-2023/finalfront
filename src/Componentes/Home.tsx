import PortalLayout from "../Layout/PortalLayout";

import Carousel from 'react-bootstrap/Carousel';


const Home = () => {


    return (
       < PortalLayout>
<h1 className="Titulo text-center">Bienvenido! Inicia Sesion para ver nuestros Productos</h1>
<section className="contenedor-1">
    <Carousel fade className="contenedor-1">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://www.recetasdesbieta.com/wp-content/uploads/2018/09/Como-hacer-pizza-casera-rapida-con-masa-de-pizza-sin-repos-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>PIZZAS</h3>
          <p>Listas para llevar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tn.com.ar/resizer/9a6ETMhiIKAMGwYxwuiw4lhQ7H8=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/77ST57RMRJBWDNLNCKVY5AKLD4.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Hamburguesas Gigantes</h3>
          <p>Listas para llevar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>TAKOS</h3>
          <p>
          Listas para llevar
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>



<section className="contenedor-2">
            <div className="contenedor-2__text">
                <h2>Hamburguesa Gigante</h2>
                <p>Las Hamburguesas mas grandes que has visto! </p>
                
            </div>
            <div className="contenedor-2__img">
                <img src="/img/burger_2.png" alt=""></img>
            </div>




        </section>
        <section className="contenedor-4">
    <div className="contenedor-4__text">
        <h2>Nuestras mejores Sucursales</h2>
        <p>En todo el pais mejorando nuestros Productos</p>

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
        

        </PortalLayout>
    )
}

export default Home;