import './ItemDetail.css'
import Contador from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


const ItemDetail = ({ itemDetail, }) => {
    const { sumnaItems } = useContext(CartContext)


    const onAdd = (cantidad) => {
        sumnaItems(itemDetail, cantidad)
    }

    return (
        // ITEMS DE PRODUCTOS DETALLADOS 

        <div className="detalleDeProducto">

            <div className='detalleImgProductos'>
                <img src={itemDetail.imagen} alt={itemDetail.nombre} />
            </div>

            <div className='detalleTextoProductos'>
            
                <div className='textoProductos'>
                    <p className='nombre' key={itemDetail.id} >{itemDetail.nombre}</p>
                    <p className='precios' >${itemDetail.precio}</p>
                    <p className='detallesBold'>Detalles:</p>
                    <p className='detalles' >{itemDetail.detalles}</p>
                    <p className='stock' >Stock: {itemDetail.stock} </p>
                    <Contador stock={itemDetail.stock} initial={1} onAdd={onAdd} />
                </div>

            </div>

        </div>

    )
}


export default ItemDetail



