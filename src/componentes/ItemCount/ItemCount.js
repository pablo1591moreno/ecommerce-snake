import './ItemCount.css'
import { useState } from 'react'

const Contador = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);

    //FUNCION DE SUMA DE PRODUCTOS RESPETANDO EL STOCK DEL PRODUCTO 
    const suma = () => {
        if (contador < stock) {
            setContador(contador + 1);

        }
        else {
            setContador(1)
        }

    }

    //FUNCION DE RESTA DE PRODUCTOS RESPETANDO EL STOCK DEL PRODUCTO 
    const resta = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } else {
            setContador(1)
        }
    }


    return (

        // CONTADOR DE ITEMS Y AGREGA AL CARRITO
        // SI EL STOCK SE ENCUENTRA EN 0 QUITA LA OPCION DE AGREGAR AL CARRITO 
        <div className='contenedorContador'>

            {stock > 0 ?

                <div className='contador'>
                    <div className='sumaResta'>
                        <p className='cantidad' >Cantidad</p>
                        <button type='button' className='botonResta' onClick={resta}>&lt;</button>
                        <p className='contador'> {contador} </p>
                        <button type='button' className='botonSuma' onClick={suma}>&gt;</button>
                    </div>
                    <div className='boton'>

                        <button type='button' className='agregarCarrito'
                            onClick={() => onAdd(contador)}>Agregar al carrito</button>

                    </div>
                </div>

                :
                <p className='sinStock' > SIN STOCK </p>
            }
        </div>
    )
}

export default Contador 