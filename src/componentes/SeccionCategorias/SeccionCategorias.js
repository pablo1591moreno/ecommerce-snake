import React from 'react';
import './SeccionCategorias.css'
import { Link } from 'react-router-dom';
import zapatillas from './imagenes/zapatillas.png'
import remeras from './imagenes/remeras.png'
import camperas from './imagenes/camperas.png'
import pantalones from './imagenes/pantalones.png'
import gorras from './imagenes/gorras.png'
import buzos from './imagenes/buzos.png'
import ojotas from './imagenes/ojotas.png'


function SeccionCategorias() {
    return (
        <div className='seccionCategoria'>
            <h2>Todo</h2>
            <div className='container'>
                <div className='remeras'>
                    <Link to='/pageProduct/remeras'>
                        <img src={remeras} alt='remeras' />
                    </Link>
                </div>
                <div className='zapatillas'>
                    <Link to='/pageProduct/zapatillas'>
                        <img src={zapatillas} alt='zapatillas' />
                    </Link>
                </div>
                <div className='camperas'>
                    <Link to='/pageProduct/camperas'>
                        <img src={camperas} alt='camperas' />
                    </Link>
                </div>
                <div className='pantalones'>
                    <Link to='/pageProduct/pantalones'>
                        <img src={pantalones} alt='pantalones' />
                    </Link>
                </div>
                <div className='gorras'>
                    <Link to='/pageProduct/gorras'>
                        <img src={gorras} alt='gorras' />
                    </Link>
                </div>
                <div className='buzos'>
                    <Link to='/pageProduct/buzos'>
                        <img src={buzos} alt='buzos' />
                    </Link>
                </div>
                <div className='ojotas'>
                    <Link to='/pageProduct/ojotas'>
                        <img src={ojotas} alt='ojotas' />
                    </Link>
                </div>


            </div>
        </div>
    );
}

export default SeccionCategorias;