import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {ProductsBackend} from '../../../infrastructure/interfaces/productBackend.response';
import {ProductsMapper} from '../../../infrastructure/mappers/products.mapper';
import {Product} from '../../entities/product.entity';

export const modifyProductUseCase = async (
  fetcher: HttpAdapter,
  data: Product,
): Promise<Product> => {
  try {
    const productModified = await fetcher.put<ProductsBackend>('/bp/products', {
      id: data.id,
      name: data.name,
      description: data.description,
      logo: data.logo,
      date_release: data.release.replaceAll('/', '-'),
      date_revision: data.revision.replaceAll('/', '-'),
    });
    return ProductsMapper.fromProductBackendToEntity(productModified);
  } catch (error) {
    console.log(error);
    throw new Error('Error modify product');
  }
};
