import {HttpAdapter} from '../../../config/adapters/http/http.adapter';

interface Options {
  id: string;
}

export const deleteUseCase = async (
  fetcher: HttpAdapter,
  options: Options,
): Promise<string> => {
  try {
    const validate = await fetcher.delete<string>('/bp/products', {
      params: {
        id: options.id,
      },
    });
    return validate;
  } catch (error) {
    throw new Error('Error fetching validation id');
  }
};
