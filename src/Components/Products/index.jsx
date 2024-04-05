import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { UseDiscountedPrice } from "../../hooks/DiscountedPrice";

export function Products({ products }) { 
  
  return (
  <div className="products-container">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image.url} alt={product.title}></img>
        <div className="product-info-container">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-details">{product.description}</p>
          <UseDiscountedPrice price={product.price} discount={product.discountedPrice}/>
          <p className="discounted-price">Discounted price: {product.discountedPrice}</p>
          <p className="price">Price: {product.price}</p>
          <Link to={`/product/${product.id}`}><button>View Product</button></Link>
        </div>
      </div>
    ))};
  </div>
  );
};