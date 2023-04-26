import React from 'react';
import './SeccionUltimosIngresos.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function SeccionUltimosIngresos({ ingresos }) {
  if (!Array.isArray(ingresos)) {
    return null;
  }

  const isMobile = window.innerWidth <= 415;

  return (
    <>
      <div className='ultimosIngresos'>
        <h1 className='tituloUltIngresos' >Ultimos ingresos</h1>
      </div>
      <div className={`carouselWrapper ${isMobile ? 'mobile' : ''}`}>
        {isMobile ? (
          <Carousel showThumbs={false} showStatus={false}>
            {ingresos.map((prod) => (
              <div key={prod.id} className='unidadesImg'>
                <Link to={`/pageProduct/itemDetail/${prod.id}`}>
                  <img src={prod.imagen} alt={prod.nombre} />
                </Link>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className='imagUltimosIngresos'>
            {ingresos.map((prod) => (
              <div key={prod.id} className='unidadesImg'>
                <Link to={`/pageProduct/itemDetail/${prod.id}`}>
                  <img src={prod.imagen} alt={prod.nombre} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default SeccionUltimosIngresos;
