import { Products } from '../Products';

function Home() {
  // const { products, cart, fetchProducts } = useProductStore();

  
  // useEffect(() => {
  //   fetchProducts();  
  // }, [fetchProducts])
  
  // console.log({products, cart});

  return (
    <main className='page-body'>
      <h1>Home Page</h1>
      <div>
        <Products />
      </div>
    </main>
  )
}

export default Home;