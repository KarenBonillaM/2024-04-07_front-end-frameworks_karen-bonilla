import React from "react";
import useProductStore from "../../store/index";
import "./index.css";
import { NavLink } from "react-router-dom";


function Cart() {
  const {cart, deleteProductFromCart, getCartTotal, clearCart, getTotalNumberOfItemsInCart} = useProductStore();

  function handleDeleteItem(id) {
    deleteProductFromCart(id);
  }
  
  return (
    <div className="cart-container">
      <div className="checkout-header">
        <h3>Shopping Cart</h3>
        <div>Cart items: {getTotalNumberOfItemsInCart()}
        </div>
      </div>
      <div className="cart">
        <div className="cart-items-container">
          {cart.map(({id, title, quantity, price, image }) => (
          <div key={`cart-${id}`} className="cart-item">
            <div className="img-cart-container">
              <img src={image.url} alt={title} className="img-cart"></img>
            </div>
            <div className="cart-item-info">
              <div>{title}</div>
              <div>Quantity: {quantity}</div>
              <div>{price} SEK</div>
              <button onClick={() => handleDeleteItem(id)}>Remove Item</button>
            </div>
          </div>
          ))}
        </div>
        <div className="checkout-total">
          <h3>Order Summary</h3>
          <p>Cart total: {getCartTotal().toFixed(2)} SEK</p>
          <NavLink to="/checkoutSuccess" className="nav-link checkout-button">
            <button onClick={clearCart} className="checkout-button">Checkout</button>
          </NavLink>
        </div>
      </div>      
    </div>
  );
}

export default Cart;