import Item from "../Item/Item"

const ItemList = ({ itemList }) => {

    return (
        <>
  
            {itemList.map((prod) => {
                return (
                    <Item
                        key={prod.id}
                        nombre={prod.nombre}
                        imagen={prod.imagen}
                        marca={prod.marca}
                        precio={prod.precio}
                        id={prod.id}                        
                    />
                )
            })} 
        </>
    )
}

export default ItemList
