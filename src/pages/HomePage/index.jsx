import React, { useState } from "react";
import { Products } from "../../Components/Products";
import SearchBar from "../../hooks/search";
import { useFetch } from "../../hooks/useFetch";
import ProductsImage from "../../Images/products.jpg";

function HomePage() {
  const { products, isLoading, isError } = useFetch();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(query.trim().toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <main className="grow home-page-body">
      <div
        className="relative h-96 flex items-center justify-center mb-5 inset-0"
        style={{
          backgroundImage: `url(${ProductsImage})`,
          backgroundSize: "cover",
          backgroundPositionX: "right",
          backgroundPositionY: "bottom",
        }}>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-yellow-500 to-blue-500 opacity-75"></div> */}
        <h1 className="text-6xl text-white font-bold">
          The ShopNet, your favorite online store
        </h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {isLoading ? (
          <div>Loading products...</div>
        ) : isError ? (
          <div>Error loading products</div>
        ) : (
          <Products
            products={searchResults.length > 0 ? searchResults : products}
          />
        )}
      </div>
    </main>
  );
}

export default HomePage;
