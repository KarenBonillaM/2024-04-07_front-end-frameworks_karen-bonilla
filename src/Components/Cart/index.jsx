import React from "react";
import useProductStore from "../../store/index";
// import "./index.css";
import { NavLink } from "react-router-dom";

function Cart() {
  const {
    cart,
    deleteProductFromCart,
    getCartTotal,
    clearCart,
    getTotalNumberOfItemsInCart,
  } = useProductStore();

  function handleDeleteItem(id) {
    deleteProductFromCart(id);
  }

  return (
    <div className="cart-container my-10 mx-20 ">
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="checkout-header shadow mb-8 py-3.5 px-6 col-span-4 md:col-span-8 lg:col-span-12">
          <h3>Shopping Cart</h3>
          <div>Cart items: {getTotalNumberOfItemsInCart()}</div>
        </div>
      </div>

      <div className="cart block m-0 lg:m-auto grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="cart-items-container m-auto w-full shadow col-span-4">
          {cart.map(({ id, title, quantity, price, image }) => (
            <div
              key={`cart-${id}`}
              className="cart-item flex w-full bg-white border-b border-gray-200">
              <div className="img-cart-container">
                <img
                  src={image.url}
                  alt={title}
                  className="img-cart w-36 h-32 lg:w-48 lg:h-44"></img>
              </div>
              <div className="cart-item-info w-3/4 relative p-3.5 text-xs lg:text-base">
                <div className="pb-2">{title}</div>
                <div className="pb-2">Quantity: {quantity}</div>
                <div className="pb-2">{price} SEK</div>
                <button
                  className="absolute bottom-1 right-1 rounded h-8 w-20 bg-black text-white font-bold text-xs cursor-pointer hover:bg-red-500 transition duration-300 ease-in-out lg:w-11/12 text-xs lg:text-base"
                  onClick={() => handleDeleteItem(id)}>
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-total shadow py-2.5 px-5 relative col-span-4 lg:col-span-8">
          <h3>Order Summary</h3>
          <p className="mb-12 text-base">
            Cart total: {getCartTotal().toFixed(2)} SEK
          </p>
          <div className="flex justify-end p-6">
            <NavLink
              to="/checkoutSuccess"
              className="nav-link checkout-button rounded h-8 w-48 bg-black text-white text-bold cursor-pointer absolute right-0.5 bg-yellow-300 text-black">
              <button
                onClick={clearCart}
                className="checkout-button hover:bg-yellow-400 rounded h-8 w-48 bg-black text-white font-bold cursor-pointer">
                Checkout
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
