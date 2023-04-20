import './Cart.css'
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { db } from '../../Utils/Firebase'
import SeccionProduct1 from '../SeccionProduct1/SeccionProduct1'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'

const Cart = () => {
  //PROPS PARA REMOVER CADA ITEM O TODOS LOS ITEMS 
  const { productCartList, removerItem, getTotal } = useContext(CartContext)
  const [idOrden, setIdOrden] = useState("")

  //ACUALIZA EL STOCK DE LA BASE DE DATOS AL REALIZAR CONFIRMAR LA COMPRA
  const actualizaStock = () => productCartList.map(actuliza => {
    const stock = doc(db, "data", actuliza.id);
    updateDoc(stock, {
      'stock': actuliza.stock - actuliza.cantidad,
    });
  })

  const enviarFormulario = (event) => {
    //PREVENIMOS EL "REFRESH" DE LA PAGINA
    event.preventDefault()

    //RECOLECTAMOS LA INFORMACION DEL FORMULARIO
    const orden = {

      comprador: {
        nombre: event.target[0].value,
        telefono: event.target[1].value,
        email: event.target[2].value
      },

      //RECOLECTAMOS LOS PRODUCTOS COMPRADOS 
      items: productCartList,
      total: getTotal()

    }

    //CREAMOS LA COLECCION ("orden") Y LA GUARDAMOS EN LA BASE DE DATOS ("db")--------SI YA EXISTE ("orden") METE LOS DATOS AHI, SI NO EXISTE LA CREA

    const queryRef = collection(db, "orden");
    addDoc(queryRef, orden).then(response => {
      console.log("respuesta", response)
      setIdOrden(response.id)
      actualizaStock()
    })

  }


  // ESTRUCTURA DE LOS ITEMS DEL CARRITO 

  return (
    <>
    <SeccionProduct1/>
    <div className='contenedorCompForm'>
      {idOrden ? (
        <h1 className='compraExitosa'>Compra Exitosa ID : {idOrden}</h1>
      ) : (
        <>
          {productCartList.length > 0 ? (
            <div className='compraMasFormulario'>
              <div className='contenedorCompras'>
                {productCartList.map(item => (
                  <div className='productoComprado' key={item.id}>
                    <div className='imgCompra'>
                      <img src={item.imagen} alt={item.nombre} />
                    </div>
                    <div className='infoProductoComprado'>
                      <h2 className='carNombre'>{item.nombre}</h2>
                      <h3 className='cantidadPrecio'>Cantidad - {item.cantidad} x ${item.precio}</h3>
                      <h3 className='precioTotal'>${item.cantidad * item.precio}</h3>
                    </div>
                    <button className='eliminarProducto' onClick={() => removerItem(item.id)}><Icon icon="material-symbols:delete-forever-outline" width={"40px"} alt="Carrito" style={{ color: "#2A2A2A" }} /></button>
                  </div>
                ))}
              </div>
              <div className='contenedorFromulario'>
                <h2 className='confirmacion'>Ingresa tus datos y confirma tu compra</h2>
                <form className='formulario' onSubmit={enviarFormulario}>
                  <div className='formGroup'>
                    <label htmlFor='nombre'>Nombre:</label>
                    <input type='text' id='nombre' name='nombre' required />
                  </div>
                  <div className='formGroup'>
                    <label htmlFor='telefono'>Teléfono:</label>
                    <input type='tel' id='telefono' name='telefono' required />
                  </div>
                  <div className='formGroup'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' required />
                  </div>
                  <div className='botonFormulario'>
                    <button className='enviar' type='submit'>Confirmar</button>
                  </div>
                </form>
              </div>
              <h3 className='totalFinal'>Total ${getTotal()}</h3>
            </div>
          ) : (
            <div className='carritoVacioVerProductos'>
              <h2 className='carritoVacio'>CARRITO VACÍO!!!</h2>
              <NavLink to='/pageProduct'><h3 className='verProductos'>Ver productos</h3></NavLink>
            </div>
          )}
        </>
      )}
    </div>
    </>

  )

}
export default Cart
