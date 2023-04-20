import React from 'react';
import './SeccionMarcas.css';
import { Icon } from '@iconify/react';

function SeccionMarcas() {
  return (
    <div className='seccionMarcas'>
      <div className='marcas' >
      <div className='iconosMarca'>
      <Icon icon="simple-icons:jordan" width={"50px"} alt="Carrito" style={{ color: "#2A2A2A" }} />
      <Icon icon="gg:adidas" width={"50px"} alt="Carrito" style={{ color: "#2A2A2A" }} />
      <Icon icon="simple-icons:nike" width={"50px"} alt="Carrito" style={{ color: "#2A2A2A" }} />
      <Icon icon="simple-icons:puma" width={"50px"} alt="Carrito" style={{ color: "#2A2A2A" }} />
      <Icon icon="simple-icons:fila" width={"50px"} alt="Carrito" style={{ color: "#2A2A2A" }} />
      </div>
      </div>
    </div>
  );
}

export default SeccionMarcas;
