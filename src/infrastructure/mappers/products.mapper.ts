import {Product} from '../../core/entities/product.entity';
import {ProductsBackend} from '../interfaces/productBackend.response';

export class ProductsMapper {
  static fromProductBackendToEntity({
    id,
    name,
    description,
    logo,
    date_release,
    date_revision,
  }: ProductsBackend): Product {
    return {
      id,
      name,
      description,
      logo,
      release: date_release,
      revision: date_revision,
    };
  }
}
