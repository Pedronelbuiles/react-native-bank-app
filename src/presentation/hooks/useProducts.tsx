import {useEffect, useState} from 'react';
import {Product} from '../../core/entities/product.entity';
import * as UseCases from '../../core/use-cases';
import {productBackendFetcher} from '../../config/adapters/productBackend.adapter';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsFind, setProductsFind] = useState<Product[]>();
  useEffect(() => {
    initialFetch();
  }, []);

  const initialFetch = async () => {
    setIsLoading(true);
    const products = await UseCases.getProductsUseCase(productBackendFetcher);
    setProductsFind(products);
    setIsLoading(false);
  };

  const callFetch = async () => {
    setIsLoading(true);
    const products = await UseCases.getProductsUseCase(productBackendFetcher);
    setProductsFind(products);
    setIsLoading(false);
    return products;
  };

  return {
    isLoading,
    productsFind,
    callFetch,
  };
};
