import {ProductsBackend} from '../../../infrastructure/interfaces/productBackend.response';

export abstract class HttpAdapter {
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
  abstract post<T>(url: string, data: ProductsBackend): Promise<T>;
  abstract put<T>(url: string, data: ProductsBackend): Promise<T>;
  abstract delete<T>(
    url: string,
    options?: Record<string, unknown>,
  ): Promise<T>;
}
