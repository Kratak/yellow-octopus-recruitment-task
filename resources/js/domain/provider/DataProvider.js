import DataProviderInstance from './DataProviderInstance';
import { urls } from '../apiConstans';

class DataProvider {
  constructor() {
    this.axios = DataProviderInstance.createAxiosInstance(urls.baseURL);
  }
}

export default DataProvider;
