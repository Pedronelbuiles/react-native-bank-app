import {AxiosAdapter} from './http/axios.adapter';

export const productBackendFetcher = new AxiosAdapter({
  baseUrl:
    'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros',
});
