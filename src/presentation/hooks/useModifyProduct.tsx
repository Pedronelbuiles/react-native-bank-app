import {useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {productBackendFetcher} from '../../config/adapters/productBackend.adapter';

export const useModifyProduct = () => {
  const [isLoading, setIsLoading] = useState(true);

  const modifyProduct = async (
    id: string,
    name: string,
    description: string,
    logo: string,
    release: string,
    revision: string,
  ) => {
    setIsLoading(true);

    const modifyProductResponse = await UseCases.modifyProductUseCase(
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
    return modifyProductResponse;
  };

  return {
    isLoading,
    modifyProduct,
  };
};
