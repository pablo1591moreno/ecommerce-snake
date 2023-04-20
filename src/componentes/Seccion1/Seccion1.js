import React from 'react';
import './Seccion1.css';
import snakeGraffImg from './Imagenes/snakeGraff.png';
import snake from './Imagenes/snake.png';

function Seccion1() {
  return (
    <div className='seccionUno'>
    <img src={snakeGraffImg} alt="snakeGraffiti" />
    <img src={snake} alt="snake" />
  </div>
  );
}

export default Seccion1;
