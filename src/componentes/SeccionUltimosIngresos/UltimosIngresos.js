import React from 'react';
import './SeccionUltimosIngresos.css';
import { Link } from 'react-router-dom'

function SeccionUltimosIngresos({ ingresos }) {
  if (!Array.isArray(ingresos)) {
    return null;
  }

  return (
    <>
      <div className='ultimosIngresos'>
        <h1 className='tituloUltIngresos' >Ultimos ingresos</h1>
      </div>
      <div className='imagUltimosIngresos'>
        {ingresos.map((prod) => (
          <div className='unidadesImg'>
          <Link to={`/pageProduct/itemDetail/${prod.id}`}>
            <img key={prod.id} src={prod.imagen} alt={prod.nombre} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default SeccionUltimosIngresos;