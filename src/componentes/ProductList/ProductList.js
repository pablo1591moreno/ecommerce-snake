import { NavLink } from 'react-router-dom';
import './ProductList.css'

const ProductsList = () => {
  return (
    <div className="mainList" id="mainListDiv">
      <ul>
        <NavLink to='/pageProduct'><li>Todo</li></NavLink>
        <NavLink to='/pageProduct/zapatillas'><li>Zapatillas</li></NavLink>
        <NavLink to='/pageProduct/remeras'><li>Remeras</li></NavLink>
        <NavLink to='/pageProduct/pantalones'><li>Pantalones</li></NavLink>
        <NavLink to='/pageProduct/buzos'><li>Buzos</li></NavLink>
        <NavLink to='/pageProduct/gorras'><li>Gorras</li></NavLink>
        <NavLink to='/pageProduct/ojotas'><li>Ojotas</li></NavLink>
      </ul>
    </div>
  );
};

export default ProductsList;
