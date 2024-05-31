import React from "react";
import { Link } from "react-router-dom";
import { UseDiscountedPrice } from "../../hooks/DiscountedPrice";

export function Products({ products }) {
  return (
    <section className="container px-6 m-auto p-8">
      <div className="products-container grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative product-card overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 col-span-4 lg:col-span-3">
            <img
              src={product.image.url}
              alt={product.title}
              className="aspect-video w-full"></img>
            <div className="product-info-container p-6">
              <h3 className="product-title text-xl font-medium text-slate-700 pb-3">
                {product.title}
              </h3>
              <UseDiscountedPrice
                price={product.price}
                discount={product.discountedPrice}
              />
              <p className="product-details text-slate-400">
                {product.description}
              </p>
              {product.discountedPrice === product.price ? (
                <>
                  <p className="price font-semibold text-lg">
                    Price: {product.price} SEK
                  </p>
                </>
              ) : (
                <>
                  <p className="discounted-price font-semibold text-lg">
                    Discounted price: {product.discountedPrice} SEK
                  </p>
                  <p className="price line-through">
                    Price: {product.price} SEK
                  </p>
                </>
              )}

              <div className="flex justify-end p-6 pt-0 mt-3">
                <Link to={`/product/${product.id}`}>
                  <button className="absolute bottom-2 right-0 left-0 m-auto w-4/5 inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </section>
  );
}
