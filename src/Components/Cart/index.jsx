import React from "react";
import useProductStore from "../../store/index";
import "./index.css";


function Cart() {
  const {cart, deleteProductFromCart, getCartTotal, clearCart, getTotalNumberOfItemsInCart} = useProductStore();

  function handleDeleteItem(id) {
    deleteProductFromCart(id);
  }
  console.log(cart, "cart")
  console.log(getCartTotal());
  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <p>Cart total: {getCartTotal().toFixed(2)}</p>
      <div>Cart items: {getTotalNumberOfItemsInCart()}
      </div>
      {cart.map(({id, title, quantity, price }) => (
      <div key={`cart-${id}`}>
        <div>{title}: {quantity}</div>
        <div>{price}</div>
        <button onClick={() => handleDeleteItem(id)}>Remove Item</button>
      </div>
        ))}
        <div>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
    </div>
  );
}

export default Cart;