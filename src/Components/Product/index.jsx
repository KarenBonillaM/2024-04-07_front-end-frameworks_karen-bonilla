import { useFetchProduct } from "../../hooks/useFetchProduct";
import "./index.css"
import useProductStore from "../../store/index";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
import { UseDiscountedPrice } from "../../hooks/DiscountedPrice";

export function Product() {
  const { product, isLoading, isError } = useFetchProduct();
  const { products } = useFetch();
  const addToCart = useProductStore(state => state.addToCart);
  let {id} = useParams();

  useEffect(() => {
    useProductStore.setState({products});
  }, [products]);

  function onAddToCartClick() {
    addToCart(id);
  }

  if (isLoading || !product) {
    return <div>Loading...</div>
  }
  
  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className="product-container">
        <div key={product.id} className="singleProduct-card">
          <div>
            <img src={product.image.url} alt={product.title} className="single-product-image"></img>
          </div>
          <div className="single-product-details">
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <UseDiscountedPrice price={product.price} discount={product.discountedPrice}/>
              <p className="discounted-price">Discounted Price: {product.discountedPrice}</p>
              <p className="price">Price: {product.price}</p>
              <button onClick={onAddToCartClick}>Add to the cart</button>
            </div>
            <div className="reviews-container">
              <h3>Reviews</h3>
              {product.reviews.map((review) => (
                <div key={review.id} className="review-cart">
                  <h3>{review.username}</h3>
                  <p>Rating: {review.rating}</p>
                  <p>{review.description}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
    </div>
  );
}



