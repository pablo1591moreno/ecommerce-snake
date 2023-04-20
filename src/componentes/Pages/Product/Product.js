import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer'
import ProductsList from '../../ProductList/ProductList';
import SeccionProduct1 from '../../SeccionProduct1/SeccionProduct1';
import { useLocation } from 'react-router-dom';

const Product = () => {
  const localizacion = useLocation();
  const isItemDetailPage = localizacion.pathname.includes('/itemDetail/');

  return (
    <div className='ecommers'>
      <SeccionProduct1/>
      {!isItemDetailPage && <ProductsList />}
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/:categoriaId' element={<ItemListContainer />} />
        <Route path='/itemDetail/:productoId' element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
};


export default Product;
