import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import useProductStore from '../../store';
import SearchBar from '../../hooks/search';



function Nav({ onSearch }) {
  const {getTotalNumberOfItemsInCart} = useProductStore();

  return (
      <nav>
        <ul className='nav-container'>
          <li>
            <NavLink to="/contact" className="nav-link nav-link-contact">Contact</NavLink>
          </li>
        </ul>
        <NavLink to="/" className="nav-link logo">The ShopNet</NavLink>
        <div className='cart-container'>
          <NavLink to="/checkout" className="nav-link cart">
            <div className='number-items-in-cart'>{getTotalNumberOfItemsInCart()}</div>
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
        </div>
      </nav>
  ) 
}

export default Nav;