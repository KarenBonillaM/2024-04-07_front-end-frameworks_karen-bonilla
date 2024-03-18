import { useFetchProduct } from "../../hooks/useFetchProduct";
import "./index.css"

export function Product() {
  const { product, isLoading, isError } = useFetchProduct();

  if (isLoading || !product) {
    return <div>Loading...</div>
  }
  
  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className="page-body product-container">
        <div key={product.id} className="singleProduct-card">
          <h2>{product.title}</h2>
          <img src={product.image.url} alt={product.title}></img>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <button>Add to the cart</button>
          <div>
            {product.reviews.map((review) => (
              <div key={review.id} className="review-card">
                <h3>{review.username}</h3>
                <p>Rating: {review.rating}</p>
                <p>{review.description}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
    );
}



