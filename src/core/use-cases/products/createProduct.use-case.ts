import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {ProductsBackend} from '../../../infrastructure/interfaces/productBackend.response';
import {ProductsMapper} from '../../../infrastructure/mappers/products.mapper';
import {Product} from '../../entities/product.entity';

export const createProductUseCase = async (
  fetcher: HttpAdapter,
  data: Product,
): Promise<Product> => {
  try {
    console.log({
      id: data.id,
      name: data.name,
      description: data.description,
      logo: data.logo,
      date_release: data.release.replaceAll('/', '-'),
      date_revision: data.revision.replaceAll('/', '-'),
    });
    const newProduct = await fetcher.post<ProductsBackend>('/bp/products', {
      id: data.id,
      name: data.name,
      description: data.description,
      logo: data.logo,
      date_release: data.release.replaceAll('/', '-'),
      date_revision: data.revision.replaceAll('/', '-'),
    });
    return ProductsMapper.fromProductBackendToEntity(newProduct);
  } catch (error) {
    console.log(error);
    throw new Error('Error creating product');
  }
};
