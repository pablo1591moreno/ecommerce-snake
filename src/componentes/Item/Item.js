import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, imagen }) => {


    //ESTRUCTURA DE ITEMAS DE LA PAGINA PRINCIPALES 
    return (

        <div className="productosIndividuales">

            <Link to={`/pageProduct/itemDetail/${id}`}>
                <img src={imagen} alt={nombre} />
            </Link>

            <div className='textoProductosItem'>
                <h1 className='itemNombre' >{nombre}</h1>
                <p className='precio' >${precio}</p>
            </div>

        </div>

    )
}

export default Item
