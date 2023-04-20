import React from 'react';
import './SeccionMasVendidos.css';
import { Link } from 'react-router-dom'

function SeccionMasVendidos({ masVendidos }) {
  if (!Array.isArray(masVendidos)) {
    return null;
  }

  return (
    <>
      <div className='masVendidos'>
        <h1 className='tituloMasVendidos'>Más vendidos</h1>
      </div>
      <div className='imagMasVendidos'>
        {masVendidos.map((prod) => (
          <div className='unidadesMasImg'>
          <Link to={`/pageProduct/itemDetail/${prod.id}`}>
            <img key={prod.id} src={prod.imagen} alt={prod.nombre} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default SeccionMasVendidos;