import React, { useState } from 'react';
import { Products } from '../../Components/Products';
import SearchBar from '../../hooks/search';
import { useFetch } from '../../hooks/useFetch';

function HomePage() {

  const { products, isLoading, isError } = useFetch();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const results = products.filter(product =>
      product.title.toLowerCase().includes(query.trim().toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <main className='page-body home-page-body'>
      
      <div className='intro-container'>
        <h1>Products</h1>
      </div>
      <SearchBar onSearch={handleSearch}/>
      <div>
        {isLoading ? (
        <div>Loading products...</div>) : isError ? (<div>Error loading products</div>) : (
        <Products products={searchResults.length > 0 ? searchResults : products}/>
        )}
      </div>
    </main>
  )
}

export default HomePage;