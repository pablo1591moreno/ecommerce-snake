import React from 'react';
import './SeccionProduct1.css';
import snakeGraffImg from './Imagenes/snakeGraff.png';
import snake from './Imagenes/snake.png';

function SeccionProduct1() {
  return (
    <div className='seccionUnoProduct'>
    <img src={snakeGraffImg} alt="snakeGraffiti" />
    <img src={snake} alt="snake" />
  </div>
  );
}

export default SeccionProduct1;
