import axios, {AxiosInstance} from 'axios';
import {HttpAdapter} from './http.adapter';
import {ProductsBackend} from '../../../infrastructure/interfaces/productBackend.response';

interface Options {
  baseUrl: string;
  params?: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;
  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
      headers: {
        authorId: '444',
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T>(
    url: string,
    options?: Record<string, unknown> | undefined,
  ): Promise<T> {
    try {
      const {data} = await this.axiosInstance.get<T>(url, options);
      return data;
    } catch (error) {
      throw new Error(`Error fetching: ${url}`);
    }
  }

  async post<T>(url: string, data: ProductsBackend): Promise<T> {
    try {
      const {data: result} = await this.axiosInstance.post<T>(url, data);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error(`Error fetching post: ${url}`);
    }
  }

  async put<T>(url: string, data: ProductsBackend): Promise<T> {
    try {
      const {data: result} = await this.axiosInstance.put<T>(url, data);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error(`Error fetching put: ${url}`);
    }
  }

  async delete<T>(
    url: string,
    options?: Record<string, unknown> | undefined,
  ): Promise<T> {
    try {
      const {data} = await this.axiosInstance.delete<T>(url, options);
      return data;
    } catch (error) {
      throw new Error(`Error fetching: ${url}`);
    }
  }
}
