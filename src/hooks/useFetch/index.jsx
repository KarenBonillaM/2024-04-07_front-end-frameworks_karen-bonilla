import { useState, useEffect } from 'react';
import { API_PRODUCTS } from '../../shared/apis';

export function useFetch() {
  const[products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData(){
      try{
        setIsError(false);
        setIsLoading(true);
        
        const response = await fetch(API_PRODUCTS);
        const json = await response.json();
        setProducts(json.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();

  }, []);
  return { products, isLoading, isError};
};