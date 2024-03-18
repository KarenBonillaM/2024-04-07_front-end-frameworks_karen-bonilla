import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_PRODUCTS } from '../../shared/apis';

export function useFetchProduct() {
  const [product, setProduct]= useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let {id} = useParams();
  console.log(id);

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setProduct(json.data);
      } catch (error) {
        setIsError(true);
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    }
    getData(`${API_PRODUCTS}/${id}`);
  }, [id]);

  return { product, isLoading, isError};
};