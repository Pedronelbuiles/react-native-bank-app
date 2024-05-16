import {HttpAdapter} from '../../../config/adapters/http/http.adapter';

interface Options {
  id: string;
}

export const validateProductIsUseCase = async (
  fetcher: HttpAdapter,
  options: Options,
): Promise<boolean> => {
  try {
    const validate = await fetcher.get<boolean>('/bp/products/verification', {
      params: {
        id: options.id,
      },
    });
    return validate;
  } catch (error) {
    throw new Error('Error fetching validation id');
  }
};
