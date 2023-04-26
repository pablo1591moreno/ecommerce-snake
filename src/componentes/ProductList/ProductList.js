import { NavLink } from 'react-router-dom';
import './ProductList.css';
import { useState } from 'react';

function ProductsList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  

  const products = [
    { name: 'Todo', url: '/pageProduct' },
    { name: 'Zapatillas', url: '/pageProduct/zapatillas' },
    { name: 'Remeras', url: '/pageProduct/remeras' },
    { name: 'Pantalones', url: '/pageProduct/pantalones' },
    { name: 'Buzos', url: '/pageProduct/buzos' },
    { name: 'Gorras', url: '/pageProduct/gorras' },
    { name: 'Ojotas', url: '/pageProduct/ojotas' },
  ];

  return (
    <div className="main">
      <div className="dropdownContainer">
        <div className="dropdownHeader" onClick={toggling}>
          {selectedOption || "Todo"}
        </div>
        {isOpen && (
          <div className="dropdownListContainer">
            <ul className="dropdownList">
              {products.map((product) => (
                <NavLink key={product.url} to={product.url} onClick={onOptionClicked(product.name)}>
                  <li>{product.name}</li>
                </NavLink>
              ))}
            </ul>
          </div>
        )}
        <div className="menuClassic">
          {products.map((product) => (
            <NavLink key={product.url} to={product.url}>
              <li>{product.name}</li>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
