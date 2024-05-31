import { useFetchProduct } from "../../hooks/useFetchProduct";
// import "./index.css";
import useProductStore from "../../store/index";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
import { UseDiscountedPrice } from "../../hooks/DiscountedPrice";

export function Product() {
  const { product, isLoading, isError } = useFetchProduct();
  const { products } = useFetch();
  const addToCart = useProductStore((state) => state.addToCart);
  let { id } = useParams();

  useEffect(() => {
    useProductStore.setState({ products });
  }, [products]);

  function onAddToCartClick() {
    addToCart(id);
  }

  if (isLoading || !product) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="product-container">
      <section
        key={product.id}
        className="singleProduct-card flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        <div className="single-product-image-container flex-1">
          <img
            src={product.image.url}
            alt={product.title}
            className="single-product-image flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row"></img>
        </div>
        <div className="single-product-details flex-1 p-6 sm:mx-6 sm:px-0">
          <div className="product-info gap-4 mb-4">
            <h3 className="text-2xl font-semibold text-slate-700 pb-3">
              {product.title}
            </h3>
            <p>{product.description}</p>
            <UseDiscountedPrice
              price={product.price}
              discount={product.discountedPrice}
            />
            {product.discountedPrice === product.price ? (
              <>
                <p className="price font-semibold text-lg">
                  Price: {product.price}
                </p>
              </>
            ) : (
              <>
                <p className="discounted-price font-semibold text-lg">
                  Discounted Price: {product.discountedPrice}
                </p>
                <p className="price line-through">Price: {product.price}</p>
              </>
            )}
            <button
              onClick={onAddToCartClick}
              className="uppercase my-6 m-auto w-full inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
              Add to cart
            </button>
          </div>
          <div className="reviews-container">
            <h3 className="font-semibold">Reviews</h3>
            {product.reviews.map((review) => (
              <div key={review.id} className="review-cart ">
                <h3>{review.username}</h3>
                <p>Rating: {review.rating}</p>
                <p>{review.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
