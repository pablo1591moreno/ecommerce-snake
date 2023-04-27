import React from 'react';
import './SeccionMasVendidos.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function SeccionMasVendidos({ masVendidos }) {
  if (!Array.isArray(masVendidos)) {
    return null;
  }

  const isMobile = window.innerWidth <= 415;

  return (
    <>
      <div className='masVendidos'>
        <h2 className='tituloMasVendidos'>Más vendidos</h2>
      </div>
      <div className={`carouselWrapper ${isMobile ? 'mobile' : ''}`}>
        {isMobile ? (
          <Carousel showThumbs={false} showStatus={false}>
            {masVendidos.map((prod) => (
              <div key={prod.id} className='unidadesMasImg'>
                <Link to={`/pageProduct/itemDetail/${prod.id}`}>
                  <img src={prod.imagen} alt={prod.nombre} />
                </Link>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className='imagMasVendidos'>
            {masVendidos.map((prod) => (
              <div key={prod.id} className='unidadesMasImg'>
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

export default SeccionMasVendidos;
