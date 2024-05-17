import {useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {productBackendFetcher} from '../../config/adapters/productBackend.adapter';

export const useDeleteProduct = () => {
  const [isLoading, setIsLoading] = useState(true);

  const deleteProduct = async (id: string) => {
    setIsLoading(true);

    const modifyProductResponse = await UseCases.deleteUseCase(
      productBackendFetcher,
      {
        id,
      },
    );
    setIsLoading(false);
    return modifyProductResponse;
  };

  return {
    isLoading,
    deleteProduct,
  };
};
