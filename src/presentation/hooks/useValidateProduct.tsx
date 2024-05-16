import {useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {productBackendFetcher} from '../../config/adapters/productBackend.adapter';

export const useValidateProducts = () => {
  const [isLoading, setIsLoading] = useState(true);

  const validateFetch = async (id: string) => {
    setIsLoading(true);
    const validateProduct = await UseCases.validateProductIsUseCase(
      productBackendFetcher,
      {id},
    );
    setIsLoading(false);
    return validateProduct;
  };

  return {
    isLoading,
    validateFetch,
  };
};
