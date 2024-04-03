import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export function Products({ products }) { 
  
  return (
  <div className="page-body products-container">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <h2 className="product-title">{product.title}</h2>
        <img src={product.image.url} alt={product.title}></img>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <Link to={`/product/${product.id}`}><button>View Product</button></Link>
      </div>
    ))};
  </div>
  );
};