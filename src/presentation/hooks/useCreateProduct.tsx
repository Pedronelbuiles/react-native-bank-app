import {useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {productBackendFetcher} from '../../config/adapters/productBackend.adapter';

export const useCreateProduct = () => {
  const [isLoading, setIsLoading] = useState(true);

  const createProduct = async (
    id: string,
    name: string,
    description: string,
    logo: string,
    release: string,
    revision: string,
  ) => {
    setIsLoading(true);

    const createProductResponse = await UseCases.createProductUseCase(
      productBackendFetcher,
      {
        id,
        name,
        description,
        logo,
        release,
        revision,
      },
    );
    setIsLoading(false);
    return createProductResponse;
  };

  return {
    isLoading,
    createProduct,
  };
};
