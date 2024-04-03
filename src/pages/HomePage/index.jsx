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
    <main className='page-body'>
      <SearchBar onSearch={handleSearch}/>
      <h1>Home Page</h1>
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