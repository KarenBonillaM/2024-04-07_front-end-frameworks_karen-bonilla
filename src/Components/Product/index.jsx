import { Product } from "../ProductComponent";

function ProductPage() {
  return (
    <main className='page-body'>
      <h1>Product Page</h1>
      <div>
        <Product />
      </div>
    </main>
  )
}

export default ProductPage;