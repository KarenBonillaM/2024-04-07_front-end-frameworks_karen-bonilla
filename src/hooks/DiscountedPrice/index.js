import React from "react";

export function UseDiscountedPrice({ price, discount }) {
  const discountedPrice = ((price - discount) / price * 100).toFixed(0);
  if(discountedPrice > 0) {
  return (<p className="price-discount-label">Discount {discountedPrice}%</p>)};
} 