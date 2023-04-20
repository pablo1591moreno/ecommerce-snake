import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Icon } from '@iconify/react';

const CartWidget = () => {
    const { productosEnCarrito } = useContext(CartContext)


    //BOTON CARRITO QUE REDIRECCIONA A PAGINA DE ITEMAS AGEGADOS AL CARRITO  

    return (

        <Link to='/Cart'>
            <div className='cajaCarrito' >
                <button className='botonCarrito' type="button">
                <Icon icon="material-symbols:add-shopping-cart" width={"40px"} alt="Carrito" style={{ color: "#2A2A2A" }} />
                    <span className={productosEnCarrito > 0 ? "unidadesEnCarrito" : "CarritoCero"}>{productosEnCarrito}</span>
                </button>
            </div>
        </Link>

    )
};

export default CartWidget; 