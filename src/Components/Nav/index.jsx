import React from 'react';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import useProductStore from '../../store';


function Nav() {
  const {getTotalNumberOfItemsInCart} = useProductStore();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" className="nav-link">The ShopNet</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>
        </ul>
        <div className='search-container'>
          <input type='search' placeholder='Search a product' className='search'></input>
          <button type='submit'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className='cart-container'>
          <div>{getTotalNumberOfItemsInCart()}</div>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </nav>
    </div>
  ) 
}

export default Nav;