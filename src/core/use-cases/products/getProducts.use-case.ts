import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {Product} from '../../entities/product.entity';
import {ProductsBackend} from '../../../infrastructure/interfaces/productBackend.response';
import {ProductsMapper} from '../../../infrastructure/mappers/products.mapper';

export const getProductsUseCase = async (
  fetcher: HttpAdapter,
): Promise<Product[]> => {
  try {
    const products = await fetcher.get<ProductsBackend[]>('/bp/products');
    return products.map(ProductsMapper.fromProductBackendToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching getProducts');
  }
};
