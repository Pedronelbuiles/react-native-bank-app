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
      // Mapper de mi interfaz a la del backend
      const {data: result} = await this.axiosInstance.post<T>(url, data);
      // url,
      //   {
      //     id: 'CI-CMCV',
      //     name: 'Credito inmobiliario',
      //     description: 'Creadito para adquisición de vivienda',
      //     logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20with%20Visa/Tarjetas/visa-signature-400x225.jpg',
      //     date_release: '2024-05-15',
      //     date_revision: '2025-05-15',
      //   },
      //   options,
      return result;
    } catch (error) {
      console.log(error);
      throw new Error(`Error fetching post: ${url}`);
    }
  }
}
